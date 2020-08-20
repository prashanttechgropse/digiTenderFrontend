import React, { Component } from "react";
class AdminSideBar extends Component {
  state = {
    toggleCustomerManagement: 0,
    toggleSupplierManagement: 0,
    toggleDeliveryNoteManagement: 0,
    togglePaymentManagement: 0,
    toggleAdmin: 0,
  };

  toggleCustomerManagement = () => {
    let temp = this.state.toggleCustomerManagement;
    temp == 0 ? (temp = 1) : (temp = 0);
    this.setState({ toggleCustomerManagement: temp });
  };
  toggleSupplierManagement = () => {
    let temp = this.state.toggleSupplierManagement;
    temp == 0 ? (temp = 1) : (temp = 0);
    this.setState({ toggleSupplierManagement: temp });
  };
  toggleDeliveryNoteManagement = () => {
    let temp = this.state.toggleDeliveryNoteManagement;
    temp == 0 ? (temp = 1) : (temp = 0);
    this.setState({ toggleDeliveryNoteManagement: temp });
  };
  togglePaymentManagement = () => {
    let temp = this.state.togglePaymentManagement;
    temp == 0 ? (temp = 1) : (temp = 0);
    this.setState({ togglePaymentManagement: temp });
  };
  toggleAdmin = () => {
    let temp = this.state.toggleAdmin;
    temp == 0 ? (temp = 1) : (temp = 0);
    this.setState({ toggleAdmin: temp });
  };

  renderCustomerManagement = () => {
    if (this.state.toggleCustomerManagement == 1) {
      return (
        <ul>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("customerList")}>
              Customer List
            </a>
          </li>
        </ul>
      );
    } else return;
  };
  renderSupplierManagement = () => {
    if (this.state.toggleSupplierManagement == 1) {
      return (
        <ul>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("supplierList")}>
              Supplier List
            </a>
          </li>
        </ul>
      );
    } else return;
  };
  renderDeliveryNoteManagement = () => {
    if (this.state.toggleDeliveryNoteManagement == 1) {
      return (
        <ul>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("deliveryNoteList")}>
              Delivery Note List
            </a>
          </li>
        </ul>
      );
    } else return;
  };
  renderPaymentManagement = () => {
    if (this.state.togglePaymentManagement == 1) {
      return (
        <ul>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("paymentList")}>
              Payment List
            </a>
          </li>
        </ul>
      );
    } else return;
  };
  renderAdmin = () => {
    if (this.state.toggleAdmin == 1) {
      return (
        <ul>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("createCategory")}>
              Create Category
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("helpSupport")}>
              Help & Support
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("termConditions")}>
              Terms & Conditions
            </a>
          </li>
          <li className="slide-item side-menu__item">
            <a onClick={() => this.props.onClick("changePassword")}>
              Change Password
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
              src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/common/img/logo/logo.png"
              className="main-logo"
              alt="logo"
            />
          </a>
          <a
            className="desktop-logo logo-dark active"
            onClick={() => this.props.onClick("dashboard")}
          >
            <img
              src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/common/img/logo/logo.png"
              className="main-logo dark-theme"
              alt="logo"
            />
          </a>
          <a
            className="logo-icon mobile-logo icon-light active"
            onClick={() => this.props.onClick("dashboard")}
          >
            <img
              src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/common/img/logo/favicon.png"
              className="logo-icon"
              alt="logo"
            />
          </a>
          <a
            className="logo-icon mobile-logo icon-dark active"
            onClick={() => this.props.onClick("dashboard")}
          >
            <img
              src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/common/img/logo/favicon.png"
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
                      src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/common/img/customer/01.jpg"
                    />
                    <span className="avatar-status profile-status bg-green"></span>
                  </div>
                  <div className="user-info">
                    <h4 className="font-weight-semibold mt-3 mb-0">
                      Al Hamid Saif
                    </h4>
                    <span className="mb-0 text-muted">Admin</span>
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
                    <span className="side-menu__label">Dashborad</span>
                  </a>
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-toggle="slide"
                    onClick={this.toggleCustomerManagement}
                  >
                    <i className="fa fa-users"></i>
                    <span className="side-menu__label">
                      Customer Management
                    </span>
                    <i className="angle fa fa-angle-down"></i>
                  </a>
                  {this.renderCustomerManagement()}
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-toggle="slide"
                    onClick={this.toggleSupplierManagement}
                  >
                    <i className="fa fa-user"></i>
                    <span className="side-menu__label">
                      Supplier Management
                    </span>
                    <i className="angle fa fa-angle-down"></i>
                  </a>
                  {this.renderSupplierManagement()}
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-toggle="slide"
                    onClick={this.toggleDeliveryNoteManagement}
                  >
                    <i className="fa fa-file"></i>
                    <span className="side-menu__label">
                      Delivery Note Management
                    </span>
                    <i className="angle fa fa-angle-down"></i>
                  </a>
                  {this.renderDeliveryNoteManagement()}
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-toggle="slide"
                    onClick={this.togglePaymentManagement}
                  >
                    <i className="fa fa-money"></i>
                    <span className="side-menu__label">Payment Management</span>
                    <i className="angle fa fa-angle-down"></i>
                  </a>
                  {this.renderPaymentManagement()}
                </li>
                <li className="slide">
                  <a
                    className="side-menu__item"
                    data-toggle="slide"
                    onClick={this.toggleAdmin}
                  >
                    <i className="fa fa-cog"></i>
                    <span className="side-menu__label">Admin</span>
                    <i className="angle fa fa-angle-down"></i>
                  </a>
                  {this.renderAdmin()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default AdminSideBar;
