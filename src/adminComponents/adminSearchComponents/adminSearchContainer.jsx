import React, { Component } from "react";
import AdminCustomerListDisplayCard from "./adminCustomerListDisplayCard";
import httpService from "../../services/httpService";
import { toast } from "react-toastify";
import AdminSupplierListDisplayCard from "./adminSupplierListDisplayCard";

class AdminSearchContainer extends Component {
  state = {
    customerList: [],
    supplierList: [],
  };

  componentDidMount = async () => {
    await this.fetchCustomerList();
    await this.fetchSupplierList();
  };

  fetchCustomerList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/admin/customers/${this.props.match.params.search}`
      );
      const customerList = data.customerList;
      await this.setState({ customerList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  fetchSupplierList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/admin/suppliers/${this.props.match.params.search}`
      );
      const supplierList = data.supplierList;
      await this.setState({ supplierList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.match.params.search !== prevProps.match.params.search) {
      await this.fetchCustomerList();
      await this.fetchSupplierList();
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Search Data</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">/ Result</span>
            </div>
          </div>
        </div>
        {this.state.customerList.length !== 0 ? (
          <AdminCustomerListDisplayCard
            customerList={this.state.customerList}
          />
        ) : (
          ""
        )}
        {this.state.supplierList.length !== 0 ? (
          <AdminSupplierListDisplayCard
            supplierList={this.state.supplierList}
          />
        ) : (
          ""
        )}
        {this.state.customerList.length === 0 ? (
          <h1 className="no-data-found">No Data Found</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AdminSearchContainer;
