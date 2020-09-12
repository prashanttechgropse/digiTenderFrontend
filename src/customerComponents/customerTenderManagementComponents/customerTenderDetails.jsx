import React, { Component } from "react";
import * as tenderService from "../../services/tenderService";

class CustomerTenderDetails extends Component {
  state = {};
  displayTenderItems = () => {
    let srNo = 0;
    return this.props.tender.itemList.map((item) => {
      srNo++;
      return (
        <tr role="row">
          <td>{`#Q000${srNo}`}</td>
          <td>{item.category}</td>
          <td>{item.name}</td>
          <td>
            <span className="badge badge-primary f-14">{item.quantity}</span>
          </td>
          <td>
            <span className="badge badge-success f-14">
              {item.unitOfMeasure}
            </span>
          </td>
        </tr>
      );
    });
  };

  handleCancelTender = async () => {
    await tenderService.cancelTender(this.props.tender._id);
    this.props.history.push("/customer");
    window.location.reload();
  };

  renderTenderDetails = () => {
    const { tender } = this.props;
    return (
      <React.Fragment>
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Tender Detail
              </span>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content">
            <div className="pr-1 mb-3 mb-xl-0">
              <button
                disabled={this.props.tender.status == "cancelled"}
                href="#publishmodal"
                data-target="#publishmodal"
                data-toggle="modal"
                class="btn btn-main-primary btn-block"
              >
                <i class="fa fa-times"></i> Cancel Tender
              </button>
              <div class="modal show" id="publishmodal" aria-modal="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content tx-size-sm">
                    <div class="modal-body tx-center pd-y-20 pd-x-20 pl-4 pr-4">
                      <button
                        aria-label="Close"
                        class="close"
                        data-dismiss="modal"
                        type="button"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <i class="fa fa-times-circle tx-100 tx-danger lh-1 mg-t-20 d-inline-block"></i>
                      <h4 class="tx-danger tx-semibold mg-b-20 mb-2">
                        Confirmation..!!
                      </h4>
                      <p>Do you really want to cancel this Tender ?</p>
                      <div class="text-center mt-4 mb-4">
                        <a
                          class="btn btn-primary mr-3"
                          onClick={this.handleCancelTender}
                        >
                          Yes
                        </a>
                        <a class="btn btn-primary" data-dismiss="modal">
                          No
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-primary-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-list tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Tender Ref No</span>
                      <h2 className="text-white mb-0">
                        {tender._id.toString().substring(18, 24)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-danger-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-calendar tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Closing Date</span>
                      <h2 className="text-white mb-0">{tender.closingDate}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-warning-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-map-marker tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Delivery Location</span>
                      <h2 className="text-white mb-0">
                        {tender.deliveryLocation}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Tender Products List
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="example1_wrapper"
                    className="dataTables_wrapper dt-bootstrap4"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table text-md-nowrap dataTable"
                          id="example1"
                        >
                          <thead>
                            <tr role="row">
                              <th>Sr. No</th>
                              <th>Category</th>
                              <th>Item / Description</th>
                              <th>Qty</th>
                              <th>Unit of Meassure</th>
                            </tr>
                          </thead>
                          <tbody>{this.displayTenderItems()}</tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    if (this.props.tender === null) {
      this.props.history.push("/");
      return null;
    }
    return (
      <div className="container-fluid">
        {this.props.tender === null
          ? this.propshistory.push("/customer")
          : this.renderTenderDetails()}
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Suppliers List For Tender
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="example1_wrapper"
                    className="dataTables_wrapper dt-bootstrap4"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table text-md-nowrap dataTable"
                          id="example1"
                        >
                          <thead>
                            <tr role="row">
                              <th>Ref No</th>
                              <th>Supplier Code</th>
                              <th>Supplier Name</th>
                              <th>Amount</th>
                              <th>Supplier Rating</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#S0001</td>
                              <td>
                                <a href="#">#T686868</a>
                              </td>
                              <td>Mo Danish</td>
                              <td>20000.00 USD</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  10 Rating
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/suppliers-quotation"
                                  className="detail-icons"
                                >
                                  View Detail
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#S0002</td>
                              <td>
                                <a href="#">#T686823</a>
                              </td>
                              <td>Al Habib Reheman</td>
                              <td>20000.00 USD</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  09 Rating
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/suppliers-quotation"
                                  className="detail-icons"
                                >
                                  View Detail
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#S0003</td>
                              <td>
                                <a href="#">#T686821</a>
                              </td>
                              <td>Mo Imran</td>
                              <td>20000.00 USD</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  07 Rating
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/suppliers-quotation"
                                  className="detail-icons"
                                >
                                  View Detail
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#S0004</td>
                              <td>
                                <a href="#">#T686843</a>
                              </td>
                              <td>Jakir Khan</td>
                              <td>20000.00 USD</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  05 Rating
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/suppliers-quotation"
                                  className="detail-icons"
                                >
                                  View Detail
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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

export default CustomerTenderDetails;
