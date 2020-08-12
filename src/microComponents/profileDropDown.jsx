import React, { Component } from "react";
class ProfileDropDown extends Component {
  state = {};
  render() {
    return (
      <div className="dropdown main-profile-menu nav nav-item nav-link">
        <a className="profile-user d-flex" href="">
          <img
            alt=""
            src={
              "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/customer/01.jpg"
            }
          />
        </a>
        <div className="dropdown-menu">
          <div className="main-header-profile bg-primary p-3">
            <div className="d-flex wd-100p">
              <div className="main-img-user">
                <img
                  alt=""
                  src={
                    "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/customer/01.jpg"
                  }
                  className=""
                />
              </div>
              <div className="ml-3 my-auto">
                <h6>Al Hamid Saif</h6>
                <span>Customer</span>
              </div>
            </div>
          </div>
          <a
            className="dropdown-item"
            onClick={() => this.props.onClick("profile")}
          >
            <i className="bx bx-user-circle"></i>Profile
          </a>
          <a
            className="dropdown-item"
            onClick={() => this.props.onClick("editProfile")}
          >
            <i className="bx bx-cog"></i> Edit Profile
          </a>
          <a
            className="dropdown-item"
            onClick={() => this.props.onClick("changePassword")}
          >
            <i className="bx bxs-inbox"></i>Change Password
          </a>
          <a
            className="dropdown-item"
            onClick={() => this.props.onClick("signOut")}
          >
            <i className="bx bx-log-out"></i> Sign Out
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileDropDown;
