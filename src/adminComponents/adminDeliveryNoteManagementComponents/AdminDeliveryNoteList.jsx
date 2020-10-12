import React, { Component } from "react";
class AdminDeliveryNoteList extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Delivery Note List
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
                    Delivery Note List
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
                              <th>DN Number</th>
                              <th>Tender Id</th>
                              <th>Customer Name</th>
                              <th>Supplier Name</th>
                              <th>Tender Name</th>
                              <th>Delivery Address</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>DN16276</td>
                              <td>#T6276</td>
                              <td>Mo Danish</td>
                              <td>Imran Khan</td>
                              <td>Mobile Phones</td>
                              <td>101 Mall Noida India</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Accepted
                                </span>
                              </td>
                              <td>
                                <a
                                  href="/admin/delivery-note-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>DN16276</td>
                              <td>#T6276</td>
                              <td>Mo Danish</td>
                              <td>Imran Khan</td>
                              <td>Mobile Phones</td>
                              <td>101 Mall Noida India</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Accepted
                                </span>
                              </td>
                              <td>
                                <a
                                  href="/admin/delivery-note-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>DN16276</td>
                              <td>#T6276</td>
                              <td>Mo Danish</td>
                              <td>Imran Khan</td>
                              <td>Mobile Phones</td>
                              <td>101 Mall Noida India</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Accepted
                                </span>
                              </td>
                              <td>
                                <a
                                  href="/admin/delivery-note-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>DN16276</td>
                              <td>#T6276</td>
                              <td>Mo Danish</td>
                              <td>Imran Khan</td>
                              <td>Mobile Phones</td>
                              <td>101 Mall Noida India</td>
                              <td>
                                <span className="badge badge-danger f-14">
                                  Rejected
                                </span>
                              </td>
                              <td>
                                <a
                                  href="/admin/delivery-note-detail"
                                  className="detail-icons"
                                >
                                  <i className="fa fa-eye"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>DN16276</td>
                              <td>#T6276</td>
                              <td>Mo Danish</td>
                              <td>Imran Khan</td>
                              <td>Mobile Phones</td>
                              <td>101 Mall Noida India</td>
                              <td>
                                <span className="badge badge-primary f-14">
                                  Accepted
                                </span>
                              </td>
                              <td>
                                <a
                                  href="/admin/delivery-note-detail"
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

export default AdminDeliveryNoteList;
