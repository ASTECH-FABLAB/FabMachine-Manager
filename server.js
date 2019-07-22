/**
 * ***************************************************************************
 * # INSTALL
 * ***************************************************************************
 * 
 * npm init => entry point: api.js
 * 
 * npm install express
 * npm install mysql
 * npm install body-parser
 * 
 * ***************************************************************************
 * # ESP API CALLS
 * ***************************************************************************
 * 
 * /api/v0/machine/access (api_key, rfid, id_machine)
 * /api/v0/machine/stop   (api_key, rfid, id_machine)
 * 
 * ***************************************************************************
 * # ADMIN API CALLS
 * ***************************************************************************
 * 
 * /api/v0/admin/login (password) => token
 * 
 * /api/v0/admin/users/all    (token) => users
 * /api/v0/admin/users/get    (token, id_user) => user
 * /api/v0/admin/users/add    (token, first_name, last_name) => user
 * /api/v0/admin/users/delete (token, id_user)
 * 
 * /api/v0/admin/users/machine/all       (token, id_user) => machines
 * /api/v0/admin/users/machine/unallowed (token, id_user) => machines
 * /api/v0/admin/users/machine/set       (token, id_machine, id_user, level)
 * /api/v0/admin/users/machine/delete    (token, id_machine, id_user)
 * 
 * /api/v0/admin/users/rfid/get    (token, id_user) => rfids
 * /api/v0/admin/users/rfid/add    (token, id_user, rfid)
 * /api/v0/admin/users/rfid/delete (token, rfid)
 * 
 * /api/v0/admin/machines/all    (token) => machines
 * /api/v0/admin/machines/add    (token, name, default_level) => machine
 * /api/v0/admin/machines/set    (token, id_machine, default_level)
 * /api/v0/admin/machines/delete (token, id_machine)
 * 
 * /api/v0/admin/monitoring/all    (token) => monitoring_entries
 * /api/v0/admin/monitoring/delete (token, id_entry) 
 */
let express = require('express');
let path = require('path');
let crypto = require('crypto');
let mysql = require('mysql');
let bodyParser = require('body-parser');

// The Express application
const app = express();

// The server port and admin API password
const PORT = 5000;
const PASSWORD = 'astech';

// Constants variables used for the ESP communication
const API_KEY = 'id1sYelNJkCeiGZOJHY7dY91Lq6JPLCQ';

const API_ACCESS_ERROR = '0';
const API_ACCESS_INVALID_REQUEST_TYPE = '1';
const API_ACCESS_INVALID_REQUEST_PARAMETERS = '2';
const API_ACCESS_INVALID_API_KEY = '3';
const API_ACCESS_MACHINE_BROKEN = '4';
const API_ACCESS_UNAUTHORIZED_ACCESS = '5';
const API_ACCESS_AUTHORIZED_ACCESS = '6';

const API_STOP_INVALID_REQUEST_TYPE = '0';
const API_STOP_INVALID_REQUEST_PARAMETERS = '1';
const API_STOP_INVALID_API_KEY = '2';
const API_STOP_DONE = '3';

const API_ADD_INVALID_REQUEST_TYPE = '0';
const API_ADD_INVALID_REQUEST_PARAMETERS = '1';
const API_ADD_INVALID_API_KEY = '2';
const API_ADD_UNSET_USER = '3';
const API_ADD_DONE = '4';

// Constants variables used for the web interface
const API_ADMIN_INVALID_PASSWORD = 'INVALID_PASSWORD';
const API_ADMIN_INVALID_TOKEN = 'INVALID_TOKEN';

const API_ADMIN_MYSQL_ERROR_SELECT = 'ERROR_SELECT';
const API_ADMIN_MYSQL_ERROR_INSERT = 'ERROR_INSERT';
const API_ADMIN_MYSQL_ERROR_DELETE = 'ERROR_DELETE';
const API_ADMIN_MYSQL_ERROR_UPDATE = 'ERROR_UPDATE';

const API_ADMIN_SUCCESS = 'SUCCESS';

// Constants variables used for the monitoring messages
const API_ADMIN_MONITORING_STOP = '1';
const API_ADMIN_MONITORING_TRY_RESTRICTED = '2';
const API_ADMIN_MONITORING_TRY_UNAUTHORIZED = '3';
const API_ADMIN_MONITORING_START_TEMPORARILY = '4';
const API_ADMIN_MONITORING_START_PERMANENT = '5';

