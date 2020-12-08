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
        <p>Create your vision board and start tracking your habits!</p>
        <p>
          Dont' forget to include encouraging affirmations. Self-affirmation
          directs you to think positively about the important habits in your
          life.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
