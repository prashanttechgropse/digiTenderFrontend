import React from "react";
import Form from "./macroComponents/form/form";
import httpService from "./services/httpService";
import { apiendpoint } from "./config.json";
class Tokencheck extends Form {
  state = {};
  schema = {};

  doSubmit() {
    httpService.post(`${apiendpoint}/setUpprofile`);
  }
  render() {
    return <div>{this.renderButton("tokenCheck", this.handleSubmit)}</div>;
  }
}

export default Tokencheck;
