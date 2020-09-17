import React, { Component } from "react";
import CustomerDetailsCards from "./customerDetailsCards";
import CustomerDetails from "./customerDetails";
import httpService from "../../services/httpService";
import config from "../../config.json";
import { toast } from "react-toastify";

class CustomerDetailsContainer extends Component {
  state = {
    userCurrentStatus: null,
  };
  constructor(props) {
    super(props);
    this.state.userCurrentStatus = this.props.customer.user.isApproved;
  }

  handleUserStatus = async (e) => {
    let previousState = this.state.userCurrentStatus;
    try {
      let isApproved;
      if (e.currentTarget.name === "approve") {
        isApproved = true;
      } else isApproved = false;
      this.setState({ userCurrentStatus: isApproved });
      const { data, error } = await httpService.post(
        `${config.apiendpoint}/admin/userChangeStatus`,
        {
          userId: this.props.customer.user._id,
          status: isApproved,
        }
      );
      toast.success(data.message);
      if (!data.message) toast.success(data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
        this.setState({ userCurrentStatus: previousState });
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Customer Detail
              </span>
            </div>
          </div>
        </div>
        <CustomerDetailsCards customer={this.props.customer} />
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Supplier Status :</h4>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content">
            <div className="pr-1 mb-3 mb-xl-0">
              <button
                onClick={this.handleUserStatus}
                className="btn btn-primary "
                name="approve"
                disabled={this.state.userCurrentStatus}
              >
                <i className="fa fa-check"></i> Approve
              </button>
              <button
                onClick={this.handleUserStatus}
                className="btn btn-danger "
                name="block"
                disabled={!this.state.userCurrentStatus}
              >
                <i className="fa fa-times"></i> block
              </button>
            </div>
          </div>
        </div>
        <CustomerDetails
          customer={this.props.customer}
          tenderClicked={(tenderId) => this.props.tenderClicked(tenderId)}
        />
      </div>
    );
  }
}

export default CustomerDetailsContainer;
