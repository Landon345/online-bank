"use strict";
const db = require("../db-connection");

module.exports.up = async function (next) {
  await db.query(
    `CREATE TABLE accounts (account_id Serial NOT NULL PRIMARY KEY, ` +
      `username varchar(255) NOT NULL, balance decimal(12,2) DEFAULT 0 NOT NULL,` +
      `account_type varchar(100) NOT NULL, account_category varchar(100) NOT NULL, ` +
      `cd_term varchar(100), debit boolean, checks boolean, transfers boolean)`
  );
  next();
};

module.exports.down = async function (next) {
  await db.query("DROP TABLE IF EXISTS accounts");
  next();
};

// one to many relationship with users -> many -> accounts.
// account_id as Primary Key
// username as owner of the account
// balance, amount in the account.
// account_type,  either checking or saving or cd or some other ones.
// account_category, individual, joint, others.
// cdTerm, if category is a cd, then it should have a term.
// debit, boolean of if they want a debit card
// checks, boolean of if they want checks
// transfers, boolean if they want to allow transfers
