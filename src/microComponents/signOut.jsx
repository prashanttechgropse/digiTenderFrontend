import React, { Component } from "react";
class SignOut extends Component {
  signOut() {
    localStorage.removeItem("token");
    return this.props.history.push("/login");
  }
  render() {
    return <div>{this.signOut()}</div>;
  }
}

export default SignOut;
