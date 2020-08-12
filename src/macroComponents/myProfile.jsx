import React, { Component } from "react";
class MyProfile extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Account</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / My Profile
              </span>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content">
            <div className="pr-1 mb-3 mb-xl-0">
              <a
                onClick={() => this.props.onClick("editProfile")}
                type="button"
                className="btn btn-primary "
              >
                <i className="fa fa-edit"></i> Edit Profile
              </a>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-lg-12">
            <div className="row row-sm">
              <div className="col-sm-12 col-xl-4 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="counter-status d-flex md-mb-0">
                      <div className="counter-icon bg-primary-transparent">
                        <i className="fa fa-address-book text-primary"></i>
                      </div>
                      <div className="ml-auto">
                        <h5 className="tx-13">No Of Tenders</h5>
                        <h2 className="mb-0 tx-22 mb-1 mt-1">20 Tenders</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xl-4 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="counter-status d-flex md-mb-0">
                      <div className="counter-icon bg-danger-transparent">
                        <i className="fa fa-user text-danger"></i>
                      </div>
                      <div className="ml-auto">
                        <h5 className="tx-13">No Of Receivers</h5>
                        <h2 className="mb-0 tx-22 mb-1 mt-1">10 Receivers</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xl-4 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="counter-status d-flex md-mb-0">
                      <div className="counter-icon bg-success-transparent">
                        <i className="fa fa-money text-success"></i>
                      </div>
                      <div className="ml-auto">
                        <h5 className="tx-13">Total Earning</h5>
                        <h2 className="mb-0 tx-22 mb-1 mt-1">$1,890.00</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="tabs-menu">
                  <ul className="nav nav-tabs profile navtab-custom panel-tabs">
                    <li className="active">
                      <a href="#home" data-toggle="tab" aria-expanded="true">
                        <span className="hidden-xs">Personal Detail</span>
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="#profile"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span className="hidden-xs">Professional Detail</span>
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="#settings"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span className="hidden-xs">Bank Detail</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content border-left border-bottom border-right border-top-0 p-4">
                  <div className="tab-pane active" id="home">
                    <div className="main-contact-info-body p-4 ps">
                      <div className="media-list pb-0">
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>First Name</label>{" "}
                              <span className="tx-medium">Al Hamid</span>
                            </div>
                            <div>
                              <label>Last Name</label>{" "}
                              <span className="tx-medium">Saif</span>
                            </div>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>Email Id</label>{" "}
                              <span className="tx-medium">hamid@gmail.com</span>
                            </div>
                            <div>
                              <label>Contact No</label>{" "}
                              <span className="tx-medium">+978 676768 678</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="profile">
                    <div className="main-contact-info-body p-4 ps">
                      <div className="media-list pb-0">
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>Company Name</label>{" "}
                              <span className="tx-medium">Hamid Pvt Ltd</span>
                            </div>
                            <div>
                              <label>Registration No</label>{" "}
                              <span className="tx-medium">686878787DF897</span>
                            </div>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>VAT Registration</label>{" "}
                              <span className="tx-medium">
                                Registration Value
                              </span>
                            </div>
                            <div>
                              <label>VAT Number</label>{" "}
                              <span className="tx-medium">VAT65767677</span>
                            </div>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>Trading As</label>{" "}
                              <span className="tx-medium">Trading Value</span>
                            </div>
                            <div>
                              <label>Website</label>{" "}
                              <span className="tx-medium">
                                <a href="">https://www.hamid.com</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>Physical Address</label>{" "}
                              <span className="tx-medium">
                                DR565 MAll Road Dubai
                              </span>
                            </div>
                            <div>
                              <label>Postal Address</label>{" "}
                              <span className="tx-medium">
                                676 Hamilton City Newyork
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="media mb-0">
                          <div className="media-body">
                            <div>
                              <label>Contact Person</label>{" "}
                              <span className="tx-medium">Nadeem Khan</span>
                            </div>
                            <div>
                              <label>Contact Number</label>{" "}
                              <span className="tx-medium">+7878 667 67777</span>
                            </div>
                          </div>
                        </div>
                        <div className="media mb-0">
                          <div className="media-body">
                            <div>
                              <label>Document uploaded by Suplier</label>{" "}
                              <span className="tx-medium">
                                <a href="">
                                  <i className="fa fa-file"></i> Download File
                                </a>
                              </span>
                            </div>
                            <div>
                              <label>VAT Document uploaded by Suplier</label>{" "}
                              <span className="tx-medium">
                                <a href="">
                                  <i className="fa fa-file"></i> Download File
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="settings">
                    <div className="main-contact-info-body p-4 ps">
                      <div className="media-list pb-0">
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>Bank Name</label>{" "}
                              <span className="tx-medium">ICICI Bank</span>
                            </div>
                            <div>
                              <label>Account No</label>{" "}
                              <span className="tx-medium">67676768686</span>
                            </div>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>Account Type</label>{" "}
                              <span className="tx-medium">Current Account</span>
                            </div>
                            <div>
                              <label>Branch Code</label>{" "}
                              <span className="tx-medium">ICICI87878</span>
                            </div>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <div>
                              <label>Upload Document</label>{" "}
                              <span className="tx-medium">
                                <a href="">
                                  <i className="fa fa-file"></i> Download File
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
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

export default MyProfile;
