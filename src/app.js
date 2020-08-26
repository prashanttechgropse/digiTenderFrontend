import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./notfound";
import LoginForm from "./loginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterContainer from "./registerContainer.jsx";
import ForgotPasswordContainer from "./forgotPasswordContainer";
import CustomerApp from "./customerApp";
import SupplierApp from "./supplierApp";
import Playground from "./playground";
import Tokencheck from "./tokencheck";
import ProfileSetup from "./macroComponents/profileSetup";
import OtpVerificationForm from "./macroComponents/otpVerification";

class App extends Component {
  state = {
    userData: {
      email: "",
    },
  };

  getEmail = async (email) => {
    const userData = { email: email };
    await this.setState({ userData });
  };
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route exact path="/tokenCheck" component={Tokencheck} />
          <Route exact path="/upload" component={Playground} />
          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginForm
                submitEmail={(email) => this.getEmail(email)}
                {...props}
              />
            )}
          />
          <Route exact path="/customer" component={CustomerApp} />
          <Route exact path="/supplier" component={SupplierApp} />
          <Route exact path={`/profileSetup`} component={ProfileSetup} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/forgotPassword" component={ForgotPasswordContainer} />
          <Route
            exact
            path={`/verify`}
            render={(props) => (
              <OtpVerificationForm
                email={this.state.userData.email}
                forgotPassword={false}
                {...props}
              />
            )}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/createAccount" to="/register" />
          <Redirect exact from="/signIn" to="/login" />
          <Redirect exact from="/" to="/register" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
