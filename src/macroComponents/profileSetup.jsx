import React from "react";
import Form from "./form/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import httpService from "../services/httpService";

import * as registerService from "../services/registerServices";
import { toast } from "react-toastify";

class ProfileSetup extends Form {
  state = {
    organisationTypes: "",
    formData: {
      profileType: "",
      organisationType: "",
      firstName: "",
      lastName: "",
      idNumber: "",
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
    },
    acceptTermsConditions: false,
    selectedFile1: null,
    selectedFile2: null,
    errors: {},
  };
  schema = {
    profileType: Joi.string().required(),
    organisationType: Joi.string().required(),
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
  };

  componentDidMount = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/organisationTypes`
      );
      let organisationTypes = await data.organisationType.map(
        (organisationType) => {
          return { id: organisationType, name: organisationType };
        }
      );
      await this.setState({ organisationTypes });
    } catch (error) {
      toast.error(error.message);
    }
  };

  toggleTermsConditions = async () => {
    let acceptTermsConditions = this.state.acceptTermsConditions;
    acceptTermsConditions = !acceptTermsConditions;
    await this.setState({ acceptTermsConditions });
    console.log(this.state.acceptTermsConditions);
  };

  validateOnSubmit = () => {
    const result = Joi.validate(this.state.formData, this.schema, {
      abortEarly: false,
    });
    if (
      !result.error &&
      this.state.selectedFile1 !== null &&
      this.state.acceptTermsConditions
    )
      return null;
    const errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
      return errors;
    }
    if (this.state.selectedFile1 === null) {
      const errors = {};
      errors.selectedFile1 = "upload file";
      return errors;
    }
    if (this.state.acceptTermsConditions === false) {
      const errors = {};
      errors.acceptTermsConditions = "terms and conditions not accepted";
      return errors;
    }
  };

  onFileChange1 = (event) => {
    // Update the state
    this.setState({ selectedFile1: event.target.files[0] });
  };
  onFileChange2 = (event) => {
    // Update the state
    this.setState({ selectedFile2: event.target.files[0] });
  };

  doSubmit = async () => {
    const formData = new FormData();
    for (const item in this.state.formData) {
      formData.append(item, this.state.formData[item]);
    }

    formData.append(
      "myFile1",
      this.state.selectedFile1,
      this.state.selectedFile1.name
    );
    if (this.state.selectedFile2 !== null) {
      formData.append(
        "myFile2",
        this.state.selectedFile2,
        this.state.selectedFile2.name
      );
    }

    const { data, error } = await registerService.setUpProfileService(formData);
    if (!data.bankDetailsStatus) {
      return await this.props.history.push(
        `/register/uploadBankDetails/${this.state.formData.profileType}/${this.state.formData.organisationType}`
      );
    } else {
      toast.success("registration process already completed");
      this.props.history.push(`/`);
    }
    if (error) {
      return;
    }
  };

  render() {
    if (this.state.organisationTypes === "") return null;
    return (
      <div class="page">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-md-12 col-lg-12 col-xl-12 bg-white">
              <div class="login d-flex align-items-center py-2 p-top-50">
                <div class="container p-0">
                  <div class="row">
                    <div class="col-md-12 col-lg-12 col-xl-12 mx-auto">
                      <div class="card-sigin">
                        <div class="mb-2 d-flex">
                          <Link to="#">
                            <img
                              src="/common/img/logo/logo.png"
                              class="sign-favicon"
                              alt="logo"
                            />
                          </Link>
                        </div>
                        <div class="card-sigin">
                          <div class="main-signup-header">
                            <h2>Profile Setup</h2>
                            <h5 class="font-weight-semibold mb-4">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text
                            </h5>
                            <form>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderSelect(
                                    "profileType",
                                    "Profile Type",
                                    [
                                      { _id: "customer", name: "customer" },
                                      { _id: "supplier", name: "supplier" },
                                    ]
                                  )}
                                </div>
                                <div class="col-md-6">
                                  {this.renderSelect(
                                    "organisationType",
                                    "Organisation Type",
                                    this.state.organisationTypes
                                  )}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderInput("firstName", "First Name")}
                                </div>
                                <div class="col-md-6">
                                  {this.renderInput("lastName", "Last Name")}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderInput("idNumber", "Id Number")}
                                </div>
                                <div class="col-md-6">
                                  {this.renderInput(
                                    "contactNumber",
                                    "Contact Number"
                                  )}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderInput(
                                    "companyName",
                                    "Company Name"
                                  )}
                                </div>
                                <div class="col-md-6">
                                  {this.renderInput(
                                    "entityRegistrationNo",
                                    "Entity Registration No"
                                  )}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderSelect(
                                    "vatRegistration",
                                    "Vat Registration",
                                    [
                                      { _id: 1, name: "option 1" },
                                      { _id: 2, name: "option 2" },
                                    ]
                                  )}
                                </div>
                                <div class="col-md-6">
                                  {this.renderInput("vatNumber", "Vat Number")}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderInput("tradingAs", "Trading As")}
                                </div>
                                <div class="col-md-6">
                                  {this.renderInput("website", "Website")}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderInput(
                                    "physicalAddress",
                                    "Physical Address"
                                  )}
                                </div>
                                <div class="col-md-6">
                                  {this.renderInput(
                                    "postalAddress",
                                    "Postal Address"
                                  )}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  {this.renderInput(
                                    "contactPerson",
                                    "Contact Person"
                                  )}
                                </div>
                                <div class="col-md-6">
                                  {this.renderInput("contactNo", "Contact No")}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label>File Upload</label>
                                    <input
                                      type="file"
                                      class="dropify"
                                      data-height="200"
                                      onChange={this.onFileChange1}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label>VAT Document (if applicable)</label>
                                    <input
                                      type="file"
                                      class="dropify"
                                      data-height="200"
                                      onChange={this.onFileChange2}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="parsley-checkbox" id="cbWrapper">
                                    <label class="ckbox">
                                      <input
                                        name="browser[]"
                                        type="checkbox"
                                        onClick={this.toggleTermsConditions}
                                      />
                                      <span>
                                        I Accept
                                        <Link to="#">Terms and Condition</Link>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  {this.renderButton(
                                    "Save & Next",
                                    this.handleSubmit
                                  )}
                                </div>
                              </div>
                            </form>
                            <div class="main-signin-footer mt-5">
                              <p class="text-center">
                                Already have an account?
                                <Link to="/login">Sign In</Link>
                              </p>
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

export default ProfileSetup;
