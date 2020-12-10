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
    <div className="class-text card-footer card-footer-icons">
      <Link className="card-link" to={`/habits/update/${props.habit._id}`}>
        <img src="./editVision.png" alt="" width="30px" title="Edit" />
      </Link>
      <a
        href="/vision"
        className="card-link"
        onClick={() => {
          props.deleteHabit(props.habit._id);
        }}
      >
        <img src="./deleteVision.svg" alt="" title="Delete" width="30px" />
      </a>

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
        <img src="./detailsVision.png" alt="" title="Details" width="30px" />
      </Link>
    </div>
  </div>
);

export default HabitCard;
