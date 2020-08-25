import React, { Component } from "react";
import { Route } from "react-router-dom";
import ForgotPassword from "./macroComponents/forgotPasswordForm";
class ForgotPasswordContainer extends Component {
  state = {
    register: {
      email: "",
    },
  };

  getEmail = async (email) => {
    const register = { email: email };
    await this.setState({ register });
  };
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/forgotPassword"
          render={(props) => (
            <ForgotPassword
              submitEmail={(email) => this.getEmail(email)}
              {...props}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default ForgotPasswordContainer;
