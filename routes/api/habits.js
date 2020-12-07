const router = require("express").Router();
let Habit = require("../../models/habit");

router.route("/").get((req, res) => {
  Habit.find()
    .then((habits) => res.json(habits))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const name = req.body.hname;
  const description = req.body.description;
  const newHabit = new Habit({
    name,
    description,
  });
  newHabit
    .save()
    .then(() => res.json("habit added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Habit.findById(req.params.id)
    .then((habit) => res.json(habit))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Habit.findByIdAndDelete(req.params.id)
    .then(() => res.json("Habit Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  console.log("inside server habit update");
  Habit.findById(req.params.id)
    .then((habit) => {
      habit.name = req.body.hname;
      habit.description = req.body.description;
      habit
        .save()
        .then(() => res.json("habit updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
