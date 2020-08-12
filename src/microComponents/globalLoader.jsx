import React, { Component } from "react";
class GlobalLoader extends Component {
  state = {};
  render() {
    return (
      <div id="global-loader">
        <img
          src={
            "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/logo/loader.gif"
          }
          className="loader-img"
          alt="Loader"
        />
      </div>
    );
  }
}

export default GlobalLoader;
