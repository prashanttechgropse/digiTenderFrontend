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
import TenderList from "./supplierComponents/supplierTenderManagementComponents/supplierTenderList";
import SupplierSaveForLater from "./supplierComponents/supplierTenderManagementComponents/supplierSaveForLater";
import SupplierTransactionManagement from "./supplierComponents/supplierTenderManagementComponents/supplierTransactionManagement";
import SupplierHistory from "./supplierComponents/supplierTenderManagementComponents/supplierHistory";
import SupplierEmployeeList from "./supplierComponents/supplierAdminFunctionsComponents/supplierEmployeeList";
import SupplierCreateSubUser from "./supplierComponents/supplierAdminFunctionsComponents/supplierCreateSubUser";
import httpService from "./services/httpService";
import config from "./config.json";
import { toast } from "react-toastify";
import ChangePassword from "./userComponents/changePassword";
import { Route } from "react-router-dom";
import SupllierBid from "./supplierComponents/supplierBid";
import SupplierMyBidDetails from "./supplierComponents/supplierMyBidDetails";

class SupplierApp extends Component {
  state = { supplier: "", displayTenderDetailsId: null };

  async componentDidMount() {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/supplier/myData`
      );
      if (data.user.profileType.toLowerCase() === "supplier") {
        const supplier = data.user;
        toast.success(data.message);
        this.setState({ supplier: supplier });
      } else this.props.history.push(`/${data.user.profileType}`);
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

  displayTenderDetailsID = async (tenderId) => {
    this.setState({ displayTenderDetailsId: tenderId });
  };

  checkSupplierPopulated() {
    if (this.state.supplier !== "") {
      return (
        <React.Fragment>
          <SupplierSideBar user={this.state.supplier} />
          <div className="main-content app-content">
            <MainContentHeaderBar user={this.state.supplier} />
            <Route exact path="/supplier/deliveryNotes">
              <SupplierDeliveryNoteMainContent />;
            </Route>
            <Route exact path="/supplier/tenderList">
              <TenderList tenderClicked={this.displayTenderDetailsID} />
            </Route>
            <Route exact path="/supplier/saveForLater">
              <SupplierSaveForLater
                tenderClicked={this.displayTenderDetailsID}
              />
              ;
            </Route>
            <Route exact path="/supplier/transactionManagement">
              <SupplierTransactionManagement
                tenderClicked={this.displayTenderDetailsID}
              />
              ;
            </Route>
            <Route exact path="/supplier/history">
              <SupplierHistory />;
            </Route>
            <Route exact path="/supplier/supplierEmployeeList">
              <SupplierEmployeeList />
            </Route>
            <Route exact path="/supplier/createSubUser">
              <SupplierCreateSubUser />;
            </Route>
            <Route exact path="/supplier/helpSupport">
              <HelpSupport />
            </Route>
            <Route exact path="/supplier/termsConditions">
              <TermsConditions />;
            </Route>
            <Route exact path="/supplier/myProfile">
              <MyProfile user={this.state.supplier} />
            </Route>
            <Route exact path="/supplier/editProfile">
              <EditProfile />
            </Route>
            <Route exact path="/supplier/changePassword">
              <ChangePassword {...this.props} />
            </Route>
            <Route exact path="/supplier/tenderDetails">
              <SupllierBid
                {...this.props}
                tenderId={this.state.displayTenderDetailsId}
              />
            </Route>
            <Route exact path="/supplier/myBidDetails">
              <SupplierMyBidDetails
                {...this.props}
                tenderId={this.state.displayTenderDetailsId}
              />
            </Route>
            <Route exact path="/supplier">
              <SupplierDashboardMainContent
                user={this.state.supplier}
                tenderClicked={this.displayTenderDetailsID}
              />
            </Route>
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
