import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryBar,
} from "victory";

const SessionPlot = (props) => {
  // const history = useHistory();
  // const [datesArray, setDatesArray] = useState([]);
  // const [durationsArray, setDurationsArray] = useState([]);

  const onClick = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3001/api/sessions/" + props.habitId + "/getAll")
      .then((res) => {
        const sessions = res.data;
        const dates = [];
        const durations = [];
        const sessionsForPlot = [{}];
        sessions.map((session) => {
          dates.push(session.date.toString());
          durations.push(parseInt(session.duration));
          sessions.sessionsForPlot.push({
            x: session.date.toString(),
            y: parseInt(session.duration),
          });
          // setDatesArray((datesArray) => [
          //   ...datesArray,
          //   session.date.toString(),
          // ]);
          // setDurationsArray((durationsArray) => [
          //   ...durationsArray,
          //   parseInt(session.duration),
          // ]);
        });
        // setDatesArray(dates);
        // setDurationsArray(durations);
        console.log("just before dates durations map");
        console.log(sessionsForPlot);
        // console.log(datesArray.length);
        // datesArray.map((date, i) => {
        //   console.log(date);
        // });

        // durationsArray.map((duration, i) => {
        //   console.log(duration);
        // });
      })
      .catch((err) => console.log(err));
  };

  const ChartComponent = () => {
    const lineData = [
      { x: 1, y: 20 },
      { x: 2, y: 20 },
      { x: 3, y: 50 },
      { x: 4, y: 25 },
      { x: 5, y: 18 },
    ];
    // const lineData = [
    //   { x: 1, y: 20, label: "Minutes" },
    //   { x: 2, y: 20, label: "Minutes" },
    //   { x: 3, y: 50, label: "Minutes" },
    //   { x: 4, y: 25, label: "Minutes" },
    //   { x: 5, y: 18, label: "Minutes" },
    // ];

    return (
      <>
        <div id="graph">
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: "green" },
              }}
              data={lineData}
              labels={({ datum }) => datum.y}
              labelComponent={<VictoryLabel renderInPortal dy={-20} />}
            />
          </VictoryChart>
        </div>
      </>
    );
  };

  return (
    <div className="habit">
      <ChartComponent />
      <button
        type="submit"
        className="btn btn-primary"
        value="Plot Sessions"
        onClick={onClick}
      >
        Plot sessions
      </button>
    </div>
  );
};

export default SessionPlot;
