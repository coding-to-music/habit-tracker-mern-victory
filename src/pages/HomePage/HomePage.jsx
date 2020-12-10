import "./HomePage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <br />
      <br />
      <h1>Habit Tracker</h1>
      <br />
      <br />
      <p>Create your vision board and start tracking your habits!</p>
      <p>
        Dont' forget to include encouraging affirmations. Self-affirmation
        directs you to think positively about the important habits in your life.
      </p>
      <div className="home-page-div">
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
