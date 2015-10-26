var express = require("express");
var config = require("./config");
var path = require("path");
// var bodyParser = require('body-parser');
var app = express();
var errors = require("./errors/errors");

global.__base = path.resolve(__dirname, "../");
app.set("views", __dirname);
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname + "/public")));

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

app.use(require("./site/pageRoutes"));
// app.use("/api", require("./resorts/resortRoutes"));
// app.use(errors.notFound);
// app.use(errors.middleware);

module.exports = app;
