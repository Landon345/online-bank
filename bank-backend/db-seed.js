const db = require("../db-connection");
const faker = require("faker");

const seedDB = async () => {
  try {
    await db.query(
      `insert into users ` +
        `(username, account_id, password, api_key) ` +
        `values ('${faker.internet.userName()}', null, 1234, null)`
    );
  } catch (e) {
    console.log(e);
  }
};
