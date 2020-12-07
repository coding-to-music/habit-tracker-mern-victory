import "./Habitpage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Habit from "../../components/Habit/Habit";

const HabitPage = (props) => {
  console.log(props.params);
  return (
    <div className="HabitPage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="">
        <p>habit page</p>

        <Habit
          habit={props.params.habit}
          deleteHabit={props.params.deleteHabit}
          user={props.user}
        />
      </div>
    </div>
  );
};

export default HabitPage;
