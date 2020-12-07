import React from "react";
import { Link } from "react-router-dom";
import Session from "../Session/Session";

const Habit = (props) => {
  return (
    <div className="habit">
      <p>Habit Name: {props.habit.name}</p>
      <p>Habit Description: {props.habit.description}</p>
      <p>user: {props.user._id} </p>

      <div>
        <p>Habit componenet</p>
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
      <br />
      <Session habitId={props.habit._id} />
    </div>
  );
};

export default Habit;