// The local server token randomly generated on startup
let TOKEN = '';

// The local server add API user id
let USER_ID = null;

// The MySQL connection used for each database transaction
let CONN = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'astech',
	database: 'fablab'
});

// Using the BodyParser for JSON body decoding
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static(__dirname + '/app'));

// Starting the server
app.listen(PORT, () => {
	console.log('Server started on port ' + PORT);
	console.log('Arduino secret API key ' + API_KEY);

	// Generates a new random token which will be used
	crypto.randomBytes(24, function (ex, buf) {
		TOKEN = buf.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');

		console.log('Generated random token ' + TOKEN);
	});

	// Connects the MySQL adapter to the database
	CONN.connect(function (err) {
		if (err) throw err;

		console.log('Connected to the MySQL server');
	});
});

/**
 * Returns the current server datetime with the SQL format
 * @returns {string} the datetime
 */
function datetime() {
	var date = new Date();

	var hour = date.getHours();
	hour = (hour < 10 ? '0' : '') + hour;

	var min = date.getMinutes();
	min = (min < 10 ? '0' : '') + min;

	var sec = date.getSeconds();
	sec = (sec < 10 ? '0' : '') + sec;

	var year = date.getFullYear();

	var month = date.getMonth() + 1;
	month = (month < 10 ? '0' : '') + month;

	var day = date.getDate();
	day = (day < 10 ? '0' : '') + day;

	return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
}

/**
 * Returns a valid response
 * @param {response} res the HTTP response
 * @param {string} message the feedback message
 */
function validResponse(res, message) {
	res.status(200).send({
		validity: true,
		message: message
	});
}

/**
 * Returns a valid response with the result data
 * @param {response} res the HTTP response
 * @param {any} data the return data
 */
function validResponseData(res, data) {
	res.status(200).send({
		validity: true,
		message: API_ADMIN_SUCCESS,
		result: data
	});
}

/**
 * Returns an invalid response
 * @param {response} res the HTTP response
 * @param {string} message the feedback message
 */
function invalidResponse(res, message) {
	res.status(200).send({
		validity: false,
		message: message
	});
}

/**
 * GET handler for the main application
 */
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname));
});

/**
 * GET handler for the machine access API (shouldn't be called)
 */
app.get('/api/v0/machine/access', (req, res) => {
	res.status(200).send(API_ACCESS_INVALID_REQUEST_TYPE);
});

/**
 * POST handler for the machine access API.
 * The code in the response corresponds to the request state
 * 
 * @input machine, rfid
 * @output the API code
 */
