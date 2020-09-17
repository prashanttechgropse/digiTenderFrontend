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
import CustomerDetailsContainer from "./adminComponents/customerDetailsComponents/customerDetailsContainer";

import SupplierDetailsContainer from "./adminComponents/supplierDetailsContainer/supplierDetailsContainer";
import SupplierQuotationDetails from "./customerComponents/supllierQuotationDetails";
import TenderDetails from "./customerComponents/customerTenderManagementComponents/TenderDetails";

class AdminApp extends Component {
  state = {
    admin: "",
    customerList: "",
    supplierList: "",
    tenderList: "",
    displayCustomerDetails: "",
    displaySupplierDetails: "",
    displayTenderDetails: null,
    displayBidId: null,
  };

  componentDidMount = async () => {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/admin/adminData`
      );
      toast.success(data.message);
      if (data) {
        if (data.user.profileType.toLowerCase() === "admin") {
          const admin = data.user;
          this.setState({ admin: admin });

          const customerList = data.customerList;
          this.setState({ customerList });

          const supplierList = data.supplierList;
          this.setState({ supplierList });

          const tenderList = data.tenderList;
          this.setState({ tenderList });
        } else {
          this.props.history.push(`/${data.user.profileType}`);
        }
      }
    } catch (error) {
      toast.error(error.message);
      //window.location.reload();
    }
  };

  displayCustomerDetails = async (customerId) => {
    const displayCustomerDetails = this.state.customerList.find(
      (customer) => customer._id === customerId
    );
    this.setState({ displayCustomerDetails });
  };

  displaySupplierDetails = async (supplierId) => {
    const displaySupplierDetails = this.state.supplierList.find(
      (supplier) => supplier._id === supplierId
    );
    this.setState({ displaySupplierDetails });
  };

  displayTenderDetails = async (tenderId) => {
    const displayTenderDetails = this.state.tenderList.find(
      (tender) => tender._id == tenderId
    );
    this.setState({ displayTenderDetails });
    console.log(this.state.displayTenderDetails);
  };

  displayBidDetails = async (bidId) => {
    console.log("this is the bidId");
    console.log(bidId);
    this.setState({ displayBidId: bidId });
  };

  checkAdminPopulated = () => {
    if (this.state.admin !== "") {
      return (
        <div className="page active">
          <div
            className="app-sidebar__overlay active"
            data-toggle="sidebar"
          ></div>
          <AdminSideBar admin={this.state.admin} />
          <div className="main-content app-content">
            <MainContentHeaderBar user={this.state.admin} />
            <Route exact path="/admin/customerList">
              <AdminCustomerList
                customerList={this.state.customerList}
                customerClicked={(customerId) =>
                  this.displayCustomerDetails(customerId)
                }
              />
            </Route>
            <Route exact path="/admin/supplierList">
              <AdminSupplierList
                supplierList={this.state.supplierList}
                supplierClicked={(supplierId) =>
                  this.displaySupplierDetails(supplierId)
                }
              />
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
            <Route exact path="/admin/customerDetails">
              <CustomerDetailsContainer
                customer={this.state.displayCustomerDetails}
                tenderClicked={(tenderId) =>
                  this.displayTenderDetails(tenderId)
                }
                {...this.props}
              />
            </Route>
            <Route exact path="/admin/supplierDetails">
              <SupplierDetailsContainer
                supplier={this.state.displaySupplierDetails}
                tenderClicked={(tenderId) =>
                  this.displayTenderDetails(tenderId)
                }
                {...this.props}
              />
            </Route>
            <Route exact path="/admin/tenderDetails">
              <TenderDetails
                profileType="admin"
                tender={this.state.displayTenderDetails}
                {...this.props}
                bidClicked={(bidId) => this.displayBidDetails(bidId)}
              />
            </Route>
            <Route exact path="/admin/supplierQuotation">
              <SupplierQuotationDetails
                {...this.props}
                bidId={this.state.displayBidId}
              />
            </Route>
            <Route exact path="/admin">
              <AdminDashboardMainContent
                tenderList={this.state.tenderList}
                customerList={this.state.customerList}
                supplierList={this.state.supplierList}
                customerClicked={(customerId) =>
                  this.displayCustomerDetails(customerId)
                }
                supplierClicked={(supplierId) =>
                  this.displaySupplierDetails(supplierId)
                }
              />
            </Route>
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
