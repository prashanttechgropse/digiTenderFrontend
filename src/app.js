import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CustomerApp from "./customerApp";
import SupplierApp from "./supplierApp";
import AdminApp from "./AdminApp";
import NotFound from "./notfound";
import LoginForm from "./loginForm";
import CreateAccount from "./createAccount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpVerificationForm from "./macroComponents/otpVerification";
import ForgotPassword from "./macroComponents/forgotPasswordForm";
import ProfileSetup from "./macroComponents/profileSetup";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route
          path="/customer"
          exact
          render={(props) => <CustomerApp {...props} />}
        />
        <Route path="/profileSetUp" exact component={ProfileSetup} />
        <Route path="/supplier" exact component={SupplierApp} />
        <Route path="/admin" exact component={AdminApp} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/createAccount" exact component={CreateAccount} />
        <Route path="/otpVerification" exact component={OtpVerificationForm} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        <Route path="/not-found" exact component={NotFound} />
        <Redirect from="/" exact to="/login" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
