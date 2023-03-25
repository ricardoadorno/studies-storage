const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const router_views = require("./routes/router_views");
const router_main = require("./routes/routes_main");
const { engine } = require("express-handlebars");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

// app.use(express.static("public"));
// app.engine("handlebars", engine());
// app.set("view engine", "handlebars");
// app.set("views", "./views");

// app.use("/views", router_views);

app.use("/api", router_main);

app.listen(3000, () =>
  console.log("Server running on port http://localhost:3000")
);
