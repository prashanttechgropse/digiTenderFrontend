import React, { Component } from "react";
class CustomerTransactionList extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Transaction List
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
                    Your Transaction List
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
                              <th>Sr No</th>
                              <th>Tender I'D</th>
                              <th>Transaction Date</th>
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
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/tender-detail">
                                  #T686868
                                </a>
                              </td>
                              <td>20-06-2020</td>
                              <td>Mo Dansih</td>
                              <td>176 STF Road Hamiltom</td>
                              <td>1200.00 USD</td>
                              <td>
                                <span className="badge badge-success f-14">
                                  Paid to Admin
                                </span>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0002</td>
                              <td>
                                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/tender-detail">
                                  #T686863
                                </a>
                              </td>
                              <td>23-05-2020</td>
                              <td>Mo Dansih</td>
                              <td>176 STF Road Hamiltom</td>
                              <td>1500.00 USD</td>
                              <td>
                                <span className="badge badge-danger f-14">
                                  Not Paid
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

export default CustomerTransactionList;
