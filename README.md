# Install

Run the following command.

```
sh setup.sh
```

# ESP API CALLS

The API key used by the ESPs should be set at line 63 in `server.js`

```
// Constants variables used for the ESP communication
const API_KEY = 'api_key';
```

Here are the API calls available for the ESPs.

/api/v0/machine/access (api_key, rfid, id_machine)
/api/v0/machine/stop   (api_key, rfid, id_machine)
/api/v0/machine/add    (api_key, rfid)

# ADMIN API CALLS

The admins log in using the password specified at line 60 in `server.js`

```
const PASSWORD = 'password';
```

Here are the API calls available for the admin web interface.

/api/v0/admin/login (password) => token

/api/v0/admin/users/all    (token) => users
/api/v0/admin/users/get    (token, id_user) => user
/api/v0/admin/users/add    (token, first_name, last_name) => user
/api/v0/admin/users/delete (token, id_user)

/api/v0/admin/users/machine/all       (token, id_user) => machines
/api/v0/admin/users/machine/unallowed (token, id_user) => machines
/api/v0/admin/users/machine/set       (token, id_machine, id_user, level)
/api/v0/admin/users/machine/delete    (token, id_machine, id_user)

/api/v0/admin/users/rfid/get    (token, id_user) => rfids
/api/v0/admin/users/rfid/add    (token, id_user, rfid)
/api/v0/admin/users/rfid/set    (token, id_user)
/api/v0/admin/users/rfid/delete (token, rfid)
  
/api/v0/admin/machines/all    (token) => machines
/api/v0/admin/machines/add    (token, name, default_level) => machine
/api/v0/admin/machines/set    (token, id_machine, default_level)
/api/v0/admin/machines/delete (token, id_machine)
  
/api/v0/admin/monitoring/all    (token) => monitoring_entries
/api/v0/admin/monitoring/delete (token, id_entry) 

# License

This software is available under the MIT license.