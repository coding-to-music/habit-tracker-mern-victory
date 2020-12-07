import React from "react";
import { Link } from "react-router-dom";

const Habit = (props) => (
  <div className="habit">
    <p>Habit Name: {props.habit.name}</p>
    <p>Habit Description: {props.habit.description}</p>
    <p>user: {props.user._id} </p>

    <div>
      <p>Habit componenet</p>
      {/* <Link to={`/habits/update/${props.params.habit._id}`}>edit</Link>|
      <a
        href="/"
        onClick={() => {
          props.deleteHabit(props.params.habit._id);
        }}
      >
        delete
      </a> */}
    </div>
    <br />
  </div>
);

export default Habit;
