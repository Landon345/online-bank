"use strict";
const db = require("../db-connection");

module.exports.up = async function (next) {
  await db.query(
    `CREATE TABLE transactions (id Serial NOT NULL PRIMARY KEY, account_id integer NOT NULL, ` +
      `description varchar(255) NOT NULL, amount decimal(12,2) DEFAULT 0 NOT NULL,` +
      `date timestamp NOT NULL)`
  );
  next();
};

module.exports.down = async function (next) {
  await db.query("DROP TABLE IF EXISTS transactions");
  next();
};
