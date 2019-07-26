DROP DATABASE IF EXISTS fablab;

CREATE DATABASE fablab;
USE fablab;

DROP TABLE IF EXISTS machines;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rfids;
DROP TABLE IF EXISTS monitoring;
DROP TABLE IF EXISTS user_levels;

CREATE TABLE machines 
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    default_level INT(11),
	running TINYINT(1) DEFAULT '0',
	broken TINYINT(1) DEFAULT '0',
    PRIMARY KEY (id)
);

CREATE TABLE users
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    PRIMARY KEY (id)
);

CREATE TABLE rfids
(
    rfid INT(20) NOT NULL,
    id_user INT(11) NOT NULL,
    PRIMARY KEY (rfid),
    FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE monitoring 
(
    id INT(11) NOT NULL AUTO_INCREMENT,
    id_machine INT(11) NOT NULL,
    rfid INT(11) NOT NULL,
    content TINYINT(4) DEFAULT '0',
    date DATETIME,
    PRIMARY KEY (id),
	FOREIGN KEY (id_machine) REFERENCES machines(id),
	FOREIGN KEY (rfid) REFERENCES rfids(rfid)
);

CREATE TABLE user_levels
(
	id_user INT(11) NOT NULL,
	id_machine INT(11) NOT NULL,
	level TINYINT(4) NOT NULL,
	PRIMARY KEY (id_user, id_machine),
	FOREIGN KEY (id_user) REFERENCES users(id),
	FOREIGN KEY (id_machine) REFERENCES machines(id)
);