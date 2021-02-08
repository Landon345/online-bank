const { Client } = require("pg");
console.log(process.env.ACCESS_TOKEN_SECRET);
const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

execute();
async function execute() {
  await connect();
}
async function connect() {
  try {
    await db.connect();
    console.log(`Connected`);
  } catch (e) {
    console.error(`connection failed ${e}`);
  }
}

module.exports = db;
