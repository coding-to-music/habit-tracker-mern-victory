const router = require("express").Router();
let Habit = require("../../models/habit");

router.route("/").get((req, res) => {
  Habit.find()
    .then((habits) => res.join(habits))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
