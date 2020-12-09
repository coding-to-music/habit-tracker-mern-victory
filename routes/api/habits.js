const router = require("express").Router();
const auth = require("../../config/auth");
let Habit = require("../../models/habit");
const User = require("../../models/user");
const habitsCtrl = require("../../controllers/habits");

router.get("/", auth, habitsCtrl.getAllHabits);
router.post("/add", auth, habitsCtrl.addHabit);
router.get("/:id", habitsCtrl.getOneHabit);
router.delete("/:id", auth, habitsCtrl.deleteHabit);
router.post("/update/:id", auth, habitsCtrl.updateHabit);

module.exports = router;
