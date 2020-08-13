import React, { Component } from "react";
class CustomerReceiverlist extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Receiver List
              </span>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content">
            <div className="pr-1 mb-3 mb-xl-0">
              <a
                onClick={() => this.props.onClick("createReceiver")}
                type="button"
                className="btn btn-primary "
              >
                <i className="fa fa-plus"></i> Create New Receiver
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
                    Your Receiver List
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
                              <th>Code No</th>
                              <th>Conatact Person</th>
                              <th>Conatact Number</th>
                              <th>Email</th>
                              <th>Postal Address</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#C0001</td>
                              <td>Mo Danish</td>
                              <td>+76 6767 5757</td>
                              <td>danish@gmail.com</td>
                              <td>176 STF Road Hamiltom</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#C0002</td>
                              <td>Mo Danish</td>
                              <td>+76 6767 5757</td>
                              <td>danish@gmail.com</td>
                              <td>176 STF Road Hamiltom</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#C0003</td>
                              <td>Mo Danish</td>
                              <td>+76 6767 5757</td>
                              <td>danish@gmail.com</td>
                              <td>176 STF Road Hamiltom</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#C0004</td>
                              <td>Mo Danish</td>
                              <td>+76 6767 5757</td>
                              <td>danish@gmail.com</td>
                              <td>176 STF Road Hamiltom</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#C0005</td>
                              <td>Mo Danish</td>
                              <td>+76 6767 5757</td>
                              <td>danish@gmail.com</td>
                              <td>176 STF Road Hamiltom</td>
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

export default CustomerReceiverlist;
