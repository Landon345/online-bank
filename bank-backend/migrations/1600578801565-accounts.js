"use strict";
const db = require("../db-connection");

module.exports.up = async function (next) {
  await db.query(
    `CREATE TABLE accounts (account_id Serial NOT NULL PRIMARY KEY, ` +
      `type varchar(255) NOT NULL, balance decimal DEFAULT 0 NOT NULL)`
  );
  next();
};

module.exports.down = async function (next) {
  await db.query("DROP TABLE users");
  next();
};
