import React from "react";
import axios from "axios";
import { VictoryPie } from "victory";

// const [piesData, setPiesData] = useState([
//   {
//     x: "",
//     y: "",
//   },
// ]);
// const [sumDuration, setSumDuration] = useState(0);
// const [sumDurationAll, setSumDurationAll] = useState(0);

// const fetchHabitsAndSessionsData = () => {
//   axios
//     .get("http://localhost:3001/api/habits", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     })
//     .then((res) => {
//       const habitsAndSessions = res.data;
//       const piesForPlot = [];
//       let sumSessionDuration = 0;
//       const piesData = [];
//       habitsAndSessions.forEach((habit) => {
//         habit.sessions.forEach((session) => {
//           sumSessionDuration =
//             sumSessionDuration + parseInt(session.duration);
//         });
//         piesForPlot.push({
//           x: habit.name,
//           y: sumSessionDuration,
//         });
//       });
//       setPiesData(piesForPlot);
//       setSumDuration(sumSessionDuration);
//       console.log(piesData);
//       console.log(setSumDuration);
//     })
//     .catch((err) => console.log(err));
// };

const ChartComponent = () => {
  const pieData = [
    { x: "Meditation", y: 15 },
    { x: "Reading", y: 30 },
    { x: "Walking", y: 20 },
    { x: "Un-tracked", y: 35 },
  ];
  // console.log(pies);
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

export default ChartComponent;
