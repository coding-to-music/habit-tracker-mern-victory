import React from "react";
import { Link } from "react-router-dom";
import HabitList from "../Habit/HabitList";

const VisionBoard = (props) => (
  <div className="dash-board">
    <br />
    <h1>VisionBoard</h1>
    <br />
    <br />
    <Link to="/habits/create" className="NavBar-link">
      Create Habit
    </Link>
    <br />
    <br />
    <HabitList user={props.user} />
  </div>
);

export default VisionBoard;
