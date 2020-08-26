import React, { Component } from "react";
import CreateAccount from "./macroComponents/createAccount";
import { Route } from "react-router-dom";
import OtpVerificationForm from "./macroComponents/otpVerification";
import ProfileSetup from "./macroComponents/profileSetup";
class RegisterContainer extends Component {
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
          path="/register"
          render={(props) => (
            <CreateAccount
              submitEmail={(email) => this.getEmail(email)}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`/register/otpVerification`}
          render={(props) => (
            <OtpVerificationForm
              email={this.state.register.email}
              forgotPassword={false}
              {...props}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default RegisterContainer;
