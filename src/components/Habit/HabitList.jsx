import React from "react";
import axios from "axios";
import Habit from "./Habit";

class HabitList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHabit = this.deleteHabit.bind(this);
    this.state = { habits: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/habits")
      .then((res) => {
        this.setState({ habits: res.data });
      })
      .catch((err) => console.log(err));
  }
  deleteHabit(id) {
    console.log("inside delete" + id);
    axios.delete("/api/habits/" + id).then((res) => console.log(res.data));
    this.setState({ habits: this.state.habits.filter((el) => el._id !== id) });
  }
  habitsList() {
    return this.state.habits.map((habit) => {
      return (
        <Habit key={habit._id} habit={habit} deleteHabit={this.deleteHabit} />
      );
    });
  }
  render() {
    return (
      <div className="habit">
        <h1>All Habits</h1>
        <h2>{this.habitsList()}</h2>
      </div>
    );
  }
}

export default HabitList;
