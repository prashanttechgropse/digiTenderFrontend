import React, { Component } from "react";
class EditProfile extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Account</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Edit Profile
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
                    Personal Deatil
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>{" "}
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Al Hamid "
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>{" "}
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Saif"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Id</label>{" "}
                          <input
                            className="form-control"
                            type="text"
                            placeholder="hamid@gmail.com "
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact No</label>{" "}
                          <input
                            className="form-control"
                            type="text"
                            placeholder="+989 6767 7687"
                          />
                        </div>
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
                    Professional Deatil
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Company Name</label>{" "}
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Hamid Pvt Ltd"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Registration No</label>{" "}
                          <input
                            className="form-control"
                            type="text"
                            placeholder="7878686868889"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>VAT Registration</label>
                        <select className="form-control select2-no-search ">
                          <option> Option 1 </option>
                          <option> Option 2 </option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>VAT Number</label>{" "}
                          <input
                            className="form-control"
                            placeholder="687868788"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Trading as</label>{" "}
                          <input
                            className="form-control"
                            placeholder="Mobile Phone"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Website</label>{" "}
                          <input
                            className="form-control"
                            placeholder="https://www.hamod.com"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Physical Address</label>{" "}
                          <input
                            className="form-control"
                            placeholder="Mall Road 7878 Hamilton"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Postal Address</label>{" "}
                          <input
                            className="form-control"
                            placeholder="Mall Road 7878 Hamilton"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact Person</label>{" "}
                          <input
                            className="form-control"
                            placeholder="Mo Danish"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact No</label>{" "}
                          <input
                            className="form-control"
                            placeholder="+678 766 7676 77"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label> Uploaded File</label>
                          <input
                            type="file"
                            className="dropify"
                            data-height="200"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>VAT Document </label>
                          <input
                            type="file"
                            className="dropify"
                            data-height="200"
                          />
                        </div>
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
                    Bank Deatil
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Bank Name</label>{" "}
                          <input
                            className="form-control"
                            placeholder="ICICI Bank"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Account No.</label>{" "}
                          <input
                            className="form-control"
                            placeholder="5757576767"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Account Type</label>{" "}
                          <input
                            className="form-control"
                            placeholder="Current Account"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Branch Code</label>{" "}
                          <input
                            className="form-control"
                            placeholder="ICICI68687"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Bank Document</label>
                          <input
                            type="file"
                            className="dropify"
                            data-height="200"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a
                          href="#setupprofile"
                          className="btn btn-main-primary btn-block"
                          data-toggle="modal"
                        >
                          Update Profile
                        </a>
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

export default EditProfile;
