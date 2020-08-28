import React, { Component } from "react";
//import "./App.css";
import Footer from "./macroComponents/footer";
import MainContentHeaderBar from "./macroComponents/mainContentHeaderBar";

import HelpSupport from "./macroComponents/helpSupport";
import TermsConditions from "./macroComponents/termsConditions";
import MyProfile from "./macroComponents/myProfile";
import EditProfile from "./macroComponents/editProfile";

import SupplierDeliveryNoteMainContent from "./supplierComponents/supplierDeliveryNotesComponents/supplierDeliveryNoteMainContent";
import SupplierDashboardMainContent from "./supplierComponents/supplierDashboardComponents/supplierDashboardMainContent";
import SupplierSideBar from "./supplierComponents/supplierSideBar";
import SupplierTenderList from "./supplierComponents/supplierTenderManagementComponents/supplierTenderList";
import SupplierSaveForLater from "./supplierComponents/supplierTenderManagementComponents/supplierSaveForLater";
import SupplierTransactionManagement from "./supplierComponents/supplierTenderManagementComponents/supplierTransactionManagement";
import SupplierHistory from "./supplierComponents/supplierTenderManagementComponents/supplierHistory";
import SupplierEmployeeList from "./supplierComponents/supplierAdminFunctionsComponents/supplierEmployeeList";
import SupplierCreateSubUser from "./supplierComponents/supplierAdminFunctionsComponents/supplierCreateSubUser";
import httpService from "./services/httpService";
import config from "./config.json";
import { toast } from "react-toastify";
import ChangePassword from "./userComponents/changePassword";

class SupplierApp extends Component {
  state = { supplier: null, mainRenderedContent: "dashboard" };

  async componentDidMount() {
    try {
      const { data } = await httpService.get(`${config.apiendpoint}/myData`);
      if (data.user.profileType.toLowerCase() === "supplier") {
        const supplier = data.user;
        toast.success(data.message);
        await this.setState({ supplier: supplier });
      } else this.props.history.push(`/${data.user.profileType}`);
    } catch (error) {
      toast.error(error.response.data);
      this.props.history.push(`/login`);
    }
  }

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
          <MyProfile
            user={this.state.supplier}
            onClick={(key) => this.setMainRenderedContent(key)}
          />
        );
      case "editProfile":
        return <EditProfile />;
      case "changePassword":
        return <ChangePassword {...this.props} />;
      case "signOut": {
        localStorage.removeItem("token");
        return this.props.history.push("/login");
      }
      default:
        return <SupplierDashboardMainContent user={this.state.supplier} />;
    }
  }

  checkSupplierPopulated() {
    if (this.state.supplier) {
      return (
        <React.Fragment>
          <SupplierSideBar
            onClick={(key) => this.setMainRenderedContent(key)}
            user={this.state.supplier}
          />
          <div className="main-content app-content">
            <MainContentHeaderBar
              onClick={(key) => this.setMainRenderedContent(key)}
              user={this.state.supplier}
            />
            {this.renderMainComponent()}
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <body className="main-body app sidebar-mini">
        <div className="page active">
          <div
            className="app-sidebar__overlay active"
            data-toggle="sidebar"
          ></div>
          {this.checkSupplierPopulated()}
          <Footer />
        </div>
      </body>
    );
  }
}

export default SupplierApp;
