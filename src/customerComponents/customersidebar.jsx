import React, { Component } from "react";
class CustomerSidebar extends Component {
  state = {
    toggleTenderManagement: 0,
    toggleAdminFunctions: 0,
  };
  toggleAdminFunctions = () => {
    let temp = this.state.toggleAdminFunctions;
    temp == 0 ? (temp = 1) : (temp = 0);
    this.setState({ toggleAdminFunctions: temp });
  };
  toggleTenderManagement = () => {
    let temp = this.state.toggleTenderManagement;
    temp == 0 ? (temp = 1) : (temp = 0);
    this.setState({ toggleTenderManagement: temp });
  };
  renderAdminFunctions = () => {
    if (this.state.toggleAdminFunctions == 1) {
      return (
        <ul>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("customerReceiverList")}>
              Receiver List
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("createReceiver")}>
              Create Receiver
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("changePassword")}>
              Change Password
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("profile")}>Profile</a>
          </li>
        </ul>
      );
    } else return;
  };
  renderTenderManagement = () => {
    if (this.state.toggleTenderManagement == 1) {
      return (
        <ul>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("createTender")}>
              Create Tender
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("tenderList")}>Tender List</a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("saveForLater")}>
              Save for Later
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("transactionList")}>
              Transaction List
            </a>
          </li>
        </ul>
      );
    } else return;
  };
  render() {
    return (
      <aside className="app-sidebar sidebar-scroll">
        <div className="main-sidebar-header active">
          <a
            className="desktop-logo logo-light active"
            onClick={() => this.props.onClick("dashboard")}
          >
            <img
              src={
                "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/logo/logo.png"
              }
              className="main-logo"
              alt="logo"
            />
          </a>
          <a
            className="desktop-logo logo-dark active"
            onClick={() => this.props.onClick("dashboard")}
          >
            <img
              src={
                "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/logo/logo.png"
              }
              className="main-logo dark-theme"
              alt="logo"
            />
          </a>
          <a
            className="logo-icon mobile-logo icon-light active"
            onClick={() => this.props.onClick("dashboard")}
          >
            <img
              src={
                "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/logo/favicon.png"
              }
              className="logo-icon"
              alt="logo"
            />
          </a>
          <a
            className="logo-icon mobile-logo icon-dark active"
            onClick={() => this.props.onClick("dashboard")}
          >
            <img
              src={
                "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/logo/favicon.png"
              }
              className="logo-icon dark-theme"
              alt="logo"
            />
          </a>
        </div>
        <div className="main-sidemenu mCustomScrollbar _mCS_1 mCS-autoHide">
          <div
            id="mCSB_1"
            className="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
            tabindex="0"
          >
            <div id="mCSB_1_container" className="mCSB_container" dir="ltr">
              <div className="app-sidebar__user clearfix active">
                <div className="dropdown user-pro-body">
                  <div className="">
                    <img
                      alt="user-img"
                      className="avatar avatar-xl brround mCS_img_loaded"
                      src={
                        "https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/customer/01.jpg"
                      }
                    />
                    <span className="avatar-status profile-status bg-green"></span>
                  </div>
                  <div className="user-info">
                    <h4 className="font-weight-semibold mt-3 mb-0">
                      {this.props.profile.name}
                    </h4>
                    <span className="mb-0 text-muted">Customer</span>
                  </div>
                </div>
              </div>
              <ul className="side-menu">
                <li className="slide active">
                  <a
                    className="side-menu__item active"
                    onClick={() => this.props.onClick("dashboard")}
                  >
                    <i className="fa fa-home"></i>
                    <span className="side-menu__label">Dashboard</span>
                  </a>
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-toggle="slide"
                    onClick={this.toggleTenderManagement}
                  >
                    <i className="fa fa-address-book"></i>
                    <span className="side-menu__label">Tender Management</span>
                    <i className="angle fa fa-angle-down"></i>
                  </a>
                  {this.renderTenderManagement()}
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    onClick={() => this.props.onClick("deliveryNotes")}
                  >
                    <i className="fa fa-book"></i>
                    <span className="side-menu__label">Delivery Notes</span>
                  </a>
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-toggle="slide"
                    onClick={this.toggleAdminFunctions}
                  >
                    <i className="fa fa-cog"></i>
                    <span className="side-menu__label">Admin Functions</span>
                    <i className="angle fa fa-angle-down"></i>
                  </a>
                  {this.renderAdminFunctions()}
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    onClick={() => this.props.onClick("helpSupport")}
                  >
                    <i className="fa fa-support"></i>
                    <span className="side-menu__label">Help & Support</span>
                  </a>
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    onClick={() => this.props.onClick("termsConditions")}
                  >
                    <i className="fa fa-info"></i>
                    <span className="side-menu__label">
                      Terms and Conditions
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default CustomerSidebar;
