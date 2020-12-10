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
      <Link to="/habits/create" id="add-habit-link">
        <img src="./addVision.png" alt="" height="30px" title="Add" />
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
