import React from "react";
import axios from "axios";
import HabitCard from "./HabitCard";

class HabitList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHabit = this.deleteHabit.bind(this);
    this.state = { habits: [] };
    this.user = props.user;
  }
  componentDidMount() {
    this.fetchAllHabits();
  }

  fetchAllHabits() {
    axios
      .get("/api/habits", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (this.state.habits.length !== res.data.length)
          this.setState({ habits: res.data });
      })
      .catch((err) => console.log(err));
  }
  deleteHabit(id) {
    axios
      .delete("/api/habits/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res.data));
    this.setState({ habits: this.state.habits.filter((el) => el._id !== id) });
  }
  habitsList() {
    return this.state.habits.map((habit) => {
      return (
        <HabitCard
          key={habit._id}
          habit={habit}
          deleteHabit={this.deleteHabit}
          user={this.user}
        />
      );
    });
  }
  render() {
    return (
      <div className="habit">
        <div className="all-habit-cards-div">{this.habitsList()}</div>
      </div>
    );
  }
}

export default HabitList;
