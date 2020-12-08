import React, { useState } from "react";

import axios from "axios";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryBar,
} from "victory";

const ChartComponent = (props) => {
  const lineData = props.sessionData;
  // console.log("chart component being executed ");
  return (
    <>
      <div id="graph">
        {/* <VictoryChart theme={VictoryTheme.material}> */}
        <VictoryBar
          interpolation="natural"
          style={{
            data: { stroke: "green" },
          }}
          data={lineData}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel renderInPortal dy={-20} />}
        />
        {/* </VictoryChart> */}
      </div>
    </>
  );
};

const SessionPlot = (props) => {
  console.log("Session plot being executed ");
  const [sess, setSess] = useState([
    {
      x: "",
      y: "",
    },
  ]);

  const [sumDuration, setSumDuration] = useState(0);
  const [sumDurationAll, setSumDurationAll] = useState(0);

  const fetchAllSessions = () => {
    axios
      .get("http://localhost:3001/api/sessions/" + props.habitId + "/getAll")
      .then((res) => {
        const sessionsAll = res.data;
        const sessionsForPlot = [];
        let sum = 0;
        let sumAll = 0;
        const sessions = sessionsAll.slice(Math.max(sessionsAll.length - 7, 0));
        sessions.forEach((session) => {
          sessionsForPlot.push({
            x: session.date.toString(),
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

  const onClick = (e) => {
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
        onClick={onClick}
      >
        Plot sessions
      </button>
      <p>
        You just practised <b>{sumDuration}</b> minutes of{" "}
        <b>{props.habitName} this week</b>
      </p>
      <p>
        You have practised <b>{sumDurationAll}</b> minutes of{" "}
        <b>{props.habitName} so far</b>
      </p>
    </div>
  );
};

export default SessionPlot;
