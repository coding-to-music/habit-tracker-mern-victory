import React from "react";
import { Link } from "react-router-dom";
import Session from "../Session/Session";
import SessionPlot from "../Session/SessionPlot";
import FetchQuote from "../FetchQuote/FetchQuote";

const Habit = (props) => {
  console.log("Habit being executed ");
  return (
    <div className="habit">
      <div>
        <Link to={`/habits/update/${props.habit._id}`}>edit</Link>|
        <a
          href="/vision"
          onClick={() => {
            props.deleteHabit(props.habit._id);
          }}
        >
          delete
        </a>
      </div>

      <br />
      <br />
      <p> {props.habit.name}</p>
      <p>Affirmation: {props.habit.description}</p>
      <br />
      <br />
      <FetchQuote />

      <div id="sessiondiv">
        <SessionPlot habitId={props.habit._id} habitName={props.habitName} />
        <Session habitId={props.habit._id} />
      </div>
    </div>
  );
};

export default Habit;
