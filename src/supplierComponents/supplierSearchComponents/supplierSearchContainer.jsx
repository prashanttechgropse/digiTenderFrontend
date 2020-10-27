import React, { Component } from "react";

import { toast } from "react-toastify";
import httpService from "../../services/httpService";
import SupplierTenderListDisplayCard from "./supplierTenderListDisplayCard";
import SupplierEmployeeListDisplayCard from "./supplierEmployeeListDisplayCard";
import SupplierTenderHistoryDisplayCard from "./supplierTenderHistoryDisplayCard";
import SupplierTransactionListDisplayCard from "./supplierTenderTransactionList";
class SupplierSearchContainer extends Component {
  state = {
    tenderList: [],
    employeeList: [],
    tenderHistoryList: [],
    tenderTransactionList: [],
  };

  componentDidMount = async () => {
    await this.fetchTenderList();
    await this.fetchHistoryList();
    await this.fetchEmployeeList();
    await this.fetchTransactionList();
  };

  fetchTenderList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/tenderList/${this.props.match.params.search}`
      );
      const { tenderList } = data;
      this.setState({ tenderList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };
  fetchHistoryList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/supplier/myTenderList/${this.props.match.params.search}`
      );
      const { tenderList: tenderHistoryList } = data;
      this.setState({ tenderHistoryList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };
  fetchTransactionList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/supplier/myTransactionList/${this.props.match.params.search}`
      );
      const { tenderList: tenderTransactionList } = data;
      this.setState({ tenderTransactionList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  fetchEmployeeList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/supplier/employeeList/${this.props.match.params.search}`
      );
      const { employeeList } = data;
      this.setState({ employeeList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.match.params.search !== prevProps.match.params.search) {
      await this.fetchTenderList();
      await this.fetchHistoryList();
      await this.fetchEmployeeList();
      await this.fetchTransactionList();
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
        {this.state.tenderList.length !== 0 ? (
          <SupplierTenderListDisplayCard tenderList={this.state.tenderList} />
        ) : (
          ""
        )}
        {this.state.employeeList.length !== 0 ? (
          <SupplierEmployeeListDisplayCard
            employeeList={this.state.employeeList}
          />
        ) : (
          ""
        )}
        {this.state.tenderHistoryList.length !== 0 ? (
          <SupplierTenderHistoryDisplayCard
            tenderList={this.state.tenderHistoryList}
          />
        ) : (
          ""
        )}
        {this.state.tenderTransactionList.length !== 0 ? (
          <SupplierTransactionListDisplayCard
            tenderList={this.state.tenderTransactionList}
          />
        ) : (
          ""
        )}
        {this.state.tenderList.length === 0 &&
        this.state.employeeList.length === 0 &&
        this.state.tenderHistoryList.length === 0 ? (
          <h1 className="no-data-found">No Data Found</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SupplierSearchContainer;
