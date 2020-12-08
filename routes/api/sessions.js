const router = require("express").Router();
const Habit = require("../../models/habit");
const auth = require("../../config/auth");

router.get("/:id/getAll", (req, res) => {
  // console.log(req.params.id);
  Habit.findById(req.params.id)
    .populate("sessions")
    .exec(function (err, habitwithsessions) {
      if (!err && habitwithsessions.sessions.length > 0) {
        // console.log(habitwithsessions.sessions);
        res.json(habitwithsessions.sessions);
      }
    });
});
router.post("/:id/addsession", auth, (req, res) => {
  Habit.findById(req.params.id)
    .then((habit) => {
      habit.sessions.push(req.body);
      habit
        .save()
        .then((response) => res.send(response))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
