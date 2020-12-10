import React, { useState, useEffect } from "react";
import axios from "axios";
import { VictoryPie, VictoryBar } from "victory";

const ChartComponent = () => {
  const [piesDataForPlot, setPiesDataForPlot] = useState([]);
  const [trackedPie, setTrackedPie] = useState([]);

  const [colorScaleOne, setColorScaleOne] = useState([]);
  const [colorScaleTwo, setColorScaleTwo] = useState([]);

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
        const minutesInWeek = 24 * 7 * 60;
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
        const colorsOne = [];

        piesForPlot.forEach((pie) => {
          pie.y = Math.floor((pie.y / sumAllSessionsDuration) * 100);
          colorsOne.push(
            "#" + (Math.random().toString(16) + "0000000").slice(2, 8)
          );
        });
        setPiesDataForPlot(piesForPlot);
        setColorScaleOne(colorsOne);
        setTrackedPie([
          {
            x: "Tracked",
            y: Math.floor((sumAllSessionsDuration / minutesInWeek) * 100),
          },
          {
            x: "Un-tracked",
            y: Math.floor(
              ((minutesInWeek - sumAllSessionsDuration) / minutesInWeek) * 100
            ),
          },
        ]);
        setColorScaleTwo([
          "#" + (Math.random().toString(16) + "0000000").slice(2, 8),
          "#" + (Math.random().toString(16) + "0000000").slice(2, 8),
        ]);
        console.log(colorScaleTwo);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchHabitsAndSessionsData();
  }, []);

  return (
    <>
      <div className="pies-div">
        <div className="pie">
          <VictoryPie data={piesDataForPlot} colorScale={colorScaleOne} />
        </div>

        <div className="pie2">
          <VictoryPie data={trackedPie} colorScale={colorScaleTwo} />
        </div>
      </div>
    </>
  );
};

export default ChartComponent;
