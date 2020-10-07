import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBarToggleButton extends Component {
  state = {};
  render() {
    return (
      <div className="app-sidebar__toggle" data-toggle="sidebar">
        <a className="open-toggle">
          <i className="header-icon fa fa-align-left"></i>
        </a>
        <a className="close-toggle">
          <i className="header-icons fa fa-times"></i>
        </a>
      </div>
    );
  }
}

export default SideBarToggleButton;
