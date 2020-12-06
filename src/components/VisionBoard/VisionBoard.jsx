import React from "react";
import { Link } from "react-router-dom";

const VisionBoard = (props) => (
  <div className="dash-board">
    <h1>VisionBoard</h1>
    <Link to="/habits" className="NavBar-link">
      Habit
    </Link>
  </div>
);

export default VisionBoard;
