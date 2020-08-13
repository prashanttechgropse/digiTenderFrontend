import React, { Component } from "react";
class CustomerDashboardMainContent extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <div>
              <h2 className="main-content-title tx-24 mg-b-1 mg-b-lg-1">
                Hi, Al Hamid Saif !
              </h2>
              <p className="mg-b-0">Welcome Back to Digibids Platform.</p>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-primary-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">No Of Tenders</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        20 Tenders
                      </h4>
                      <p className="mb-0 tx-12 text-white op-7">
                        Compared to last month
                      </p>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      <i className="fa fa-arrow-circle-up text-white"></i>
                      <span className="text-white op-7"> +5</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline" className="pt-1">
                <canvas width="253" height="30"></canvas>
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-danger-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">Ongoing Tenders</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        12 Tenders
                      </h4>
                      <p className="mb-0 tx-12 text-white op-7">
                        Compared to last month
                      </p>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      <i className="fa fa-arrow-circle-up text-white"></i>
                      <span className="text-white op-7"> 20%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline2" className="pt-1">
                <canvas width="253" height="30"></canvas>
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-success-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">Complete Tenders</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        8 Tenders
                      </h4>
                      <p className="mb-0 tx-12 text-white op-7">
                        Compared to last month
                      </p>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      <i className="fa fa-arrow-circle-up text-white"></i>
                      <span className="text-white op-7"> 10%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline3" className="pt-1">
                <canvas width="253" height="30"></canvas>
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-warning-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">
                    Total Monthly Payment
                  </h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        $4,820.50
                      </h4>
                      <p className="mb-0 tx-12 text-white op-7">
                        Compared to last month
                      </p>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      <i className="fa fa-arrow-circle-down text-white"></i>
                      <span className="text-white op-7"> 24%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" className="pt-1">
                <canvas width="253" height="30"></canvas>
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
                    Recently Added Tenders
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

export default CustomerDashboardMainContent;
