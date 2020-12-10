import "./HomePage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />

      <div className="home-page-div home-page-images">
        <div className="home-page-text">
          <br />
          <br />
          <h1>Time to create Vision 2021..!!!</h1>
          <br />
        </div>
        <img src="./images/cleaning.jpeg" alt="" className="first" />
        <img src="./images/eating.jpg" alt="" className="second" />
        <img src="./images/praying.jpg" alt="" className="third" />
        <img src="./images/reading.jpg" alt="" className="fourth" />
        <img src="./images/sunrise.jpg" alt="" className="fifth" />
      </div>
    </div>
  );
};

export default HomePage;
