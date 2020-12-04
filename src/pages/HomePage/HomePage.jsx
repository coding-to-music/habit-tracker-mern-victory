import "./HomePage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import DashBoard from "../../components/DashBoard/DashBoard";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="">
        <DashBoard />
      </div>
    </div>
  );
};

export default HomePage;
