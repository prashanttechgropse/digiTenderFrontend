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
                type="button"
                className="btn btn-primary "
                onClick={this.handleCancelTender}
                disabled={this.props.tender.status == "cancelled"}
              >
                <i className="fa fa-times"></i> Cancel Tender
              </button>
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
                      <h2 className="text-white mb-0">{tender._id}</h2>
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