app.post('/api/v0/machine/access', (req, res) => {
	let apiKey = req.body.api_key;

	let rfid = req.body.rfid;
	let machine = req.body.machine;

	if (apiKey && rfid && machine) {
		if (apiKey === API_KEY) {
			CONN.query('SELECT broken FROM machines WHERE id=? LIMIT 1', [machine], (err, result) => {
				if (err) {
					res.status(200).send(API_ACCESS_ERROR);
				} else {
					if (result.length == 0) {
						res.status(200).send(API_ACCESS_ERROR);
					} else {
						if (result[0].broken == 0) {
							CONN.query('SELECT UL.level, U.id FROM (users AS U INNER JOIN rfids AS RFID ON U.id = RFID.id_user) INNER JOIN user_levels AS UL ON UL.id_user = U.id WHERE UL.id_machine=? AND RFID.rfid=? LIMIT 1;', [machine, rfid], (err, result) => {
								if (err) {
									res.status(200).send(API_ACCESS_ERROR);
								} else {
									let date = datetime();

									if (result.length != 0) {
										let level = result[0].level;

										if (level == 0) {
											res.status(200).send(API_ACCESS_UNAUTHORIZED_ACCESS);

											CONN.query('INSERT INTO monitoring (id_machine, rfid, content, date) VALUES (?, ?, ?, ?);', [machine, rfid, API_ADMIN_MONITORING_TRY_UNAUTHORIZED, date], (err) => { });
										} else if (level == 1) {
											let user = result[0].id;

											res.status(200).send(API_ACCESS_AUTHORIZED_ACCESS);

											CONN.query('UPDATE user_levels SET level=0 WHERE id_machine=? AND id_user=?;', [machine, user], (err) => {
												CONN.query('INSERT INTO monitoring (id_machine, rfid, content, date) VALUES (?, ?, ?, ?);', [machine, rfid, API_ADMIN_MONITORING_START_TEMPORARILY, date], (err) => {
													CONN.query('UPDATE machines SET running=1 WHERE id=?;'[machine], (err) => { });
												});
											});
										} else {
											res.status(200).send(API_ACCESS_AUTHORIZED_ACCESS);

											CONN.query('INSERT INTO monitoring (id_machine, rfid, content, date) VALUES (?, ?, ?, ?);', [machine, rfid, API_ADMIN_MONITORING_START_PERMANENT, date], (err) => {
												CONN.query('UPDATE machines SET running=1 WHERE id=?;'[machine], (err) => { });
											});
										}
									} else {
										res.status(200).send(API_ACCESS_UNAUTHORIZED_ACCESS);

										CONN.query('INSERT INTO monitoring (id_machine, rfid, content, date) VALUES (?, ?, ?, ?);', [machine, rfid, API_ADMIN_MONITORING_TRY_RESTRICTED, date], (err) => { });
									}
								}
							});
						} else {
							res.status(200).send(API_ACCESS_MACHINE_BROKEN);
						}
					}
				}
			});
		} else {
			res.status(200).send(API_ACCESS_INVALID_API_KEY);
		}
	} else {
		res.status(200).send(API_ACCESS_INVALID_REQUEST_PARAMETERS);
	}
});

/**
 * GET handler for the machine stop API (shouldn't be called)
 */
app.get('/api/v0/machine/stop', (req, res) => {
	res.status(200).send(API_STOP_INVALID_REQUEST_TYPE);
});

/**
 * POST handler for the machine stop API.
 * The code in the response corresponds to the request state
 * 
 * @input machine, rfid
 * @output the API code
 */
app.post('/api/v0/machine/stop', (req, res) => {
	let apiKey = req.body.api_key;

	let rfid = req.body.rfid;
	let machine = req.body.machine;

	if (apiKey && rfid && machine) {
		if (apiKey === API_KEY) {
			let date = datetime();

			CONN.query('INSERT INTO monitoring (id_machine, rfid, content, date) VALUES (?, ?, ?, ?);', [machine, rfid, API_ADMIN_MONITORING_STOP, date], (err) => {
				CONN.query('UPDATE machines SET running=0 WHERE id=?;'[machine], (err) => { });
			});

			res.status(200).send(API_STOP_DONE);
		} else {
			res.status(200).send(API_STOP_INVALID_API_KEY);
		}
	} else {
		res.status(200).send(API_STOP_INVALID_REQUEST_PARAMETERS);
	}
});

/**
 * GET handler for the machine add API (shouldn't be called)
 */
app.get('/api/v0/machine/add', (req, res) => {
	res.status(200).send(API_ADD_INVALID_REQUEST_TYPE);
});

/**
 * POST handler for the machine add API.
 * The code in the response corresponds to the request state
 * 
 * @input rfid
 * @output the API code
 */
app.post('/api/v0/machine/add', (req, res) => {
	let apiKey = req.body.api_key;

	let rfid = req.body.rfid;

	if (apiKey && rfid) {
		if (apiKey === API_KEY) {
			if (USER_ID) {
				CONN.query('INSERT INTO rfids (rfid, id_user) VALUES (?, ?);', [rfid, ID_USER], (err) => { });

				USER_ID = null;

				res.status(200).send(API_ADD_DONE);
			} else {
				res.status(200).send(API_ADD_UNSET_USER);
			}
		} else {
			res.status(200).send(API_ADD_INVALID_API_KEY);
		}
	} else {
		res.status(200).send(API_ADD_INVALID_REQUEST_PARAMETERS);
	}
});

/**
 * POST handler for the admin login API.
 * The response contains the server local token used for the API
 * 
 * @input password
 * @output the token
 */
app.post('/api/v0/admin/login', (req, res) => {
	let password = req.body.password;

	if (password === PASSWORD) {
		validResponseData(res, TOKEN);
	} else {
		invalidResponse(res, API_ADMIN_INVALID_PASSWORD);
	}
});

