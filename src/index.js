import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CustomerApp from "./customerApp";
import * as serviceWorker from "./serviceWorker";
import GlobalLoader from "./microComponents/globalLoader";
import SupplierApp from "./supplierApp";

let stake = "supplier";
const stakeRender = () => {
  if (stake == "customer") return <CustomerApp />;
  if (stake == "supplier") return <SupplierApp />;
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalLoader />
    {stakeRender()}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
