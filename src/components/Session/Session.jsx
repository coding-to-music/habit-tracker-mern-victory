import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import axios from "axios";

const Session = (props) => {
  const formRef = useRef(null);
  const history = useHistory();
  const [date, setDate] = useState(new Date());

  const [duration, setDuration] = useState("0");
  const onChangeDate = (date) => {
    setDate(date);
    console.log("selected date is ", date.toDateString());
  };
  const onChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const duration = formRef.current.duration.value;
    const session = {
      date: date,
      duration: parseInt(duration),
    };

    axios
      .post("/api/sessions/" + props.habitId + "/addsession", session)
      .then((res) => console.log());
  };

  return (
    <div className="habit">
      <br />
      <p>Session Date: {date.toDateString()}</p>
      <p>session Duration: {parseInt(duration)}</p>

      <form onSubmit={onSubmit} ref={formRef}>
        <Calendar
          onChange={onChangeDate}
          type="date"
          value={date}
          id="calendar"
        />

        <div className="form-group">
          <label>Habit Duration:</label>
          <input
            type="number"
            name="duration"
            className="form-control"
            value={parseInt(duration)}
            onChange={onChangeDuration}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Session"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Session;
