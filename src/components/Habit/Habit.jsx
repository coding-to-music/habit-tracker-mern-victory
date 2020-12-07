import React from "react";
import { Link } from "react-router-dom";

const Habit = (props) => (
  <div className="habit">
    <h3>Habit Name: {props.habit.name}</h3>
    <h3>Habit Description: {props.habit.description}</h3>
    <div>
      <Link to={`/habits/update/${props.habit._id}`}>edit</Link>|
      <a
        href="/"
        onClick={() => {
          props.deleteHabit(props.habit._id);
        }}
      >
        delete
      </a>
    </div>
  </div>
);

export default Habit;
