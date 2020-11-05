const express = require("express");
const db = require("../db-connection");
const Router = express.Router();

// Routes
Router.get("/", async (req, res) => {
  //   res.send("server on online bank");
  try {
    const results = await db.query("select * from users");
    res.send(results.rows);
  } catch (e) {
    res.send(e);
  }
});

Router.post("/register/logininfo", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("logininfo body :>> ", req.body);
    const results = await db.query(
      `INSERT INTO users (username, password` +
        `) values ('${username}', '${password}')`
    );
    res.send({ success: true, data: req.body });
  } catch (e) {
    console.log("logininfo error :>> ", e);
    res.send({ success: false, data: e });
  }
});
Router.post("/register/accounts", async (req, res) => {
  try {
    console.log("accounts body", req.body);
    const {
      username,
      amount,
      accountType,
      accountCategory,
      cdTerm,
      debit,
      checks,
      transfers,
    } = req.body[0];
    const results = await db.query(
      `INSERT INTO accounts (` +
        `username, balance, account_type, account_category, ` +
        `cd_term, debit, checks, transfers) values (${
          username ? `'${username}'` : null
        }, ${amount}, ` +
        `'${accountType}', '${accountCategory}', '${cdTerm}', ${
          debit == "true"
        }, ` +
        ` ${checks == "true"}, ${transfers == "true"})`
    );
    res.send({ success: true, data: req.body });
  } catch (e) {
    console.log("accounts error :>> ", e);
    res.send({ success: false, data: e });
  }
});
Router.post("/register/personalinfo", async (req, res) => {
  console.log("personal info req.body :>> ", req.body);
  try {
    const {
      username,
      firstname,
      lastname,
      middleInitial,
      suffix,
      birthDate,
      socialSecurity,
      maidenName,
      occupation,
      email,
      personalPhone,
      workPhone,
      ext,
      address,
      addressLineTwo,
      city,
      state,
      zip,
      mailingAddress,
      previousAddress,
    } = req.body;
    const results = await db.query(
      `INSERT INTO personal_information (` +
        `username, firstname, lastname, ` +
        `middle_initial, suffix, birth_date, ` +
        `social_security, maiden_name, occupation, ` +
        `email, personal_phone, work_phone, ext, ` +
        `address, address_line_two, city, state, ` +
        `zip, mailing_address, previous_address) values (` +
        `${
          username ? `'${username}'` : null
        }, '${firstname}', '${lastname}', '${middleInitial}', '${suffix}',` +
        `'${birthDate}', '${socialSecurity}', '${maidenName}', '${occupation}', '${email}',` +
        `'${personalPhone}', '${workPhone}', '${ext}', '${address}', '${addressLineTwo}',` +
        `'${city}', '${state}', '${zip}', ${mailingAddress == "true"}, ${
          previousAddress == "true"
        })`
    );
    res.send({ success: true, data: req.body });
  } catch (e) {
    console.log("personal info error :>> ", e);
    res.send({ success: false, data: e });
  }
});

Router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("logininfo body :>> ", req.body);
    const results = await db.query(
      `SELECT * FROM users where ` +
        `username='${username}' and password='${password}'`
    );
    if (results.rows.length === 0) {
      res.send({ success: false, data: "username or password incorrect" });
    }
    res.send({ success: true, data: results.rows[0] });
  } catch (e) {
    console.log("logininfo error :>> ", e);
    res.send({ success: false, data: e });
  }
});

module.exports = Router;
