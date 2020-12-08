import React from "react";
import { Link } from "react-router-dom";
import HabitList from "../Habit/HabitList";
import { VictoryPie } from "victory";

const VisionBoard = (props) => {
  const ChartComponent = () => {
    const pieData = [
      { x: "Meditation", y: 15 },
      { x: "Reading", y: 30 },
      { x: "Walking", y: 20 },
      { x: "Un-tracked", y: 35 },
    ];
    return (
      <>
        <div id="pie">
          <VictoryPie
            data={pieData}
            colorScale={["tomato", "gold", "navy", "green"]}
          />
        </div>
      </>
    );
  };
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
