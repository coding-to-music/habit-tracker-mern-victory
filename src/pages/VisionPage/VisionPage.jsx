import "./VisionPage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import VisionBoard from "../../components/VisionBoard/VisionBoard";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="">
        <VisionBoard user={props.user} />
      </div>
    </div>
  );
};

export default HomePage;
