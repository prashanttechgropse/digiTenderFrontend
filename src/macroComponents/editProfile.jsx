import React from "react";
import Joi from "joi-browser";
import Form from "./form/form";
import * as registerService from "../services/registerServices";
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
    selectedFile1: null,
    selectedFile2: null,
    selectedFile3: null,
    errors: {},
  };

  constructor(props) {
    super(props);
    let { formData } = this.state;
    const { user } = this.props;
    this.state.email = user.email;
    formData.firstName = user.details.firstName;
    formData.lastName = user.details.lastName;
    formData.contactNumber = parseInt(user.details.contactNumber);
    formData.companyName = user.details.companyName;
    formData.entityRegistrationNo = user.details.entityRegistrationNo;
    formData.vatRegistration = user.details.vatRegistration;
    formData.vatNumber = user.details.vatNumber;
    formData.tradingAs = user.details.tradingAs;
    formData.website = user.details.website;
    formData.physicalAddress = user.details.physicalAddress;
    formData.postalAddress = user.details.postalAddress;
    formData.contactPerson = user.details.contactPerson;
    formData.contactNo = parseInt(user.details.contactNo);
    formData.bankName = user.bankDetails.bankName;
    formData.accountNo = user.bankDetails.accountNo;
    formData.accountType = user.bankDetails.accountType;
    formData.branchCode = user.bankDetails.branchCode;
  }

  schema = {
    firstName: Joi.string().required().min(2),
    lastName: Joi.string().required().min(2),
    contactNumber: Joi.number().min(100000).required(),
    companyName: Joi.string().required().min(2),
    entityRegistrationNo: Joi.string().required().min(5),
    vatRegistration: Joi.valid("yes", "no"),
    vatNumber: Joi.when("vatRegistration", {
      is: "yes",
      then: Joi.string().required().min(5),
      otherwise: Joi.string().allow("").optional(),
    }),
    tradingAs: Joi.string().required().min(2),
    website: Joi.string().allow("").optional(),
    physicalAddress: Joi.string().required().min(5),
    postalAddress: Joi.string().required().min(5),
    contactPerson: Joi.string().required().min(2),
    contactNo: Joi.number().min(100000).required(),
    bankName: Joi.string().required(),
    accountNo: Joi.string().required(),
    accountType: Joi.string().required(),
    branchCode: Joi.string().required(),
  };

  validateOnChange = (input) => {
    let obj = { [input.name]: input.value.trim() };
    let subSchema;
    if (
      `${[input.name]}` === "vatNumber" &&
      this.state.formData.vatRegistration === "no"
    ) {
      obj = {
        [input.name]: input.value,
      };
      subSchema = {
        [input.name]: Joi.string().allow("").optional(),
      };
    } else {
      subSchema = { [input.name]: this.schema[input.name] };
    }
    const { error } = Joi.validate(obj, subSchema);
    if (!error) return null;
    return error.details[0].message;
  };

  onFileChange1 = (event) => {
    // Update the state
    this.setState({ selectedFile1: event.target.files[0] });
    const errors = { ...this.state.errors };
    if (errors.selectedFile1) {
      delete errors.selectedFile1;
    }
    this.setState({ errors });
  };

  onFileChange2 = (event) => {
    // Update the state
    this.setState({ selectedFile2: event.target.files[0] });
    const errors = { ...this.state.errors };
    if (errors.selectedFile2) {
      delete errors.selectedFile2;
    }
    this.setState({ errors });
  };
  onFileChange3 = (event) => {
    // Update the state
    this.setState({ selectedFile3: event.target.files[0] });
  };

  doSubmit = async () => {
    const formData = new FormData();
    for (const item in this.state.formData) {
      formData.append(item, this.state.formData[item]);
    }

    if (this.state.selectedFile1 !== null) {
      formData.append(
        "profileDoc",
        this.state.selectedFile1,
        this.state.selectedFile1.name
      );
    }

    if (this.state.selectedFile2 !== null) {
      formData.append(
        "vatDoc",
        this.state.selectedFile2,
        this.state.selectedFile2.name
      );
    }

    if (this.state.selectedFile3 !== null) {
      formData.append(
        "bankDoc",
        this.state.selectedFile3,
        this.state.selectedFile3.name
      );
    }
    const { data, error } = await registerService.editProfileService(formData);
    if (data) {
      this.props.history.push("myProfile");
      window.location.reload();
    }
    if (error) {
      return;
    }
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
                    Personal Details
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput("firstName", "First Name")}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("lastName", "Last Name")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Id</label>
                          <input
                            className="form-control"
                            type="text"
                            value={email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("contactNumber", "Contact Number")}
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
                    Professional Details
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput("companyName", "Company Name")}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput(
                          "entityRegistrationNo",
                          "Registration No"
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderSelect(
                          "vatRegistration",
                          "Vat Registration",
                          [
                            { _id: "yes", name: "yes" },
                            { _id: "no", name: "no" },
                          ],
                          user.vatRegistration
                        )}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput(
                          "vatNumber",
                          "Vat Number",
                          "text",
                          this.state.formData.vatRegistration !== "yes"
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput("tradingAs", "Trading as")}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("website", "Website")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput(
                          "physicalAddress",
                          "Physical Address"
                        )}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("postalAddress", "Postal Address")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput("contactPerson", "Contact Person")}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("contactNo", "Contact No")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>{` Uploaded File `}</label>
                          <input
                            type="file"
                            className="dropify"
                            data-height="200"
                            onChange={this.onFileChange1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>{` VAT Document `}</label>
                          <input
                            type="file"
                            className="dropify"
                            data-height="200"
                            onChange={this.onFileChange2}
                            disabled={
                              this.state.formData.vatRegistration !== "yes"
                            }
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
                    Bank Details
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput("bankName", "Bank Name")}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("accountNo", "Account No.")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput("accountType", "Account Type")}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("branchCode", "Branch Code")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>{` Bank Document `}</label>
                          <input
                            type="file"
                            className="dropify"
                            data-height="200"
                            onChange={this.onFileChange3}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {this.renderButton(
                          "Update Profile",
                          this.handleSubmit,
                          "btn btn-main-primary btn-block",
                          () => {
                            return false;
                          }
                        )}
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
