const router_views = require("express").Router();

const db = require("../db.json");
const fs = require("fs");
const data = db.userDB;

router_views.get("/", (req, res) => {
  res.render("home", {
    title: "My App",
  });
});

router_views.get("/register", (req, res) => {
  res.render("register", {
    title: "Register",
  });
});

router_views.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = data.find((user) => user.username === username);
  if (user && user.password === password) {
    console.log("Login Success");
  } else {
    console.log("Login Failed");
  }
});

router_views.get("/userlist", (req, res) => {
  res.render("userlist", {
    title: "User List",
    list: data,
  });
});

router_views.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  const newUser = {
    username,
    password,
  };
  db.userDB.push(newUser);
  fs.writeFile("./db.json", JSON.stringify(db), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router_views;
