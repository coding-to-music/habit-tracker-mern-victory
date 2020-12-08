import React from "react";
import { Link } from "react-router-dom";

const HabitCard = (props) => (
  <div className="habit">
    <p>
      <b>{props.habit.name}</b>
    </p>
    <p>{props.habit.description}</p>

    <div>
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
    <br />
  </div>
);

export default HabitCard;
