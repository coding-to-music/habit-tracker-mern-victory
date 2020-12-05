import "./Habitpage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Habit from "../../components/Habit/Habit";

const HabitPage = (props) => {
  return (
    <div className="HabitPage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="">
        <Habit />
      </div>
    </div>
  );
};

export default HabitPage;
