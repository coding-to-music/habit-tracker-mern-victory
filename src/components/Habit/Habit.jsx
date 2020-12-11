import React from "react";
import { Link } from "react-router-dom";
import Session from "../Session/Session";
import SessionPlot from "../Session/SessionPlot";
import FetchQuote from "../FetchQuote/FetchQuote";

const Habit = (props) => {
  console.log("Habit being executed ");
  return (
    <div className="habit">
      <br />
      <div id="habit-title">
        <h1> {props.habit.name}</h1>
        <h4>{props.habit.description}</h4>
      </div>

      <br />
      <div id="habit-image-div">
        <img id="habit-image" src={props.habit.imageURL} alt="" />
        <div id="quote-on-image">
          <FetchQuote />
        </div>
      </div>

      <br />
      <br />

      <div id="sessiondiv">
        <div className="bar-div">
          <SessionPlot habitId={props.habit._id} habitName={props.habit.name} />
        </div>

        <div className="calendar-div">
          <Session habitId={props.habit._id} />
        </div>
      </div>
    </div>
  );
};

export default Habit;
