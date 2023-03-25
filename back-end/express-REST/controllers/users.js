const { User } = require("../models/User.js");

function getUser() {
  User.findAll().then((users) => {
    return users;
  });
}

module.exports = {
  getUser,
};
