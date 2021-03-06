import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
class LoginFacebook extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="1719310968233218"
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default LoginFacebook;
