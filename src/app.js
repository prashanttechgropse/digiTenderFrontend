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
import ForgotPassword from "./macroComponents/forgotPasswordForm";
import ProfileSetup from "./macroComponents/profileSetup";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <CreateAccount />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
