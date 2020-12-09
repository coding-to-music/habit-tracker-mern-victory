import React from "react";
import axios from "axios";
// import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

class CreateHabit extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeHname = this.onChangeHname.bind(this);
    this.onChangeImageURL = this.onChangeImageURL.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      hname: "",
      description: "",
      imageURL: "",
      user: props.user,
    };
    console.log(this.state.user._id);
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

  onChangeImageURL(e) {
    this.setState({
      imageURL: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const habit = {
      description: this.state.description,
      hname: this.state.hname,
      imageURL: this.state.imageURL,
      token: localStorage.getItem("token"),
    };

    axios.post("http://localhost:3001/api/habits/add", habit).then((res) => {
      console.log(res.data);
      this.props.history.push("/vision");
    });

    // window.location = "/vision";
  }
  render() {
    return (
      <div className="habit">
        <h1>Create New Habit</h1>
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
            <label>Habit Affirmation:</label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Habit imageURL:</label>
            <input
              type="text"
              className="form-control"
              pattern="https://.*"
              placeholder="https://"
              defaultValue={this.state.imageURL}
              onChange={this.onChangeImageURL}
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
  }
}

// export default CreateHabit;
export default withRouter(CreateHabit);
