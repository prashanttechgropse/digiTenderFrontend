import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CustomerApp from "../../digiTenderFrontend/src/customerApp";
import SupplierApp from "../../digiTenderFrontend/src/supplierApp";
import AdminApp from "../../digiTenderFrontend/src/AdminApp";
import NotFound from "./notfound";
import LoginForm from "./loginForm";
import CreateAccount from "./createAccount";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/customer" exact component={CustomerApp} />
        <Route path="/supplier" exact component={SupplierApp} />
        <Route path="/admin" exact component={AdminApp} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/createAccount" exact component={CreateAccount} />
        <Route path="/not-found" exact component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
