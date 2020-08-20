import React, { Component } from "react";
class AdminHelpSupport extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Help & Support
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
                    Complain List
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
                              <th>Name</th>
                              <th>Email Id</th>
                              <th>Query</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#0001</td>
                              <td>Mo Danish</td>
                              <td>danish@gmail.com</td>
                              <td>Hi Admin Pls Help For Account </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/complain-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0002</td>
                              <td>Mo Danish</td>
                              <td>danish@gmail.com</td>
                              <td>Hi Admin Pls Help For Account </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/complain-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0003</td>
                              <td>Mo Danish</td>
                              <td>danish@gmail.com</td>
                              <td>Hi Admin Pls Help For Account </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/complain-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0004</td>
                              <td>Mo Danish</td>
                              <td>danish@gmail.com</td>
                              <td>Hi Admin Pls Help For Account </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/complain-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0005</td>
                              <td>Mo Danish</td>
                              <td>danish@gmail.com</td>
                              <td>Hi Admin Pls Help For Account </td>
                              <td>
                                <a
                                  href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/complain-detail"
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

export default AdminHelpSupport;
