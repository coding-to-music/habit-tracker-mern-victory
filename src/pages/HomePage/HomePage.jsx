import "./HomePage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <Link to="/vision">Vision Board</Link>
      <div className="">
        <p>Create your vision board and start tracking tracking to habits!</p>
      </div>
    </div>
  );
};

export default HomePage;
