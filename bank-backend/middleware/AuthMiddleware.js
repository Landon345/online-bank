require("dotenv").config();
const jwt = require("jsonwebtoken");
const db = require("../db-connection");

//middleware
async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  const results = await db.query(
    `Select api_key from users where api_key = '${token}'`
  );

  if (results.rows.length === 0) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log(user);
    req.user = { user: user, token: token };
    next();
  });
}
exports.authenticateToken = authenticateToken;
