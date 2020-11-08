require("dotenv").config();
const express = require("express");
const db = require("../db-connection");
const Router = express.Router();
const { authenticateToken } = require("../middleware/AuthMiddleware");
const jwt = require("jsonwebtoken");

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
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    console.log("logininfo body :>> ", req.body);
    const results = await db.query(
      `INSERT INTO users (username, password, api_key` +
        `) values ('${username}', '${password}', '${accessToken})`
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
  const { username, password } = req.body;
  // Authenticate user
  console.log("username and password :>> ", username);
  const results = await db.query(
    `SELECT * from users where username = '${username}' and password = '${password}'`
  );
  console.log("results from login", results.rows);
  //create jsonwebtoken for the user
  if (results.rows.length === 1) {
    const username = results.rows[0].username;
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    try {
      await db.query(
        `update users set api_key = '${accessToken}' where username = '${username}'`
      );
    } catch (e) {
      console.log(e);
      res.json({ success: false, data: { e } });
    }
    console.log("object :>> ", { name: username, api_key: accessToken });
    res.json({
      success: true,
      data: { username: username, api_key: accessToken },
    });
  } else {
    res.json({ success: false, data: "username or password incorrect" });
  }
});
Router.post("/logout", authenticateToken, async (req, res) => {
  db.query(
    `update users set api_key = null where username = '${req.username}'`
  );
  res.json({
    success: true,
    data: req.user.user,
  });
});

module.exports = Router;
