import React, { Component } from "react";
class SideBarToggleButton extends Component {
  state = {};
  render() {
    return (
      <div className="app-sidebar__toggle" data-toggle="sidebar">
        <a className="open-toggle" href="#">
          <i className="header-icon fa fa-align-left"></i>
        </a>
        <a className="close-toggle" href="#">
          <i className="header-icons fa fa-times"></i>
        </a>
      </div>
    );
  }
}

export default SideBarToggleButton;
