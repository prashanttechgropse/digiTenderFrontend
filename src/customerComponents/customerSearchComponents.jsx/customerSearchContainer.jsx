import React, { Component } from "react";

import CustomerTenderListDisplayCard from "./customerTenderListDisplayCard";
import CustomerReceiverListDisplayCard from "./customerReceiverListDisplayCard";
import CustomeSaveForLaterDisplayCard from "./customerSaveLaterDisplayCard";
import CustomerTransactionListDisplayCard from "./customerTransactionListDisplayCard";
import { toast } from "react-toastify";
import httpService from "../../services/httpService";
class CustomerSearchContainer extends Component {
  state = {
    tenderList: [],
    transactionList: [],
    receiverList: [],
    savedTenderList: [],
  };

  componentDidMount = async () => {
    await this.fetchtenderList();
    await this.fetchSavedTenderList();
    await this.fetchTransactionList();
    await this.fetchReceiverList();
  };

  fetchSavedTenderList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/customer/savedTenderList/${this.props.match.params.search}`
      );
      const { tenderList: savedTenderList } = data;
      this.setState({ savedTenderList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  fetchtenderList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/customer/tenderList/${this.props.match.params.search}`
      );
      const { tenderList } = data;
      this.setState({ tenderList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  fetchTransactionList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/customer/transactionList/${this.props.match.params.search}`
      );
      const { tenderList: transactionList } = data;
      await this.setState({ transactionList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  fetchReceiverList = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/customer/receiverList/${this.props.match.params.search}`
      );
      const { receiversList: receiverList } = data;
      await this.setState({ receiverList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.match.params.search !== prevProps.match.params.search) {
      await this.fetchtenderList();
      await this.fetchSavedTenderList();
      await this.fetchTransactionList();
      await this.fetchReceiverList();
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
          <CustomerTenderListDisplayCard tenderList={this.state.tenderList} />
        ) : (
          ""
        )}
        {this.state.savedTenderList.length !== 0 ? (
          <CustomeSaveForLaterDisplayCard
            tenderList={this.state.savedTenderList}
          />
        ) : (
          ""
        )}
        {this.state.transactionList.length !== 0 ? (
          <CustomerTransactionListDisplayCard
            tenderList={this.state.transactionList}
          />
        ) : (
          ""
        )}
        {this.state.receiverList.length !== 0 ? (
          <CustomerReceiverListDisplayCard
            receiverList={this.state.receiverList}
          />
        ) : (
          ""
        )}
        {this.state.tenderList.length === 0 &&
        this.state.savedTenderList.length === 0 &&
        this.state.transactionList.length === 0 &&
        this.state.receiverList.length === 0 ? (
          <h1 className="no-data-found">No Data Found</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CustomerSearchContainer;
