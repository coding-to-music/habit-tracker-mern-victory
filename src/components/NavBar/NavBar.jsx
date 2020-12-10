import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg nav-font">
      <Link to="" className="nav-link">
        <img src="/Vision2.png" alt="" height="50px" title="Home" />
      </Link>
      |
      <Link to="/vision" className="nav-link">
        VISION BOARD
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className="nav-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className="nav-link navbar-brand nav-font">
        WELCOME, {props.user.name}
      </span>
    </div>
  ) : (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg nav-font">
      <Link to="/login" className="nav-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="nav-link">
        SIGN UP
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
