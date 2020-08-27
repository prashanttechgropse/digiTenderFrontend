import React, { Component } from "react";
import CreateAccount from "./macroComponents/createAccount";
import { Route } from "react-router-dom";
import OtpVerificationForm from "./macroComponents/otpVerification";
import ProfileSetup from "./macroComponents/profileSetup";
import BankDetails from "./macroComponents/bankDetails";
class RegisterContainer extends Component {
  state = {
    register: {
      email: "",
      profileType: "",
    },
  };

  getEmail = async (email) => {
    const register = { email: email };
    await this.setState({ register });
  };

  getProfileDetails = async (formData) => {
    const register = formData;
    await this.setState({ register: register });
    console.log(this.state);
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
        <Route
          exact
          path={`/register/profileSetup`}
          render={(props) => (
            <ProfileSetup
              submitProfileDetails={(formData) =>
                this.getProfileDetails(formData)
              }
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`/register/uploadBankDetails`}
          render={(props) => (
            <BankDetails profileDetails={this.state.register} {...props} />
          )}
        />
      </React.Fragment>
    );
  }
}

export default RegisterContainer;
