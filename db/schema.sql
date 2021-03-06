DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL Default CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
