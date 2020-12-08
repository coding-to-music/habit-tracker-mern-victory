import React from "react";
import { Link } from "react-router-dom";
import HabitList from "../Habit/HabitList";
import { VictoryPie } from "victory";
import ChartComponent from "./ChartComponent";

const VisionBoard = (props) => {
  return (
    <div className="dash-board">
      <br />
      <br />
      <h1>VisionBoard</h1>
      <br />
      <Link to="/habits/create" className="NavBar-link">
        Create Habit
      </Link>
      <br />
      <br />
      <br />
      <HabitList user={props.user} />
      <ChartComponent />
    </div>
  );
};
export default VisionBoard;
