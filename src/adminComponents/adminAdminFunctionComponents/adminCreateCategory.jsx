import React, { Component } from "react";
class AdminCreateCategory extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Create Category
              </span>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Create Profile
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy texttypesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Profile Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-primary-gradient btn-block">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Create Organization
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy texttypesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Organization Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-primary-gradient btn-block">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Profile List
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy industry.
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
                              <th>Sr.No</th>
                              <th>Profile Name</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#1001</td>
                              <td>Customer</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#1002</td>
                              <td>Supplier</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#1003</td>
                              <td>Receiver</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
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
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Organization List
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy industry.
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
                          id="example2"
                        >
                          <thead>
                            <tr role="row">
                              <th>Sr.No</th>
                              <th>Organization Name</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#1001</td>
                              <td>Individual</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#1001</td>
                              <td>Sole Trade</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#1001</td>
                              <td>Partnership</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
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

export default AdminCreateCategory;
