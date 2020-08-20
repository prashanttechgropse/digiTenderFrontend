import React, { Component } from "react";
//import "./App.css";
import Footer from "./macroComponents/footer";
import MainContentHeaderBar from "./macroComponents/mainContentHeaderBar";
import ChangePassword from "./macroComponents/changePassword";
import AdminSideBar from "./adminComponents/adminSideBar";
import AdminDashboardMainContent from "./adminComponents/adminDashboardComponents/adminDashboardMainContent";
import AdminCustomerList from "./adminComponents/adminCustomerManagementComponents/adminCustomerList";
import AdminSupplierList from "./adminComponents/adminSupplierMangementComponents/adminSupplierList";
import AdminDeliveryNoteList from "./adminComponents/adminDeliveryNoteManagementComponents/AdminDeliveryNoteList";
import AdminPaymentList from "./adminComponents/adminPaymentManagementComponents/adminPaymentList";
import AdminCreateCategory from "./adminComponents/adminAdminFunctionComponents/adminCreateCategory";
import AdminHelpSupport from "./adminComponents/adminAdminFunctionComponents/adminHelp&Support";
import AdminTermsConditions from "./adminComponents/adminAdminFunctionComponents/adminTerms&Conditions";

class AdminApp extends Component {
  state = { mainRenderedContent: "dashboard" };

  setMainRenderedContent = (key) => {
    this.setState({ mainRenderedContent: key });
  };

  renderMainComponent() {
    switch (this.state.mainRenderedContent) {
      case "customerList":
        return <AdminCustomerList />;
      case "supplierList":
        return <AdminSupplierList />;
      case "deliveryNoteList":
        return <AdminDeliveryNoteList />;
      case "paymentList":
        return <AdminPaymentList />;
      case "creatCategory":
        return <AdminCreateCategory />;
      case "helpSupport":
        return <AdminHelpSupport />;
      case "termsConditions":
        return <AdminTermsConditions />;
      case "changePassword":
        return <ChangePassword />;
      default:
        return <AdminDashboardMainContent />;
    }
  }

  render() {
    return (
      <body className="main-body app sidebar-mini">
        {"add global loader tag here"}
        <div className="page active">
          <div
            className="app-sidebar__overlay active"
            data-toggle="sidebar"
          ></div>
          <AdminSideBar onClick={(key) => this.setMainRenderedContent(key)} />
          <div className="main-content app-content">
            <MainContentHeaderBar
              onClick={(key) => this.setMainRenderedContent(key)}
            />
            {this.renderMainComponent()}
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}

export default AdminApp;
