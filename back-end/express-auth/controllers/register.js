const bcrypt = require("bcrypt");
const fs = require("fs");
const db = require("../db.json");

const data = db.userDB;

const register = (req, res, next) => {
  const { username, password } = req.body;
  const user = data.find((user) => user.username === username);
  if (user) {
    res.send("Username already exists");
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      id: data.length + 1,
      username,
      password: hashedPassword,
    };
    data.push(newUser);
    fs.writeFile("./db.json", JSON.stringify(db), (err) => {
      if (err) {
      } else {
        next();
      }
    });
  }
};

module.exports = register;
