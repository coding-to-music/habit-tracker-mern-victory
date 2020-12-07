import React from "react";
import { Link } from "react-router-dom";
import HabitList from "../Habit/HabitList";

const VisionBoard = (props) => (
  <div className="dash-board">
    <h1>VisionBoard</h1>

    <Link to="/habits/create" className="NavBar-link">
      Create Habit
    </Link>
    <HabitList />
  </div>
);

export default VisionBoard;
