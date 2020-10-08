import React, { Component } from "react";
//import "./App.css";
import CustomerSidebar from "../customerComponents/customersidebar";
import Footer from "../macroComponents/footer";
import MainContentHeaderBar from "../macroComponents/mainContentHeaderBar";
import HelpSupport from "../macroComponents/helpSupport";
import TermsConditions from "../macroComponents/termsConditions";
import MyProfile from "../macroComponents/myProfile";
import EditProfile from "../macroComponents/editProfile";
import ChangePassword from "../userComponents/changePassword";

import config from "../config.json";
import httpService from "../services/httpService";
import { toast } from "react-toastify";
import { Route } from "react-router-dom";
import ReceiverDashboardMainContent from "../receiverComponents/receiverDashboardMainContent";
import ReceiverSideBar from "../receiverComponents/receiverSideBar";
import SecondaryUserMyProfile from "../microComponents/secondaryUserMyProfile";

import ReceiverTenderDetails from "../receiverComponents/receiverTenderDetails";
import ReceiverTenderList from "../receiverComponents/receiverTenderList";
import CreateDeliveryNote from "../customerComponents/createDeliveryNote";
import DeliveryNoteMainContent from "../customerComponents/customerDeliveryNotesComponents/DeliveryNoteMainContent";
import DeliveryNoteDetails from "../customerComponents/customerDeliveryNotesComponents/DeliveryNoteDetails";

class ReceiverApp extends Component {
  state = {
    receiver: null,
  };

  async componentDidMount() {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/receiver/myData`
      );
      console.log(data);
      if (data) {
        if (data.user.profileType.toLowerCase() === "receiver") {
          const receiver = data.user;
          this.setState({ receiver: receiver });
          return;
        } else {
          this.props.history.push(`/${data.user.profileType}`);
          return;
        }
      }
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

  checkReceiverPopulated = () => {
    if (this.state.receiver) {
      return (
        <React.Fragment>
          <div
            className="app-sidebar__overlay active"
            data-toggle="sidebar"
          ></div>
          <ReceiverSideBar user={this.state.receiver} />
          <div className="main-content app-content">
            <MainContentHeaderBar user={this.state.receiver} />

            <Route exact path="/receiver/myProfile">
              <SecondaryUserMyProfile user={this.state.receiver} />
            </Route>
            <Route
              exact
              path="/receiver/tenderDetails/:tenderId"
              component={ReceiverTenderDetails}
            />
            <Route
              exact
              path="/receiver/tenderList"
              component={ReceiverTenderList}
            />
            <Route
              exact
              path="/receiver/deliveryNotes"
              component={DeliveryNoteMainContent}
            />
            <Route
              exact
              path="/receiver/createDeliveryNote/:tenderId/:status"
              component={CreateDeliveryNote}
            />
            <Route
              exact
              path="/receiver/deliveryNoteDetails/:tenderId"
              component={DeliveryNoteDetails}
            />
            <Route
              exact
              path="/receiver/changePassword"
              component={ChangePassword}
            />
            <Route
              exact
              path="/receiver/termsConditions"
              component={TermsConditions}
            />
            <Route exact path="/receiver/editProfile" component={EditProfile} />
            <Route exact path="/receiver/helpSupport" component={HelpSupport} />

            <Route
              exact
              path="/receiver"
              component={ReceiverDashboardMainContent}
            />
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div className="main-body app sidebar-mini">
        <div className="page active">
          {this.checkReceiverPopulated()}
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReceiverApp;
