import React, { Component } from "react";
//import "./App.css";
import Sidebar from "./macroComponents/sidebar";
import Footer from "./macroComponents/footer";
import MainContentHeaderBar from "./macroComponents/mainContentHeaderBar";
import CustomerDashboardMainContent from "./customerComponents/customerDashboardComponents/customerDashboardMainConent";
import CustomerDeliveryNoteMainContent from "./customerComponents/customerDeliveryNotesComponents/customerDeliveryNoteMainContent";
import HelpSupport from "./macroComponents/helpSupport";
import TermsConditions from "./macroComponents/termsConditions";
import MyProfile from "./macroComponents/myProfile";
import EditProfile from "./macroComponents/editProfile";
import ChangePassword from "./macroComponents/changePassword";

class app extends Component {
  state = { mainRenderedContent: "dashboard" };

  setMainRenderedContent = (key) => {
    this.setState({ mainRenderedContent: key });
  };

  renderMainComponent() {
    switch (this.state.mainRenderedContent) {
      case "deliveryNotes":
        return <CustomerDeliveryNoteMainContent />;
        break;
      case "helpSupport":
        return <HelpSupport />;
        break;
      case "termsConditions":
        return <TermsConditions />;
        break;
      case "profile":
        return (
          <MyProfile onClick={(key) => this.setMainRenderedContent(key)} />
        );
        break;
      case "editProfile":
        return <EditProfile />;
        break;
      case "changePassword":
        return <ChangePassword />;
        break;
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
          <Sidebar onClick={(key) => this.setMainRenderedContent(key)} />
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

export default app;
