import "./Habitpage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import EditHabit from "../../components/Habit/EditHabit";

const EditHabitPage = (props) => {
  return (
    <div className="">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="">
        <EditHabit />
      </div>
    </div>
  );
};

export default EditHabitPage;
