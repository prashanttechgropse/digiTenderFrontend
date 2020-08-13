import React, { Component } from "react";
//import "./App.css";
import Footer from "./macroComponents/footer";
import MainContentHeaderBar from "./macroComponents/mainContentHeaderBar";

import HelpSupport from "./macroComponents/helpSupport";
import TermsConditions from "./macroComponents/termsConditions";
import MyProfile from "./macroComponents/myProfile";
import EditProfile from "./macroComponents/editProfile";
import ChangePassword from "./macroComponents/changePassword";
import SupplierDeliveryNoteMainContent from "./supplierComponents/supplierDeliveryNotesComponents/supplierDeliveryNoteMainContent";
import SupplierDashboardMainContent from "./supplierComponents/supplierDashboardComponents/supplierDashboardMainContent";
import SupplierSideBar from "./supplierComponents/supplierSideBar";
import SupplierTenderList from "./supplierComponents/supplierTenderManagementComponents/supplierTenderList";
import SupplierSaveForLater from "./supplierComponents/supplierTenderManagementComponents/supplierSaveForLater";
import SupplierTransactionManagement from "./supplierComponents/supplierTenderManagementComponents/supplierTransactionManagement";
import SupplierHistory from "./supplierComponents/supplierTenderManagementComponents/supplierHistory";
import SupplierEmployeeList from "./supplierComponents/supplierAdminFunctionsComponents/supplierEmployeeList";
import SupplierCreateSubUser from "./supplierComponents/supplierAdminFunctionsComponents/supplierCreateSubUser";

class SupplierApp extends Component {
  state = { mainRenderedContent: "dashboard" };

  setMainRenderedContent = (key) => {
    this.setState({ mainRenderedContent: key });
  };

  renderMainComponent() {
    switch (this.state.mainRenderedContent) {
      case "deliveryNotes":
        return <SupplierDeliveryNoteMainContent />;
      case "tenderList":
        return <SupplierTenderList />;
      case "saveForLater":
        return <SupplierSaveForLater />;
      case "transactionManagement":
        return <SupplierTransactionManagement />;
      case "history":
        return <SupplierHistory />;
      case "supplierEmployeeList":
        return (
          <SupplierEmployeeList
            onClick={(key) => this.setMainRenderedContent(key)}
          />
        );
      case "createSubUser":
        return <SupplierCreateSubUser />;
      case "helpSupport":
        return <HelpSupport />;
      case "termsConditions":
        return <TermsConditions />;
      case "profile":
        return (
          <MyProfile onClick={(key) => this.setMainRenderedContent(key)} />
        );
      case "editProfile":
        return <EditProfile />;
      case "changePassword":
        return <ChangePassword />;
      default:
        return <SupplierDashboardMainContent />;
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
          <SupplierSideBar
            onClick={(key) => this.setMainRenderedContent(key)}
          />
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

export default SupplierApp;
