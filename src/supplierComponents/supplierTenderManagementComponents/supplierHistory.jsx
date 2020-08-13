import React, { Component } from "react";
class SupplierHistory extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Tenders List
              </span>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    RECENT TENDERS POSTED BY THE CUSTOMER
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="table text-md-nowrap">
                          <thead>
                            <tr role="row">
                              <th>Sr no</th>
                              <th>Tender I'd</th>
                              <th>Closing Date</th>
                              <th>Customer Name</th>
                              <th>Location</th>
                              <th>Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#0001</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/supplier/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>10-07-2020</td>
                              <td>Alex Smith</td>
                              <td>H/123, Green Park</td>
                              <td>5000.00 USD</td>
                              <td>
                                <span className="badge badge-success f-14">
                                  Completed
                                </span>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0002</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/supplier/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>10-07-2020</td>
                              <td>Alex Smith</td>
                              <td>H/123, Green Park</td>
                              <td>5000.00 USD</td>
                              <td>
                                <span className="badge badge-success f-14">
                                  Completed
                                </span>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0003</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/supplier/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>10-07-2020</td>
                              <td>Alex Smith</td>
                              <td>H/123, Green Park</td>
                              <td>5000.00 USD</td>
                              <td>
                                <span className="badge badge-success f-14">
                                  Completed
                                </span>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0004</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/supplier/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>10-07-2020</td>
                              <td>Alex Smith</td>
                              <td>H/123, Green Park</td>
                              <td>5000.00 USD</td>
                              <td>
                                <span className="badge badge-success f-14">
                                  Completed
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

export default SupplierHistory;
