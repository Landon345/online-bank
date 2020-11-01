"use strict";
const db = require("../db-connection");

//username
//password
//personal_information_id
//api_key

module.exports.up = async function (next) {
  await db.query(
    `CREATE TABLE users (username varchar(255) NOT NULL Primary key, password varchar(255) NOT NULL, ` +
      `api_key varchar(255))`
  );
  next();
};

module.exports.down = async function (next) {
  await db.query("DROP TABLE IF EXISTS users");
  next();
};
