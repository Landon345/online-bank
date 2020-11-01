const express = require("express");
const app = express();
const db = require("./db-connection");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS, GET");
  next();
});
const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

app.use(express.static("public", options));
const router = express.Router([options]);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.get("/", async (req, res) => {
  //   res.send("server on online bank");
  try {
    const results = await db.query("select * from users");
    res.send(results.rows);
  } catch (e) {
    res.send(e);
  }
});

app.post("/register/logininfo", async (req, res) => {
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
app.post("/register/accounts", async (req, res) => {
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
app.post("/register/personalinfo", async (req, res) => {
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

app.listen(5000, () => console.log("listening on port 5000...."));
