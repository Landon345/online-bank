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

app.listen(5000, () => console.log("listening on port 5000...."));
