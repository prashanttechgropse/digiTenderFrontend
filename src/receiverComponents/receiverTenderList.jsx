import React, { Component } from "react";
import TenderListDisplayCard from "../microComponents/customerTenderListDisplay";
import httpService from "../services/httpService";
import { toast } from "react-toastify";
import config from "../config.json";
class ReceiverTenderList extends Component {
  state = {
    tenderList: null,
  };

  async componentDidMount() {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/receiver/tenderList`
      );
      const { tenderList } = data;
      await this.setState({ tenderList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

  render() {
    const { tenderList } = this.state;
    if (tenderList === null) return null;
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Tender List
              </span>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <TenderListDisplayCard
              tenderList={tenderList}
              profileType="receiver"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReceiverTenderList;
