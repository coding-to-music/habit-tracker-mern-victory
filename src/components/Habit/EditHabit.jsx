import React from "react";
import axios from "axios";

class EditHabit extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeHname = this.onChangeHname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      hname: "",
      description: "",
    };
  }
  componentDidMount() {
    console.log("insdie edit");
    axios.get("/api/habits/" + this.props.habitId).then((res) => {
      this.setState({
        hname: res.data.name,
        description: res.data.description,
      });
      console.log(res.data);
    });
  }

  onChangeHname(e) {
    this.setState({
      hname: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const habit = {
      description: this.state.description,
      hname: this.state.hname,
    };
    // console.log(habit);
    axios
      .post(
        "http://localhost:3001/api/habits/update/" + this.props.habitId,
        habit
      )
      .then((res) => console.log(res.data));

    window.location = "/vision";
  }
  render() {
    return (
      <div className="habit">
        <h1>Edit Habit</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Habit Name:</label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.hname}
              onChange={this.onChangeHname}
            />
          </div>

          <div className="form-group">
            <label>Habit Description:</label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Habit"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditHabit;
