import React from "react";
import Joi from "joi-browser";
import Form from "./form/form";
class EditProfile extends Form {
  state = {
    email: "",
    formData: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      companyName: "",
      entityRegistrationNo: "",
      vatRegistration: "",
      vatNumber: "",
      tradingAs: "",
      website: "",
      physicalAddress: "",
      postalAddress: "",
      contactPerson: "",
      contactNo: "",
      bankName: "",
      accountNo: "",
      accountType: "",
      branchCode: "",
    },
  };

  constructor(props) {
    super(props);
    let { formData } = this.state;
    const { user } = this.props;
    this.state.email = user.email;
    formData.firstName = user.details.firstName;
    formData.lastName = user.details.firstName;
    formData.contactNumber = user.details.contactNumber;
    formData.companyName = user.details.companyName;
    formData.entityRegistrationNo = user.details.entityRegistrationNo;
    formData.vatRegistration = user.details.vatRegistration;
    formData.vatNumber = user.details.vatNumber;
    formData.tradingAs = user.details.tradingAs;
    formData.website = user.details.website;
    formData.physicalAddress = user.details.physicalAddress;
    formData.postalAddress = user.details.postalAddress;
    formData.contactPerson = user.details.contactPerson;
    formData.contactNo = user.details.contactNo;
    formData.bankName = user.bankDetails.bankName;
    formData.accountNo = user.bankDetails.accountNo;
    formData.accountType = user.bankDetails.accountType;
    formData.branchCode = user.bankDetails.branchCode;
  }

  schema = {
    firstName: Joi.string().required().min(5),
    lastName: Joi.string().required().min(5),
    idNumber: Joi.string().required().min(5),
    contactNumber: Joi.number().min(5).required(),
    companyName: Joi.string().required().min(5),
    entityRegistrationNo: Joi.string().required().min(5),
    vatRegistration: Joi.string().required(),
    vatNumber: Joi.string().required().min(5),
    tradingAs: Joi.string().required().min(5),
    website: Joi.string().required().min(5),
    physicalAddress: Joi.string().required().min(5),
    postalAddress: Joi.string().required().min(5),
    contactPerson: Joi.string().required().min(5),
    contactNo: Joi.number().required().min(5),
    bankName: Joi.string().required(),
    accountNo: Joi.string().required(),
    accountType: Joi.string().required(),
    branchCode: Joi.string().required(),
  };

  render() {
    const { formData: user, email } = this.state;
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
                          <label>First Name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={user.firstName}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={user.lastName}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Id</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact No</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={user.contactNo}
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
                          <label>Company Name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={user.companyName}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Registration No</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={user.entityRegistrationNo}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>VAT Registration</label>
                        <select className="form-control select2-no-search ">
                          <option
                            selected={user.vatRegistration === 1 ? true : false}
                          >
                            Option 1
                          </option>
                          <option
                            selected={user.vatRegistration === 2 ? true : false}
                          >
                            Option 2
                          </option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>VAT Number</label>
                          <input
                            className="form-control"
                            placeholder={user.vatNumber}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Trading as</label>
                          <input
                            className="form-control"
                            placeholder={user.tradingAs}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Website</label>
                          <input
                            className="form-control"
                            placeholder={user.website}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Physical Address</label>
                          <input
                            className="form-control"
                            placeholder={user.physicalAddress}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Postal Address</label>
                          <input
                            className="form-control"
                            placeholder={user.postalAddress}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact Person</label>
                          <input
                            className="form-control"
                            placeholder={user.contactPerson}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact No</label>
                          <input
                            className="form-control"
                            placeholder={user.contactNo}
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
                          <label>Bank Name</label>
                          <input
                            className="form-control"
                            placeholder={user.bankName}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Account No.</label>
                          <input
                            className="form-control"
                            placeholder={user.accountNo}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Account Type</label>
                          <input
                            className="form-control"
                            placeholder={user.accountType}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Branch Code</label>
                          <input
                            className="form-control"
                            placeholder={user.branchCode}
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
