import React, { useState, useEffect } from "react";
import axios from "axios";
import { VictoryPie } from "victory";

const ChartComponent = () => {
  const [piesDataForPlot, setPiesDataForPlot] = useState([]);

  const pieData = [
    { x: "Meditation", y: 15 },
    { x: "Reading", y: 30 },
    { x: "Walking", y: 20 },
    { x: "Un-tracked", y: 35 },
  ];
  const fetchHabitsAndSessionsData = () => {
    axios
      .get("http://localhost:3001/api/habits", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const habitsAndSessions = res.data;
        const piesForPlot = [];
        let sumSessionDuration = 0;
        let sumAllSessionsDuration = 0;
        const piesData = [];
        let sessions = [];
        habitsAndSessions.forEach((habit) => {
          sumSessionDuration = 0;
          sessions = habit.sessions.slice(
            Math.max(habit.sessions.length - 7, 0)
          );
          sessions.forEach((session) => {
            sumSessionDuration =
              sumSessionDuration + parseInt(session.duration);
          });
          sumAllSessionsDuration = sumSessionDuration + sumAllSessionsDuration;

          piesForPlot.push({
            x: habit.name,
            y: sumSessionDuration,
          });
        });

        piesForPlot.forEach((pie) => {
          pie.y = Math.floor((pie.y / sumAllSessionsDuration) * 100);
        });
        setPiesDataForPlot(piesForPlot);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchHabitsAndSessionsData();
  }, []);

  return (
    <>
      <div id="pie">
        <VictoryPie
          data={piesDataForPlot}
          colorScale={["tomato", "gold", "navy", "green"]}
        />
      </div>
    </>
  );
};

export default ChartComponent;
