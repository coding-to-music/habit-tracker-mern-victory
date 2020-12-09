const router = require("express").Router();
let Habit = require("../../models/habit");
const auth = require("../../config/auth");
const User = require("../../models/user");

router.get("/", auth, (req, res) => {
  User.findById(req.user._id)
    .populate("habits")
    .exec(function (err, userwithhabits) {
      if (!err) res.json(userwithhabits.habits);
    });
});
router.post("/add", auth, (req, res) => {
  const name = req.body.hname;
  const description = req.body.description;
  const imageURL = req.body.imageURL;
  const newHabit = new Habit({
    name,
    description,
    imageURL,
  });
  newHabit.save(function (err, habit) {
    User.findById(req.user._id)
      .then((user) => {
        user.habits.push(habit.id);
        user
          .save()
          .then(() => res.json("user updated"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

router.route("/:id").get((req, res) => {
  Habit.findById(req.params.id)
    .then((habit) => res.json(habit))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", auth, (req, res) => {
  Habit.findByIdAndDelete(req.params.id)
    .then(() => {})
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", auth, (req, res) => {
  Habit.findById(req.params.id)
    .then((habit) => {
      habit.name = req.body.hname;
      habit.description = req.body.description;
      habit.imageURL = req.body.imageURL;
      habit
        .save()
        .then(() => res.json("habit updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
