import React, { Component } from "react";
import Label from "../microComponents/profileLabels";
class MyProfile extends Component {
  state = {};
  render() {
    const { user } = this.props;
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
                        <h2 className="mb-0 tx-22 mb-1 mt-1">
                          {user.details.tenders.length}
                        </h2>
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
                            <Label
                              name="First Name"
                              value={user.details.firstName}
                            />
                            <Label
                              name="Last Name"
                              value={user.details.lastName}
                            />
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <Label name="Email Id" value={user.email} />
                            <Label
                              name="Contanct No"
                              value={user.details.contactNo}
                            />
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
                            <Label
                              name="Company Name"
                              value={user.details.companyName}
                            />
                            <Label
                              name="Registration No"
                              value={user.details.entityRegistrationNo}
                            />
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <Label
                              name="VAT Registration"
                              value={
                                user.details.vatRegistration === 1
                                  ? "option1"
                                  : "option2"
                              }
                            />
                            <Label
                              name="VAT Number"
                              value={user.details.vatNumber}
                            />
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <Label
                              name="Trading As"
                              value={user.details.tradingAs}
                            />
                            <Label
                              name="Website"
                              value={<a href="">{user.details.website}</a>}
                            />
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-body">
                            <Label
                              name="Physical Address"
                              value={user.details.physicalAddress}
                            />
                            <Label
                              name="Postal Address"
                              value={user.details.postalAddress}
                            />
                          </div>
                        </div>
                        <div className="media mb-0">
                          <div className="media-body">
                            <Label
                              name="Contact Person"
                              value={user.details.contactPerson}
                            />
                            <Label
                              name="Contact Number"
                              value={user.details.contactNo}
                            />
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
