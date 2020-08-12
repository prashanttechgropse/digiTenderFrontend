import React, { Component } from "react";
class CustomerCreateTender extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Create Tender
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
                    Are You want to Create New Tender. Fill the Forms !
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and simply
                  dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Tender Closing Date</label>
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Tender Delivery Date</label>
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Tender Budget Amount</label>
                          <input
                            className="form-control"
                            placeholder="0000"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Tender Delivery Location</label>
                          <input
                            className="form-control"
                            placeholder="Location"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Select Category</label>
                        <select className="form-control select2-no-search ">
                          <option> Mobile </option>
                          <option> Laptop </option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Item Name</label>
                          <input
                            className="form-control"
                            placeholder="Enter Item name"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Add Quantity for Item</label>
                          <input
                            className="form-control"
                            placeholder="00"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Unit of Meassure</label>
                          <input
                            className="form-control"
                            placeholder="00"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 offset-9">
                        <button className="btn btn-warning-gradient btn-block">
                          Add More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Item List
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
                              <th>Catehory</th>
                              <th>Item Name</th>
                              <th>Quantity</th>
                              <th>Unit of Meassure</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row">
                              <td>#0001</td>
                              <td>Mobile Phone</td>
                              <td>iPhone 11 Pro </td>
                              <td>20 Unit</td>
                              <td>20</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0002</td>
                              <td>Mobile Phone</td>
                              <td>iPhone 11 Pro </td>
                              <td>20 Unit</td>
                              <td>20</td>
                              <td>
                                <a href="#" className="detail-icons">
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td>#0003</td>
                              <td>Mobile Phone</td>
                              <td>iPhone 11 Pro </td>
                              <td>20 Unit</td>
                              <td>20</td>
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
            <div className="card">
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Upload terms & conditions for the tender
                          </label>
                          <input
                            type="file"
                            className="dropify"
                            data-height="200"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <button
                          data-target="#publishmodal"
                          data-toggle="modal"
                          className="btn btn-primary-gradient btn-block"
                        >
                          Publish Tender
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-warning-gradient btn-block">
                          Save for Later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="publishmodal">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content tx-size-sm">
              <div className="modal-body tx-center pd-y-20 pd-x-20">
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <i className="fa fa-upload tx-100 tx-orange lh-1 mg-t-20 d-inline-block"></i>
                <h4 className="tx-orange tx-semibold mg-b-20">
                  Are you sure u want to publish?
                </h4>
                <p className="mg-b-20 mg-x-20">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <button
                  aria-label="Close"
                  className="btn ripple btn-success pd-x-25"
                  data-dismiss="modal"
                  type="button"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerCreateTender;
