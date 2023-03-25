const router = require("express").Router();
const { User } = require("../models/User.js");

const { getUser } = require("../controllers/users.js");

router.get("/", (req, res) => {
  // get uses from postgress
  User.findAll().then((users) => {
    res.send(users);
  });
});

router.post("/", (req, res) => {
  // create user in postgress
  const { firstName, lastName } = req.body;
  User.create({
    firstName,
    lastName,
  }).then((user) => {
    res.send(user);
  });
});

router.get("/:id", (req, res) => {
  // get user by id from postgress
  const { id } = req.params;
  User.findByPk(id).then((user) => {
    res.send(user);
  });
});

router.put("/:id", (req, res) => {
  // update user by id in postgress
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  User.update(
    {
      firstName,
      lastName,
    },
    {
      where: {
        id,
      },
    }
  ).then((user) => {
    res.send("works!");
  });
});

router.delete("/:id", (req, res) => {
  // delete user by id from postgress
  const { id } = req.params;
  User.destroy({
    where: {
      id,
    },
  }).then(() => {
    res.send("woks!");
  });
});

module.exports = router;
