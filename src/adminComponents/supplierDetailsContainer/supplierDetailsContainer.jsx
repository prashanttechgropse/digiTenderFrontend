import React, { Component } from "react";

import SupplierDetailsCards from "./supplierDetailsCards";
import SupplierDetails from "./supplierDetails";
import httpService from "../../services/httpService";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class SupplierDetailsContainer extends Component {
  state = {
    userCurrentStatus: null,
    amountEarnedBySupplier: "",
  };

  async componentDidMount() {
    if (!this.props.match.params.supplierId) return null;
    let data;
    try {
      data = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/admin/supplier/${this.props.match.params.supplierId}`
      );
      await this.setState({
        supplier: data.data.supplier,
        amountEarnedBySupplier: data.data.amountEarnedBySupplier,
      });
      await this.setState({
        userCurrentStatus: data.data.supplier.user.isApproved,
      });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

  handleUserStatus = async (e) => {
    let previousState = this.state.userCurrentStatus;
    try {
      let isApproved;
      if (e.currentTarget.name === "approve") {
        isApproved = true;
      } else isApproved = false;
      this.setState({ userCurrentStatus: isApproved });
      const { data } = await httpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/admin/userChangeStatus`,
        {
          userId: this.state.supplier.user._id,
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
  componentWillUnmount = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <Link to="/admin/supplierList">
                <h4 className="content-title mb-0 my-auto">Supplier List</h4>
              </Link>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Supplier Detail
              </span>
            </div>
          </div>
        </div>
        <SupplierDetailsCards
          supplier={this.state.supplier}
          amountEarnedBySupplier={this.state.amountEarnedBySupplier}
        />
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Status :</h4>
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
                <i className="fa fa-times"></i> Block
              </button>
            </div>
          </div>
        </div>
        <SupplierDetails supplier={this.state.supplier} {...this.props} />
      </div>
    );
  }
}

export default SupplierDetailsContainer;
