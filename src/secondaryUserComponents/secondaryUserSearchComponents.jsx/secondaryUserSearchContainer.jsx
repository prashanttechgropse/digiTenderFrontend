import React, { Component } from "react";
import SecondaryUserTenderListDisplayCard from "./secondaryUserTenderListDisplayCard";
import SecondaryUserDeliveryNoteDisplayCard from "./secondaryUserDeliveryNoteDisplayCard";
import httpService from "../../services/httpService";
import { toast } from "react-toastify";
class SecondaryUserSearchContainer extends Component {
  state = {
    tenderList: [],
    deliveryNoteList: [],
    profileType: "",
  };

  componentDidMount = async () => {
    await this.fetchtenderList();
    await this.fetchDeliveryNoteList();
  };

  fetchtenderList = async () => {
    try {
      if (this.props.match.path.includes("/receiver")) {
        const { data } = await httpService.get(
          `${process.env.REACT_APP_APIENDPOINT}/receiver/tenderList/${this.props.match.params.search}`
        );
        const { tenderList } = data;
        await this.setState({ tenderList });
        await this.setState({ profileType: "receiver" });
      }
      if (this.props.match.path.includes("/employee")) {
        const { data } = await httpService.get(
          `${process.env.REACT_APP_APIENDPOINT}/employee/tenderList/${this.props.match.params.search}`
        );
        const { tenderList } = data;
        await this.setState({ tenderList });
        await this.setState({ profileType: "employee" });
      }
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  fetchDeliveryNoteList = async () => {
    try {
      let res;
      if (this.props.match.path.includes("/receiver")) {
        this.setState({ profileType: "receiver" });
        res = await httpService.get(
          `${process.env.REACT_APP_APIENDPOINT}/receiver/deliveryNoteTenderList/${this.props.match.params.search}`
        );
      }
      if (this.props.match.path.includes("/employee")) {
        this.setState({ profileType: "employee" });
        res = await httpService.get(
          `${process.env.REACT_APP_APIENDPOINT}/employee/deliveryNoteTenderList/${this.props.match.params.search}`
        );
      }
      const { tenderList: deliveryNoteList } = res.data;
      await this.setState({ deliveryNoteList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.match.params.search !== prevProps.match.params.search) {
      await this.fetchtenderList();
      await this.fetchDeliveryNoteList();
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
          <SecondaryUserTenderListDisplayCard
            tenderList={this.state.tenderList}
            profileType={this.state.profileType}
          />
        ) : (
          ""
        )}
        {this.state.deliveryNoteList.length !== 0 ? (
          <SecondaryUserDeliveryNoteDisplayCard
            tenderList={this.state.deliveryNoteList}
            profileType={this.state.profileType}
          />
        ) : (
          ""
        )}

        {this.state.tenderList.length === 0 ? (
          <h1 className="no-data-found">No Data Found</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SecondaryUserSearchContainer;
