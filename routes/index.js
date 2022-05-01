var express = require('express');
var router = express.Router();
var WorkService = require("../services/WorkService");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {svc: WorkService});
});

/* Clock in to work */
router.get("/clockIn", (req, res) => {
    let success = WorkService.clockIn();
    if (success)
        req.flash("message", "Successfully clocked in!");
    else
        req.flash("error", "Failed to clock in...");
    res.redirect("/");
});

/* Clock out of work for the day */
router.get("/clockOut", (req, res) => {
    let success = WorkService.clockOut();
    if (success)
        req.flash("message", "Successfully clocked out!");
    else
        req.flash("error", "Failed to clock out...");
    res.redirect("/");
});

/* Set the day's notes, if possible */
router.post("/updateNote", (req, res) => {
    let {notesInput} = req.body;
    WorkService.currentNote = notesInput;
    res.redirect("/");
})

module.exports = router;
