import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import VisionPage from "../VisionPage/VisionPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import HabitPage from "../HabitPage/HabitPage";
import CreateHabitPage from "../HabitPage/CreateHabitPage";
import EditHabitPage from "../HabitPage/EditHabitPage.jsx";
import userService from "../../utils/userService";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  render() {
    return (
      <div className="container">
        <br />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/vision"
            render={() => (
              <VisionPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/habits/create"
            render={() => (
              <CreateHabitPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/habits/:id"
            render={() => (
              <HabitPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/habits/update/:id"
            render={({ match }) => (
              <EditHabitPage
                handleLogout={this.handleLogout}
                user={this.state.user}
                habitId={match.params.id}
              />
            )}
          />

          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
