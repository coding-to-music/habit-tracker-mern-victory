const router = require("express").Router();
const Habit = require("../../models/habit");
const auth = require("../../config/auth");
const sessionsCtrl = require("../../controllers/sessions");

router.get("/:id/getAll", sessionsCtrl.getAllSessions);
router.post("/:id/addsession", auth, sessionsCtrl.addSession);

module.exports = router;
