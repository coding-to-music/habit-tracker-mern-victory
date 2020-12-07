import React, { useState, useRef } from "react";
import Calendar from "react-calendar";

const Session = (props) => {
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState("0");
  const onChangeDate = (date) => {
    setDate(date);
  };
  const onChangeDuration = (duration) => {
    console.log(duration);
    setDuration(duration);
  };

  const onSubmit = () => {
    // e.preventDefault();
    // const session = {
    //   date: setState(date),
    //   duration: setState(duration),
    // };
    // // console.log(session);
    // axios
    //   .post("http://localhost:3001/api/sessions/add", session)
    //   .then((res) => console.log(res.data));
    // window.location = "/vision";
  };

  return (
    <div className="habit">
      <p>Session Date: {date.toDateString()}</p>
      <p>session Duration: {duration.toString()}</p>

      <form onSubmit={onSubmit}>
        <Calendar onChange={onChangeDate} value={date} />

        <div className="form-group">
          <label>Habit Duration:</label>
          <input
            type="text"
            className="form-control"
            value={duration.toString()}
            onChange={onChangeDuration}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Habit"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Session;
