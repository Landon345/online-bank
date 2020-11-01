"use strict";
const db = require("../db-connection");

module.exports.up = async function (next) {
  await db.query(
    `CREATE TABLE personal_information (personal_information_id Serial NOT NULL PRIMARY KEY, ` +
      `username varchar(255) NOT NULL, firstname varchar(255) NOT NULL, lastname varchar(255) NOT NULL, ` +
      `middle_initial varchar(10), suffix varchar(10), birth_date varchar(12) NOT NULL, ` +
      `social_security varchar(11) NOT NULL, maiden_name varchar(255) NOT NULL, occupation varchar(255) NOT NULL, ` +
      `email varchar(255) NOT NULL, personal_phone varchar(15) NOT NULL, work_phone varchar(15), ext varchar(10), ` +
      `address varchar(255) NOT NULL, address_line_two varchar(255), city varchar(200) NOT NULL, state varchar(200) NOT NULL, ` +
      `zip varchar(20) NOT NULL, mailing_address boolean NOT NULL, previous_address boolean NOT NULL)`
  );
  next();
};

module.exports.down = async function (next) {
  await db.query("DROP TABLE IF EXISTS personal_information");
  next();
};

// one to one relationship from users -> one -> personal information sheet
// personal_information_id
// username to connect to users
// firstname: "Landon",

//     lastname: "Schlangen",
//     middleInitial: "",
//     suffix: "",
//     birthDate: "08/06/1999",
//     socialSecurity: "123-23-8643",
//     maidenName: "Stommes",
//     occupation: "tech",

//     email: "lschlangen5@gmail.com",
//     personalPhone: "320-260-4994",
//     workPhone: "",
//     ext: "",

//     address: "",
//     addressLineTwo: "",
//     city: "",
//     state: "",
//     zip: "",

//     mailingAddress: "true",
//     previousAddress: "true",
