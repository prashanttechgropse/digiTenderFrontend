import React, { Component } from "react";
class AdminDashboardMainContent extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <div>
              <h2 className="main-content-title tx-24 mg-b-1 mg-b-lg-1">
                Hi, Admin !
              </h2>
              <p className="mg-b-0">Welcome Back to Digibids Platform.</p>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-purple-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">Total No Of Tenders</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        576 Tenders
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-file-o text-white f-24"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" className="pt-1">
                <canvas width="253" height="30"></canvas>
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-danger-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">Total Customer</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        150 Customer
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-users text-white f-24"></i>{" "}
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
            <div className="card overflow-hidden sales-card bg-primary-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">Total Suppliers</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        20 Suppliers
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-user text-white f-24"></i>{" "}
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
            <div className="card overflow-hidden sales-card bg-secondary-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">Total Delivey Notes</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        17 Notes
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-file text-white f-24"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" className="pt-1">
                <canvas width="253" height="30"></canvas>
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-success-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">Total Receiver</h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        8 Receiver
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-user text-white  f-24"></i>{" "}
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
                    Total Commission Earned
                  </h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        $4,820.50
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-money text-white f-24"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" className="pt-1">
                <canvas width="253" height="30"></canvas>
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-pink-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">
                    Amount Paid To Supplier
                  </h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        $1,820.50
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-money text-white f-24"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" className="pt-1">
                <canvas width="253" height="30"></canvas>
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div className="card overflow-hidden sales-card bg-teal-gradient">
              <div className="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div className="">
                  <h6 className="mb-3 tx-12 text-white">
                    Amount Collect From Customers
                  </h6>
                </div>
                <div className="pb-0 mt-0">
                  <div className="d-flex">
                    <div className="">
                      <h4 className="tx-20 font-weight-bold mb-1 text-white">
                        $7,820.50
                      </h4>
                    </div>
                    <span className="float-right my-auto ml-auto">
                      {" "}
                      <i className="fa fa-money text-white f-24"></i>{" "}
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
                    Recently Added Customers{" "}
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
                              <th>Sr No</th>
                              <th>Name</th>
                              <th>Reference No</th>
                              <th>Contact No</th>
                              <th>No Of Tenders</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#0001</td>
                              <td>Mo Danish</td>
                              <td>18818</td>
                              <td>+878 6767 6767</td>
                              <td>04 Tenders</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Active
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/customer-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0002</td>
                              <td>Imran Khan</td>
                              <td>18818</td>
                              <td>+878 6767 6767</td>
                              <td>04 Tenders</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Active
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/customer-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0003</td>
                              <td>Al Hamid Ansari</td>
                              <td>18818</td>
                              <td>+878 6767 6767</td>
                              <td>04 Tenders</td>
                              <td>
                                <span className="badge badge-danger f-14">
                                  Suspend
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/customer-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
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
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Recently Added Suppliers{" "}
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
                              <th>Sr No</th>
                              <th>Name</th>
                              <th>Reference No</th>
                              <th>Contact No</th>
                              <th>No Of Tenders</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#0001</td>
                              <td>Mo Danish</td>
                              <td>18818</td>
                              <td>+878 6767 6767</td>
                              <td>04 Tenders</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Active
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/supplier-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0002</td>
                              <td>Imran Khan</td>
                              <td>18818</td>
                              <td>+878 6767 6767</td>
                              <td>04 Tenders</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Active
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/supplier-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0003</td>
                              <td>Al Hamid Ansari</td>
                              <td>18818</td>
                              <td>+878 6767 6767</td>
                              <td>04 Tenders</td>
                              <td>
                                <span className="badge badge-danger f-14">
                                  Suspend
                                </span>
                              </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/supplier-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
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

export default AdminDashboardMainContent;
