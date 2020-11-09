import React, { Component } from "react";
import httpService from "../../services/httpService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
class CommissionDetails extends Component {
  state = { paymentDetails: "" };

  componentDidMount = async () => {
    const { data } = await httpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/commissionDetails/${this.props.match.params.paymentId}`
    );
    this.setState({ paymentDetails: data.paymentDetails });
  };

  commissionPaid = async () => {
    let previousPaymentDetails = { ...this.state.paymentDetails };
    try {
      const {
        data,
      } = await httpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/admin/commissionPaid/${this.props.match.params.paymentId}`,
        { commissionPaid: true }
      );
      if (data) {
        const paymentDetails = { ...this.state.paymentDetails };
        paymentDetails.commissionPaid = true;
        this.setState({ paymentDetails });
        toast.success(data.message);
      }
    } catch (Error) {
      toast.error(Error.message);
      this.setState({ paymentDetails: previousPaymentDetails });
    }
  };

  renderCommissionReceivedButton = () => {
    if (this.state.paymentDetails.commissionPaid) return null;
    return (
      <div className="pr-1 mb-3 mb-xl-0">
        <button
          href="#publishmodalCommission"
          data-target="#publishmodalCommission"
          data-toggle="modal"
          className="btn btn-success btn-block"
        >
          <i className="fa fa-check"></i>Commission Received
        </button>
        <div
          className="modal show"
          id="publishmodalCommission"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content tx-size-sm">
              <div className="modal-body tx-center pd-y-20 pd-x-20 pl-4 pr-4">
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <i className="fa fa-check-circle tx-100 tx-success lh-1 mg-t-20 d-inline-block"></i>
                <h4 className="tx-success tx-semibold mg-b-20 mb-2">
                  Confirmation..!!
                </h4>
                <p>are you sure ?</p>
                <div className="text-center mt-4 mb-4">
                  <Link
                    to="#"
                    className="btn btn-primary mr-3"
                    onClick={this.commissionPaid}
                    data-dismiss="modal"
                  >
                    Yes
                  </Link>
                  <Link to="#" className="btn btn-primary" data-dismiss="modal">
                    No
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { paymentDetails } = this.state;
    if (paymentDetails === "") return null;
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Commission Detail
              </span>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content">
            {this.renderCommissionReceivedButton()}
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Commission Detail
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text industry.
                </p>
              </div>
              <div className="card-body">
                <div className="main-contact-info-body p-4 ps">
                  <div className="media-list pb-0">
                    <div className="media">
                      <div className="media-body">
                        <div>
                          <label> Name</label>
                          <span className="tx-medium">
                            {paymentDetails.customer.firstName}
                          </span>
                        </div>
                        <div>
                          <label>Tender Reference Number</label>
                          <span className="tx-medium">
                            {paymentDetails.tender.tenderRefNo}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <div>
                          <label> Delivery Date</label>
                          <span className="tx-medium">
                            {new Date(
                              paymentDetails.tender.deliveryDate
                            ).toDateString()}
                          </span>
                        </div>
                        <div>
                          <label>Total Tender Amount</label>
                          <span className="tx-medium">
                            {paymentDetails.tenderAmount}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <div>
                          <label> Commission</label>
                          <span className="tx-medium">
                            {paymentDetails.commission}
                          </span>
                        </div>
                        <div>
                          <label>Commission Status</label>
                          <span className="tx-medium">
                            {paymentDetails.commissionPaid
                              ? "Received"
                              : "Not Received"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommissionDetails;
