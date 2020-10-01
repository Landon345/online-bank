"use strict";
const db = require("../db-connection");

module.exports.up = async function (next) {
  await db.query(
    `CREATE TABLE users (username varchar(255) NOT NULL Primary key, account_id integer, password varchar(255) NOT NULL, api_key varchar(255))`
  );
  next();
};

module.exports.down = async function (next) {
  await db.query("DROP TABLE users");
  next();
};
