const router_main = require("express").Router();

const bcrypt = require("bcrypt");
const fs = require("fs");

const passport = require("passport");

var session = require("express-session");

const db = require("../db.json");

const data = db.userDB;
const register = require("../controllers/register");

router_main.get("/users", (req, res) => {
  res.json(data);
});

router_main.post("/register", register, (req, res) => {
  res.send("Register Success");
});

router_main.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = data.find((user) => user.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    res.send("Login Success");
  } else {
    res.send("Login Failed");
  }
});

router_main.post("/logout", (req, res) => {
  res.send("Logout Success");
});

router_main.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }
  const user = data.find((user) => user.id === +id);
  if (user) {
    const index = data.indexOf(user);
    data.splice(index, 1);
    fs.writeFile("./db.json", JSON.stringify(db), (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Delete Success");
      }
    });
  } else {
    res.send("User not found");
  }
});

router_main.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const user = data.find((user) => user.id === +id);
  if (user) {
    const index = data.indexOf(user);
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      id: +id,
      username,
      password: hashedPassword,
    };
    data.splice(index, 1, newUser);
    fs.writeFile("./db.json", JSON.stringify(db), (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Update Success");
      }
    });
  } else {
    res.send("User not found");
  }
});

module.exports = router_main;
