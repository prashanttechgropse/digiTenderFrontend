import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProfileDropDown extends Component {
  state = {};
  render() {
    return (
      <div className="dropdown main-profile-menu nav nav-item nav-link">
        <Link className="profile-user d-flex" to="/customer">
          <img
            alt=""
            src={
              "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/customer/01.jpg"
            }
          />
        </Link>
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
                <h6>{this.props.user.details.firstName}</h6>
                <span>{this.props.user.profileType}</span>
              </div>
            </div>
          </div>
          {this.props.user.profileType.toLowerCase() == "admin" ? null : (
            <Link
              className="dropdown-item"
              to={`/${this.props.user.profileType}/myProfile`}
            >
              <i className="bx bx-user-circle"></i>Profile
            </Link>
          )}
          {this.props.user.profileType.toLowerCase() == "admin" ? null : (
            <Link
              className="dropdown-item"
              to={`/${this.props.user.profileType}/editProfile`}
            >
              <i className="bx bx-cog"></i> Edit Profile
            </Link>
          )}

          <Link
            className="dropdown-item"
            to={`/${this.props.user.profileType}/changePassword`}
          >
            <i className="bx bxs-inbox"></i>Change Password
          </Link>
          <Link
            className="dropdown-item"
            onClick={() => this.props.onClick("signOut")}
          >
            <i className="bx bx-log-out"></i> Sign Out
          </Link>
        </div>
      </div>
    );
  }
}

export default ProfileDropDown;
