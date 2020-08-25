import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBarToggleButton extends Component {
  state = {};
  render() {
    return (
      <div className="app-sidebar__toggle" data-toggle="sidebar">
        <Link className="open-toggle" href="#">
          <i className="header-icon fa fa-align-left"></i>
        </Link>
        <Link className="close-toggle" href="#">
          <i className="header-icons fa fa-times"></i>
        </Link>
      </div>
    );
  }
}

export default SideBarToggleButton;
