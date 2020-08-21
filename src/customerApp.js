import React, { Component } from "react";

import axios from "axios";
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
import ChangePassword from "./macroComponents/changePassword";
import CustomerTenderList from "./customerComponents/customerTenderManagementComponents/customerTenderList";
import CustomerSaveForLater from "./customerComponents/customerTenderManagementComponents/customerSaveForLater";
import CustomerTransactionList from "./customerComponents/customerTenderManagementComponents/customerTransactionList";
import CustomerCreateTender from "./customerComponents/customerTenderManagementComponents/customerCreateTender";
import CustomerReceiverlist from "./customerComponents/customerAdminFunctionComponents.jsx/customerReceiverList";
import CustomerCreateReceiver from "./customerComponents/customerAdminFunctionComponents.jsx/customerCreateReceiver";
import config from "./config.json";

class CustomerApp extends Component {
  state = { customer: {}, mainRenderedContent: "dashboard" };

  setMainRenderedContent = (key) => {
    this.setState({ mainRenderedContent: key });
  };
  async componentDidMount() {
    const { data: customer } = await axios.get(
      `${config.apiendpoint}/customers`
    );
    await this.setState({ customer });
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
        return <ChangePassword />;
      default:
        return <CustomerDashboardMainContent />;
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
          <CustomerSidebar
            profile={this.state.customer}
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

export default CustomerApp;
