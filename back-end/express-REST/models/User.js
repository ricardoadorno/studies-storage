const { Sequelize, DataTypes } = require("sequelize");

// init sequelize
const sequelize = new Sequelize(
  "sequelize",
  "postgres",
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
  }
);
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Define the User model
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// Sync the model with the database
User.sync().then(() => {
  console.log("Database & tables created!");
});

module.exports = { User };
