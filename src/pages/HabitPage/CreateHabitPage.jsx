import "./Habitpage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CreateHabit from "../../components/Habit/CreateHabit";

const CreateHabitPage = (props) => {
  return (
    <div className="">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="">
        <CreateHabit user={props.user} />
      </div>
    </div>
  );
};

export default CreateHabitPage;
