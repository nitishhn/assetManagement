const userController = require("./src/controllers/user.controller");
const assetController = require("./src/controllers/asset.controller");
const assetRequestController = require("./src/controllers/assetRequest.controller");
const assetServiceRequestController = require("./src/controllers/assetServiceRequest.controller");
const categoryController = require("./src/controllers/category.controller");

const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));
// Middleware to parse JSON bodies
app.use(express.json());

app.use("/users", userController);
app.use("/assets", assetController);
app.use("/assetRequest", assetRequestController);
app.use("/assetServiceRequest", assetServiceRequestController);
app.use("/category", categoryController);

app.get("/", function (req, res) {
  let resultStr = "<h1 align='center'>Welcome to Asset Management<h1/>";
  logger.info("Authentication API Development using Express JS");
  res.send(resultStr);
});

app.listen(3002, function () {});
console.log("Server Application is started. Url : http://localhost:3002");

module.exports = app;
