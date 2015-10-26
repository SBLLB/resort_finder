var express = require("express");
var router = new express.Router();

function home(req, res, next) {
  res.render("site/home")
};


// router.use(express.static(join(__dirname, "../../wwwroot")));
router.get("/", home);

module.exports = router;

