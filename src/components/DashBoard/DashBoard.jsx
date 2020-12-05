import React from "react";
import { Link } from "react-router-dom";

const DashBoard = (props) => (
  <div className="dash-board">
    <h1>DashBoard HERE......!</h1>
    <Link to="/habit" className="NavBar-link">
      Habit
    </Link>
  </div>
);

export default DashBoard;
