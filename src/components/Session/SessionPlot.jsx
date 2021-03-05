import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryBar,
  VictoryContainer,
  VictoryAxis,
} from "victory";

const ChartComponent = (props) => {
  const lineData = props.sessionData;

  return (
    <>
      <div id="graph">
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis
            dependentAxis={true}
            style={{
              grid: { stroke: "grey" },
            }}
          />
          <VictoryAxis tickFormat={(x) => ``} />
          <VictoryBar
            interpolation="natural"
            style={{
              data: {
                stroke: "green",
                fill:
                  "#" + (Math.random().toString(16) + "0000000").slice(2, 8),
              },
            }}
            data={lineData}
            scale={{ x: "time", y: "linear" }}
            labels={({ datum }) => datum.x}
            labelComponent={
              <VictoryLabel y={310} verticalAnchor={"start"} angle={-45} />
            }
          />
        </VictoryChart>
      </div>
    </>
  );
};

const SessionPlot = (props) => {
  const [sess, setSess] = useState([
    {
      x: "",
      y: "",
    },
  ]);

  const [sumDuration, setSumDuration] = useState(0);
  const [sumDurationAll, setSumDurationAll] = useState(0);

  useEffect(() => {
    fetchAllSessions();
  }, []);
  const fetchAllSessions = () => {
    axios
      .get("/api/sessions/" + props.habitId + "/getAll")
      .then((res) => {
        const sessionsAll = res.data;
        const sessionsForPlot = [];
        let sum = 0;
        let sumAll = 0;
        const sessions = sessionsAll.slice(Math.max(sessionsAll.length - 7, 0));
        sessions.forEach((session) => {
          console.log(
            "session date type is, ",
            new Date(session.date).toDateString()
          );
          sessionsForPlot.push({
            x: new Date(session.date).toDateString(),
            y: parseInt(session.duration),
          });
          sum = sum + parseInt(session.duration);
        });
        sessionsAll.forEach((session) => {
          sumAll = sumAll + parseInt(session.duration);
        });

        setSess(sessionsForPlot);
        setSumDuration(sum);
        setSumDurationAll(sumAll);
      })
      .catch((err) => console.log(err));
  };

  const handleBarPlot = (e) => {
    e.preventDefault();

    fetchAllSessions();
  };

  return (
    <div className="habit">
      <ChartComponent sessionData={sess} />
      <button
        type="submit"
        className="btn btn-primary"
        value="Plot Sessions"
        onClick={handleBarPlot}
      >
        View Sessions
      </button>
      <h4>
        This week: <b>{sumDuration}</b> minutes, Total around
        <b> {Math.floor(sumDurationAll / 60)}</b> hours
      </h4>
    </div>
  );
};

export default SessionPlot;
