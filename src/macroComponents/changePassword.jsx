import React, { Component } from "react";
class ChangePassword extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Account</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Change Password
              </span>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link text-center">
                    Change Your Password
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2 text-center">
                  Lorem Ipsum is simply dummy typesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6 offset-3">
                        <div className="form-group">
                          <label>Old Password</label>{" "}
                          <input
                            className="form-control"
                            type="password"
                            placeholder="*******"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 offset-3">
                        <div className="form-group">
                          <label>New Password</label>{" "}
                          <input
                            className="form-control"
                            type="password"
                            placeholder="*******"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 offset-3">
                        <div className="form-group">
                          <label>Confirm New Password</label>{" "}
                          <input
                            className="form-control"
                            type="password"
                            placeholder="*******"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 offset-3">
                        <button className="btn btn-primary-gradient btn-block">
                          Change Password
                        </button>
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

export default ChangePassword;
