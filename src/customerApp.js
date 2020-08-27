import React, { Component } from "react";
//import "./App.css";
import CustomerSidebar from "./customerComponents/customersidebar";
import Footer from "./macroComponents/footer";
import MainContentHeaderBar from "./macroComponents/mainContentHeaderBar";
import CustomerDashboardMainContent from "./customerComponents/customerDashboardComponents/customerDashboardMainConent";
import CustomerDeliveryNoteMainContent from "./customerComponents/customerDeliveryNotesComponents/customerDeliveryNoteMainContent";
import HelpSupport from "./macroComponents/helpSupport";
import TermsConditions from "./macroComponents/termsConditions";
import MyProfile from "./macroComponents/myProfile";
import EditProfile from "./macroComponents/editProfile";
import ChangePassword from "./userComponents/changePassword";
import CustomerTenderList from "./customerComponents/customerTenderManagementComponents/customerTenderList";
import CustomerSaveForLater from "./customerComponents/customerTenderManagementComponents/customerSaveForLater";
import CustomerTransactionList from "./customerComponents/customerTenderManagementComponents/customerTransactionList";
import CustomerCreateTender from "./customerComponents/customerTenderManagementComponents/customerCreateTender";
import CustomerReceiverlist from "./customerComponents/customerAdminFunctionComponents.jsx/customerReceiverList";
import CustomerCreateReceiver from "./customerComponents/customerAdminFunctionComponents.jsx/customerCreateReceiver";
import config from "./config.json";
import httpService from "./services/httpService";
import { toast } from "react-toastify";

class CustomerApp extends Component {
  state = { customer: {}, mainRenderedContent: "dashboard" };

  setMainRenderedContent = (key) => {
    this.setState({ mainRenderedContent: key });
  };
  async componentDidMount() {
    try {
      const { data } = await httpService.get(`${config.apiendpoint}/myData`);
      toast.success(data.message);
      const customer = data.customer;
      await this.setState({ customer: customer });
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  renderMainComponent() {
    switch (this.state.mainRenderedContent) {
      case "deliveryNotes":
        return <CustomerDeliveryNoteMainContent />;
      case "createTender":
        return <CustomerCreateTender />;
      case "tenderList":
        return <CustomerTenderList />;
      case "saveForLater":
        return <CustomerSaveForLater />;
      case "transactionList":
        return <CustomerTransactionList />;
      case "customerReceiverList":
        return (
          <CustomerReceiverlist
            onClick={(key) => this.setMainRenderedContent(key)}
          />
        );
      case "createReceiver":
        return <CustomerCreateReceiver />;
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
        return <ChangePassword {...this.props} />;
      default:
        return <CustomerDashboardMainContent />;
    }
  }

  checkCustomerPopulated() {
    if (this.state.customer) {
      return (
        <React.Fragment>
          <div
            className="app-sidebar__overlay active"
            data-toggle="sidebar"
          ></div>
          <CustomerSidebar
            user={this.state.user}
            onClick={(key) => this.setMainRenderedContent(key)}
          />
          <div className="main-content app-content">
            <MainContentHeaderBar
              user={this.state.customer}
              onClick={(key) => this.setMainRenderedContent(key)}
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
        {"add global loader tag here"}
        <div className="page active">
          {this.checkCustomerPopulated()}
          <Footer />
        </div>
      </body>
    );
  }
}

export default CustomerApp;
