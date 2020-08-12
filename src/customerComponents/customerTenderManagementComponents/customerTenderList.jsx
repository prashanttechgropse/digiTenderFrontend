import React, { Component } from "react";
class CustomerTenderList extends Component {
  state = {};
  render() {
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
          <div className="d-flex my-xl-auto right-content">
            <div className="pr-1 mb-3 mb-xl-0">
              <a
                href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/create-tender"
                type="button"
                className="btn btn-primary "
              >
                <i className="fa fa-plus"></i> Create New Tender
              </a>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Your Tender List
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
                              <th>Sr no</th>
                              <th>Tender I'd</th>
                              <th>Tender Amount</th>
                              <th>Date of Creation</th>
                              <th>Date of Delivery</th>
                              <th>Tender Closing Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#0001</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>5000.00 USD</td>
                              <td>10-07-2020</td>
                              <td>20-09-2020</td>
                              <td>30-09-2020</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Awarded
                                </span>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0002</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>5000.00 USD</td>
                              <td>10-07-2020</td>
                              <td>20-09-2020</td>
                              <td>30-09-2020</td>
                              <td>
                                <span className="badge badge-success f-14">
                                  Paid
                                </span>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0003</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>5000.00 USD</td>
                              <td>10-07-2020</td>
                              <td>20-09-2020</td>
                              <td>30-09-2020</td>
                              <td>
                                <span className="badge badge-warning f-14">
                                  In Process
                                </span>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0004</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>5000.00 USD</td>
                              <td>10-07-2020</td>
                              <td>20-09-2020</td>
                              <td>30-09-2020</td>
                              <td>
                                <span className="badge badge-danger f-14">
                                  Cancelled
                                </span>
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

export default CustomerTenderList;
