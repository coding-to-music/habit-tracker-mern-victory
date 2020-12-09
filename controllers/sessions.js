const router = require("express").Router();
const Habit = require("../models/habit");

module.exports = {
  getAllSessions,
  addSession,
};

async function getAllSessions(req, res) {
  Habit.findById(req.params.id)
    .populate("sessions")
    .exec(function (err, habitwithsessions) {
      if (!err && habitwithsessions && habitwithsessions.sessions.length > 0) {
        res.json(habitwithsessions.sessions);
      }
    });
}

async function addSession(req, res) {
  Habit.findById(req.params.id)
    .then((habit) => {
      habit.sessions.push(req.body);
      habit
        .save()
        .then((response) => res.send(response))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
}
