const express = require("express");
const db = require("../db-connection");
const Router = express.Router();
const { authenticateToken } = require("../middleware/AuthMiddleware");

// Routes
Router.get("/account", authenticateToken, async (req, res) => {
  //   res.send("server on online bank");
  try {
    const results = await db.query("select * from users");
    res.send(results.rows);
  } catch (e) {
    res.send(e);
  }
});

Router.get("/accounts", authenticateToken, async (req, res) => {
  console.log("username", req.user);
  const todos = await db.query(
    `SELECT * FROM todos where username = '${req.user.user.name}' ORDER BY todo_id`
  );
  res.send(todos.rows);
});

module.exports = Router;
