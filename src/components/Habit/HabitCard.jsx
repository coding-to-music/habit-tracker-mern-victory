import React from "react";
import { Link } from "react-router-dom";

const HabitCard = (props) => (
  <div className="card bg-light card-size card-flex">
    <img className="card-img img-height" src={props.habit.imageURL} alt="" />
    <div className="card-body body-link-wrapper">
      <p className="card-title">
        <b>{props.habit.name}</b>
      </p>
      <p className="card-text">{props.habit.description}</p>
    </div>
    <div className="class-text card-footer ">
      <Link className="card-link" to={`/habits/update/${props.habit._id}`}>
        edit
      </Link>
      |
      <a
        href="/vision"
        className="card-link"
        onClick={() => {
          props.deleteHabit(props.habit._id);
        }}
      >
        delete
      </a>
      |
      <Link
        className="card-link"
        to={{
          pathname: `/habits/${props.habit._id}`,
          params: {
            habit: props.habit,
            deleteHabit: props.deleteHabit,
            user: props.user,
          },
        }}
      >
        Details
      </Link>
    </div>
  </div>
);

export default HabitCard;
