var express = require('express');
var router = express.Router();
var WorkService = require("../services/WorkService");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {svc: WorkService});
});

/* Clock in to work */
router.get("/clockIn", (req, res) => {
    WorkService.clockIn();
    res.redirect("/");
});

/* Clock out of work for the day */
router.get("/clockOut", (req, res) => {
    WorkService.clockOut();
    res.redirect("/");
});

module.exports = router;
