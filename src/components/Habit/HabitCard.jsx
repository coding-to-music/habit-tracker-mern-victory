import React from "react";
import { Link } from "react-router-dom";

const HabitCard = (props) => (
  <div className="card bg-light card-size card-flex">
    <img id="card-img img-height" src={props.habit.imageURL} alt="" />

    <div id="card-img-overlay">
      <p className="card-title">
        <b>{props.habit.name}</b>
      </p>
      <p className="card-text">{props.habit.description}</p>

      <div className="class-text">
        <Link to={`/habits/update/${props.habit._id}`}>edit</Link>|
        <a
          href="/vision"
          onClick={() => {
            props.deleteHabit(props.habit._id);
          }}
        >
          delete
        </a>
        |
        <Link
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
  </div>
);

export default HabitCard;
