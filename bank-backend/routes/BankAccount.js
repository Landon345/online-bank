const express = require("express");
const db = require("../db-connection");
const Router = express.Router();
const { authenticateToken } = require("../middleware/AuthMiddleware");

// Routes

Router.get("/accounts", authenticateToken, async (req, res) => {
  console.log("username", req.user);

  const todos = await db.query(
    `SELECT * FROM accounts where username = '${req.user.user.name}'`
  );
  res.send(todos.rows);
});

Router.get("/transactions/:accountid", authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM transactions where account_id = ${req.params.accountid}`
    );
    res.send(result.rows);
  } catch (e) {
    res.send(e);
  }
});
Router.post("/transactions/:accountid", authenticateToken, async (req, res) => {
  const { description, amount } = req.body;
  const date = new Date();
  try {
    const oldaccountresult = await db.query(
      `SELECT * FROM accounts where account_id = ${req.params.accountid}`
    );
    const oldaccount = oldaccountresult.rows[0];
    //update the account's balance from the transaction
    await db.query(
      `Update accounts set balance = ${oldaccount.balance + amount}`
    );

    const newaccountresult = await db.query(
      `SELECT * FROM accounts where account_id = ${req.params.accountid}`
    );
    const newaccount = newaccountresult.rows[0];
    await db.query(
      `INSERT INTO transactions (account_id, description, amount, date, account_bal) values (${req.params.accountid}, ` +
        `'${description}', '${amount}', '${date}', ${newaccount.balance})`
    );
    res.send({ success: "true" });
  } catch (e) {
    res.send(e);
  }
});

Router.get("/user", authenticateToken, async (req, res) => {
  try {
    const user = await db.query(
      `SELECT firstname, lastname FROM personal_information where username = '${req.user.user.name}'`
    );
    res.send(user.rows[0]);
  } catch (e) {
    res.send(e);
  }
});

module.exports = Router;
