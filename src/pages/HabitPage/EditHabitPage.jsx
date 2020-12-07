import "./Habitpage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import EditHabit from "../../components/Habit/EditHabit";

const EditHabitPage = (props) => {
  console.log(props.user._id);
  console.log(props);
  console.log(props.habitId);
  return (
    <div className="">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="">
        <EditHabit habitId={props.habitId} />
      </div>
    </div>
  );
};

export default EditHabitPage;
