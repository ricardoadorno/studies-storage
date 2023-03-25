require("dotenv").config();

const express = require("express");
const app = express();

// init morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// init body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// init swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const router = require("./routes/users.js");

app.use("/users", router);

app.listen(3000, () => {
  console.log("Example app listening on port http://localhost:3000");
});
