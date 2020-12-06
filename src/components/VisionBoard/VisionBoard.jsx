import React from "react";
import { Link } from "react-router-dom";

const VisionBoard = (props) => (
  <div className="dash-board">
    <h1>VisionBoard</h1>
    <Link to="/habits" className="NavBar-link">
      Habits
    </Link>
    &nbsp;&nbsp;&nbsp;
    <Link to="/habits/edit/:id" className="NavBar-link">
      Edit Habit
    </Link>
    &nbsp;&nbsp;&nbsp;
    <Link to="/habits/create" className="NavBar-link">
      Create Habit
    </Link>
  </div>
);

export default VisionBoard;
