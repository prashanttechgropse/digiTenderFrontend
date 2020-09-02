import React, { Component } from "react";
//import "./App.css";
import Footer from "./macroComponents/footer";
import MainContentHeaderBar from "./macroComponents/mainContentHeaderBar";
import AdminSideBar from "./adminComponents/adminSideBar";
import AdminDashboardMainContent from "./adminComponents/adminDashboardComponents/adminDashboardMainContent";
import AdminCustomerList from "./adminComponents/adminCustomerManagementComponents/adminCustomerList";
import AdminSupplierList from "./adminComponents/adminSupplierMangementComponents/adminSupplierList";
import AdminDeliveryNoteList from "./adminComponents/adminDeliveryNoteManagementComponents/AdminDeliveryNoteList";
import AdminPaymentList from "./adminComponents/adminPaymentManagementComponents/adminPaymentList";
import AdminCreateCategory from "./adminComponents/adminAdminFunctionComponents/adminCreateCategory";
import AdminHelpSupport from "./adminComponents/adminAdminFunctionComponents/adminHelp&Support";
import AdminTermsConditions from "./adminComponents/adminAdminFunctionComponents/adminTerms&Conditions";
import ChangePassword from "./userComponents/changePassword";
import httpService from "./services/httpService";
import config from "./config.json";
import { toast } from "react-toastify";
import { Route } from "react-router-dom";

class AdminApp extends Component {
  state = {
    admin: null,
    customerList: null,
    supplierList: null,
    tenderList: null,
    mainRenderedContent: "dashboard",
  };

  async componentDidMount() {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/admin/adminData`
      );
      if (data) {
        if (data.user.profileType.toLowerCase() === "admin") {
          const admin = data.user;
          await this.setState({ admin: admin });

          const customerList = data.customerList;
          await this.setState({ customerList });

          const supplierList = data.supplierList;
          await this.setState({ supplierList });

          const tenderList = data.tenderList;
          await this.setState({ tenderList });

          toast.success(data.message);
          console.log(this.state);

          return;
        } else {
          this.props.history.push(`/${data.user.profileType}`);
          return;
        }
      }
    } catch (error) {
      toast.error(error.message);
      //window.location.reload();
    }
  }

  setMainRenderedContent = (key) => {
    this.setState({ mainRenderedContent: key });
  };

  renderMainComponent() {
    switch (this.state.mainRenderedContent) {
    }
  }

  checkAdminPopulated = () => {
    if (this.state.admin) {
      return (
        <div className="page active">
          <div
            className="app-sidebar__overlay active"
            data-toggle="sidebar"
          ></div>
          <AdminSideBar onClick={(key) => this.setMainRenderedContent(key)} />
          <div className="main-content app-content">
            <MainContentHeaderBar
              user={this.state.admin}
              onClick={(key) => this.setMainRenderedContent(key)}
            />
            <Route exact path="/admin/customerList">
              <AdminCustomerList />
            </Route>
            <Route exact path="/admin/supplierList">
              <AdminSupplierList />
            </Route>
            <Route exact path="/admin/deliveryNoteList">
              <AdminDeliveryNoteList />
            </Route>
            <Route exact path="/admin/paymentList">
              <AdminPaymentList />
            </Route>
            <Route exact path="/admin/createCategory">
              <AdminCreateCategory />
            </Route>
            <Route exact path="/admin/helpSupport">
              <AdminHelpSupport />
            </Route>
            <Route exact path="/admin/termsConditions">
              <AdminTermsConditions />
            </Route>
            <Route exact path="/admin/changePassword">
              <ChangePassword />
            </Route>
            <Route exact path="/admin">
              <AdminDashboardMainContent />
            </Route>
            {this.renderMainComponent()}
          </div>
          <Footer />
        </div>
      );
    }
  };

  render() {
    return (
      <body className="main-body app sidebar-mini">
        {this.checkAdminPopulated()}
      </body>
    );
  }
}

export default AdminApp;