/**
 * POST handler for the admin users getter API
 * The response contains the list of the registered users
 * 
 * @inputs token
 * @outputs the user list
 */
app.post('/api/v0/admin/users/all', (req, res) => {
	let token = req.body.token;

	if (token === TOKEN) {
		CONN.query('SELECT * FROM users;', (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
			} else {
				validResponseData(res, result);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user getter API
 * The response contains the data of a single registered user
 * 
 * @inputs token, id_user
 * @outputs the user data
 */
app.post('/api/v0/admin/users/get', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;

	if (token === TOKEN) {
		CONN.query('SELECT * FROM users WHERE id=? LIMIT 1;', [idUser], (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
			} else {
				validResponseData(res, result[0]);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user add API
 * Adds a new user to the database
 * 
 * @inputs token, first_name, last_name
 * @outputs the new user
 */
app.post('/api/v0/admin/users/add', (req, res) => {
	let token = req.body.token;

	let firstName = req.body.first_name;
	let lastName = req.body.last_name;

	if (token === TOKEN) {
		CONN.query('INSERT INTO users (first_name, last_name) VALUES (?, ?);', [firstName, lastName], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_INSERT);
			} else {
				CONN.query('SELECT * FROM users WHERE id = LAST_INSERT_ID();', (err, result) => {
					if (err) {
						validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT)
					} else {
						CONN.query('INSERT INTO user_levels (id_machine, id_user, level) SELECT id, LAST_INSERT_ID(), 2 * (default_level) - 2 FROM machines WHERE default_level <> 0;', (err) => {
							if (err) {
								validResponse(res, API_ADMIN_MYSQL_ERROR_INSERT);
							} else {
								validResponseData(res, result[0]);
							}
						});
					}
				});
			}
		});
	} else {
		invalidResponse(res);
	}
});

/**
 * POST handler for the admin user delete API
 * Deletes an existing user from the database
 * 
 * @inputs token, id_user
 * @outputs none
 */
app.post('/api/v0/admin/users/delete', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;

	if (token === TOKEN) {
		CONN.query('DELETE FROM user_levels WHERE id_user=?;', [idUser], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
			} else {
				CONN.query('DELETE M FROM monitoring AS M INNER JOIN rfids AS RFID ON RFID.rfid = M.rfid WHERE id_user=?;', [idUser], (err) => {
					if (err) {
						validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
					} else {
						CONN.query('DELETE FROM rfids WHERE id_user=?;', [idUser], (err) => {
							if (err) {
								validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
							} else {
								CONN.query('DELETE FROM users WHERE id=?;', [idUser], (err) => {
									if (err) {
										validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
									} else {
										validResponse(res, API_ADMIN_SUCCESS);
									}
								});
							}
						});
					}
				});
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user machine gette API
 * Returns the machines for which the user has an access to with the levels
 * 
 * @inputs token, id_user
 * @outputs the machine list
 */
app.post('/api/v0/admin/users/machine/all', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;

	if (token === TOKEN) {
		CONN.query('SELECT M.id, UL.level, M.name FROM (machines AS M INNER JOIN user_levels AS UL ON M.id = UL.id_machine) INNER JOIN users AS U ON UL.id_user = U.id WHERE U.id=?;', [idUser], (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
			} else {
				validResponseData(res, result);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user machine unallowed getter API
 * Returns the machines for which the user has not any access
 * 
 * @inputs token, id_user
 * @outputs the restricted machine list
 */
app.post('/api/v0/admin/users/machine/unallowed', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;

	if (token === TOKEN) {
		CONN.query('SELECT id, name FROM machines WHERE id NOT IN (SELECT id_machine FROM user_levels WHERE id_user=?);', [idUser], (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
			} else {
				validResponseData(res, result);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user machine setter API
 * Sets the acces level to machine for the specified user
 * 
 * @inputs token, id_user, id_machine, level
 * @outputs none
 */
app.post('/api/v0/admin/users/machine/set', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;
	let idMachine = req.body.id_machine;
	let level = req.body.level;

	if (token === TOKEN) {
		CONN.query('SELECT level FROM user_levels WHERE id_machine=? AND id_user=? LIMIT 1;', [idMachine, idUser], (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
			} else {
				if (result.length != 0) {
					CONN.query('UPDATE user_levels SET level=? WHERE id_machine=? AND id_user=?;', [level, idMachine, idUser], (err) => {
						if (err) {
							validResponse(res, API_ADMIN_MYSQL_ERROR_UPDATE);
						} else {
							validResponse(res, API_ADMIN_SUCCESS);
						}
					});
				} else {
					CONN.query('INSERT INTO user_levels (id_machine, id_user, level) VALUES (?, ?, ?);', [idMachine, idUser, level], (err) => {
						if (err) {
							validResponse(res, API_ADMIN_MYSQL_ERROR_INSERT);
						} else {
							validResponse(res, API_ADMIN_SUCCESS);
						}
					});
				}
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user machine API
 * Returns the machines for which the user has an access to with the levels
 * 
 * @inputs token, id_user, id_machine
 * @outputs the machine list
 */
app.post('/api/v0/admin/users/machine/delete', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;
	let idMachine = req.body.id_machine;

	if (token === TOKEN) {
		CONN.query('DELETE FROM user_levels WHERE id_machine=? AND id_user=?;', [idMachine, idUser], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
			} else {
				validResponse(res, API_ADMIN_SUCCESS);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user rfid getter API
 * Returns the list of RFID card assigned to the specified ID
 * 
 * @inputs token, id_user
 * @outputs the RFID list
 */
app.post('/api/v0/admin/users/rfid/get', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;

	if (token === TOKEN) {
		CONN.query('SELECT rfid FROM rfids AS RFID INNER JOIN users as U ON U.id = RFID.id_user WHERE U.id=?;', [idUser], (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_UPDATE);
			} else {
				validResponseData(res, result);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user rfid add API
 * Adds a new RFID card to the specified user
 * 
 * @inputs token, id_user, rfid
 * @outputs none
 */
app.post('/api/v0/admin/users/rfid/add', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;
	let rfid = req.body.rfid;

	if (token === TOKEN) {
		CONN.query('INSERT INTO rfids (rfid, id_user) VALUES (?, ?);', [rfid, idUser], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_INSERT);
			} else {
				validResponse(res, API_ADMIN_SUCCESS);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user rfid set API
 * Adds a new RFID card to the specified user
 * 
 * @inputs token, id_user
 * @outputs none
 */
app.post('/api/v0/admin/users/rfid/set', (req, res) => {
	let token = req.body.token;

	let idUser = req.body.id_user;

	if (token === TOKEN) {
		USER_ID = idUser;

		validResponse(res, API_ADMIN_SUCCESS);
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin user rfid delete API
 * Deletes an RFID for an existing user
 * 
 * @inputs token, rfid
 * @outputs none
 */
app.post('/api/v0/admin/users/rfid/delete', (req, res) => {
	let token = req.body.token;

	let rfid = req.body.rfid;

	if (token === TOKEN) {
		CONN.query('DELETE FROM monitoring WHERE rfid=?;', [rfid], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
			} else {
				CONN.query('DELETE FROM rfids WHERE rfid=?;', [rfid], (err) => {
					if (err) {
						validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
					} else {
						validResponse(res, API_ADMIN_SUCCESS);
					}
				});
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin machines getter API
 * The response contains the list of the machines
 * 
 * @inputs token
 * @outputs the machine list
 */
app.post('/api/v0/admin/machines/all', (req, res) => {
	let token = req.body.token;

	if (token === TOKEN) {
		CONN.query('SELECT * FROM machines', (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
			} else {
				validResponseData(res, result);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin machines add API
 * Adds a new machine into the database
 * 
 * @inputs token, name, default_level
 * @outputs the new added machine
 */
app.post('/api/v0/admin/machines/add', (req, res) => {
	let token = req.body.token;

	let name = req.body.name;
	let defaultLevel = req.body.default_level;

	if (token === TOKEN) {
		CONN.query('INSERT INTO machines (name, default_level) VALUE (?, ?);', [name, defaultLevel], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_INSERT);
			} else {
				CONN.query('SELECT * FROM machines WHERE id = LAST_INSERT_ID();', (err, result) => {
					if (err) {
						validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
					} else {
						if (defaultLevel == 0) {
							validResponseData(res, result[0]);
						} else {
							CONN.query('INSERT INTO user_levels (id_machine, id_user, level) SELECT LAST_INSERT_ID(), id, ? FROM users', [2 * defaultLevel - 2], (err) => {
								if (err) {
									validResponse(res, API_ADMIN_MYSQL_ERROR_INSERT);
								} else {
									validResponseData(res, result[0]);
								}
							});
						}
					}
				});
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin machine level setter API
 * Sets the default acces level to machine
 * 
 * @inputs token, id_machine, default_level
 * @outputs none
 */
app.post('/api/v0/admin/machines/set/level', (req, res) => {
	let token = req.body.token;

	let idMachine = req.body.id_machine;
	let defaultLevel = req.body.default_level;

	if (token === TOKEN) {
		CONN.query('UPDATE machines SET default_level=? WHERE id=?;', [defaultLevel, idMachine], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_UPDATE);
			} else {
				validResponse(res, API_ADMIN_SUCCESS);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin machine broken setter API
 * Sets the current machine broken state
 * 
 * @inputs token, id_machine, broken
 * @outputs none
 */
app.post('/api/v0/admin/machines/set/broken', (req, res) => {
	let token = req.body.token;

	let idMachine = req.body.id_machine;
	let broken = req.body.broken;

	if (token === TOKEN) {
		CONN.query('UPDATE machines SET broken=? WHERE id=?;', [broken, idMachine], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_UPDATE);
			} else {
				validResponse(res, API_ADMIN_SUCCESS);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin machines delete API
 * Deletes a machine from the database
 * 
 * @inputs token, id_machine
 * @outputs none
 */
app.post('/api/v0/admin/machines/delete', (req, res) => {
	let token = req.body.token;

	let idMachine = req.body.id_machine;

	if (token === TOKEN) {
		CONN.query('DELETE FROM user_levels WHERE id_machine=?;', [idMachine], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
			} else {
				CONN.query('DELETE ME FROM monitoring AS ME INNER JOIN machines AS M ON ME.id_machine = M.id WHERE M.id=?;', [idMachine], (err) => {
					if (err) {
						validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
					} else {
						CONN.query('DELETE FROM machines WHERE id=?;', [idMachine], (err) => {
							if (err) {
								validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
							} else {
								validResponse(res, API_ADMIN_SUCCESS);
							}
						});
					}
				});
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin monitoring entries getter API
 * The response contains the list of the monitoring entries
 * 
 * @inputs token
 * @outputs the monitoring entry list
 */
app.post('/api/v0/admin/monitoring/all', (req, res) => {
	let token = req.body.token;

	if (token === TOKEN) {
		CONN.query('SELECT ME.id, ME.content, ME.date, ME.rfid, M.name, U.first_name, U.last_name FROM ((monitoring AS ME INNER JOIN machines AS M ON M.id = ME.id_machine) INNER JOIN rfids AS RFID ON RFID.rfid = ME.rfid) INNER JOIN users AS U ON U.id = RFID.id_user ORDER BY ME.id DESC LIMIT 1000;', (err, result) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_SELECT);
			} else {
				validResponseData(res, result);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * POST handler for the admin monitoring entry delete API
 * Deletes the specified monitoring entry from the database
 * 
 * @inputs token, id_entry
 * @outputs none
 */
app.post('/api/v0/admin/monitoring/delete', (req, res) => {
	let token = req.body.token;

	let idEntry = req.body.id_entry;

	if (token === TOKEN) {
		CONN.query('DELETE FROM monitoring WHERE id=?;', [idEntry], (err) => {
			if (err) {
				validResponse(res, API_ADMIN_MYSQL_ERROR_DELETE);
			} else {
				validResponse(res, API_ADMIN_SUCCESS);
			}
		});
	} else {
		invalidResponse(res, API_ADMIN_INVALID_TOKEN);
	}
});

/**
 * GET handler for the monitoring route
 */
app.get('/monitoring', function (req, res) {
	res.redirect("/");
});

/**
 * GET handler for the users route
 */
app.get('/users', function (req, res) {
	res.redirect("/");
});

/**
 * GET handler for the machines route
 */
app.get('/machines', function (req, res) {
	res.redirect("/");
});

/**
 * GET handler for the user route
 */
app.get('/user/*', function (req, res) {
	res.redirect("/");
});