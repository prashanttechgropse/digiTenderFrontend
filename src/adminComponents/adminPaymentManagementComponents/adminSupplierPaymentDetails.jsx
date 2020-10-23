import React, { Component } from "react";
import httpService from "../../services/httpService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
class SupplierPaymentDetails extends Component {
  state = { paymentDetails: "" };

  componentDidMount = async () => {
    const { data } = await httpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/supplierPaymentDetails/${this.props.match.params.paymentId}`
    );
    this.setState({ paymentDetails: data.paymentDetails });
  };

  handlePaidByAdmin = async () => {
    let previousPaymentDetails = { ...this.state.paymentDetails };
    try {
      const {
        data,
      } = await httpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/admin/paymentToSupplier/${this.props.match.params.paymentId}`,
        { paidByAdmin: true }
      );
      if (data) {
        const paymentDetails = { ...this.state.paymentDetails };
        paymentDetails.paidByAdmin = true;
        this.setState({ paymentDetails });
        toast.success(data.message);
        window.location.reload();
      }
    } catch (Error) {
      toast.error(Error.message);
      this.setState({ paymentDetails: previousPaymentDetails });
    }
  };

  renderPaymentDoneToSupplierButton = () => {
    if (this.state.paymentDetails.paidByAdmin) return null;
    return (
      <div className="pr-1 mb-3 mb-xl-0">
        <button
          href="#publishmodalPayment"
          data-target="#publishmodalPayment"
          data-toggle="modal"
          className="btn btn-success btn-block"
        >
          <i className="fa fa-check"></i> Payment Done To Supplier
        </button>
        <div className="modal show" id="publishmodalPayment" aria-modal="true">
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
                    onClick={this.handlePaidByAdmin}
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
                / Supplier Payment Detail
              </span>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content">
            {this.renderPaymentDoneToSupplierButton()}
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Supplier Payment Detail
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
                            {paymentDetails.supplier.firstName}
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
                            {paymentDetails.tender.deliveryDate
                              .toString()
                              .substring(0, 10)}
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
                          <label>Tender Status</label>
                          <span className="tx-medium">
                            {paymentDetails.tender.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <div>
                          <label>Payment Made To Supplier</label>
                          <span className="tx-medium">
                            {paymentDetails.paidByAdmin ? "Paid" : "Not Paid"}
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

export default SupplierPaymentDetails;
