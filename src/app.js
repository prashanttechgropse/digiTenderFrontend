import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./notfound";
import LoginForm from "./loginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterContainer from "./registerContainer.jsx";
import ForgotPasswordContainer from "./forgotPassordContainer";
import CustomerApp from "./customerApp";
import SupplierApp from "./supplierApp";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/customer" component={CustomerApp} />
          <Route exact path="/supplier" component={SupplierApp} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/forgotPassword" component={ForgotPasswordContainer} />
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
