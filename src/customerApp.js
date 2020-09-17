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
import { Route } from "react-router-dom";
import SupplierQuotationDetails from "./customerComponents/supllierQuotationDetails";
import TenderDetails from "./customerComponents/customerTenderManagementComponents/TenderDetails";

class CustomerApp extends Component {
  state = {
    customer: null,
    displayTenderDetails: null,
    displayBidId: null,
  };

  async componentDidMount() {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/customer/myData`
      );
      toast.success(data.message);
      if (data) {
        if (data.user.profileType.toLowerCase() === "customer") {
          const customer = data.user;
          this.setState({ customer: customer });
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

  displayTenderDetails = async (tenderId) => {
    const displayTenderDetails = this.state.customer.details.tenders.find(
      (tender) => tender._id == tenderId
    );
    this.setState({ displayTenderDetails });
  };

  displayBidDetails = async (bidId) => {
    console.log("this is the bidId");
    console.log(bidId);
    this.setState({ displayBidId: bidId });
  };

  checkCustomerPopulated = () => {
    if (this.state.customer) {
      return (
        <React.Fragment>
          <div
            className="app-sidebar__overlay active"
            data-toggle="sidebar"
          ></div>
          <CustomerSidebar user={this.state.customer} />
          <div className="main-content app-content">
            <MainContentHeaderBar user={this.state.customer} />
            <Route exact path="/customer/createTender">
              <CustomerCreateTender {...this.props} />
            </Route>
            <Route exact path="/customer/myProfile">
              <MyProfile user={this.state.customer} />
            </Route>
            <Route exact path="/customer/tenderList">
              <CustomerTenderList
                tenderList={this.state.customer.details.tenders.filter(
                  (tender) => tender.isPublished
                )}
                tenderClicked={(tenderId) =>
                  this.displayTenderDetails(tenderId)
                }
              />
              ;
            </Route>
            <Route exact path="/customer/saveForLater">
              <CustomerSaveForLater
                tenderList={this.state.customer.details.tenders.filter(
                  (tender) => !tender.isPublished
                )}
                tenderClicked={(tenderId) =>
                  this.displayTenderDetails(tenderId)
                }
              />
            </Route>
            <Route exact path="/customer/changePassword">
              <ChangePassword />;
            </Route>
            <Route exact path="/customer/transactionList">
              <CustomerTransactionList />
            </Route>
            <Route exact path="/customer/tenderDetails">
              <TenderDetails
                profileType={this.state.customer.profileType}
                tender={this.state.displayTenderDetails}
                {...this.props}
                bidClicked={(bidId) => this.displayBidDetails(bidId)}
              />
            </Route>
            <Route exact path="/customer/supplierQuotation">
              <SupplierQuotationDetails
                {...this.props}
                bidId={this.state.displayBidId}
              />
            </Route>
            <Route exact path="/customer/termsConditions">
              <TermsConditions />
            </Route>
            <Route exact path="/customer/editProfile">
              <EditProfile />
            </Route>
            <Route exact path="/customer/helpSupport">
              <HelpSupport />;
            </Route>
            <Route exact path="/customer/createReceiver">
              <CustomerCreateReceiver />
            </Route>
            <Route exact path="/customer/deliveryNotes">
              <CustomerDeliveryNoteMainContent />
            </Route>
            <Route exact path="/customer/customerReceiverList">
              <CustomerReceiverlist />
            </Route>
            <Route exact path="/customer">
              <CustomerDashboardMainContent
                user={this.state.customer}
                tenderClicked={(tenderId) =>
                  this.displayTenderDetails(tenderId)
                }
              />
            </Route>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <body className="main-body app sidebar-mini">
        <div className="page active">
          {this.checkCustomerPopulated()}
          <Footer />
        </div>
      </body>
    );
  }
}

export default CustomerApp;
