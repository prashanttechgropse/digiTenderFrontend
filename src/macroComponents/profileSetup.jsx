import React, { Component } from "react";
import Form from "./form/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import http from "../services/httpService";

class ProfileSetup extends Form {
  state = {
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
      selectedFile: null,
      vatDocument: null,
    },
    errors: {},
  };
  schema = {
    profileType: Joi.string().required(),
    organisationType: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    idNumber: Joi.string().required(),
    contactNumber: Joi.string().required(),
    companyName: Joi.string().required(),
    entityRegistrationNo: Joi.string().required(),
    vatRegistration: Joi.string().required(),
    vatNumber: Joi.string().required(),
    tradingAs: Joi.string().required(),
    website: Joi.string().required(),
    physicalAddress: Joi.string().required(),
    postalAddress: Joi.string().required(),
    contactPerson: Joi.string().required(),
    contactNo: Joi.string().required(),
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    http.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
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
                          <a href="#">
                            <img
                              src="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/common/img/logo/logo.png"
                              class="sign-favicon"
                              alt="logo"
                            />
                          </a>
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
                                      { _id: 1, name: "customer" },
                                      { _id: 2, name: "suppliers" },
                                    ]
                                  )}
                                </div>
                                <div class="col-md-6">
                                  {this.renderSelect(
                                    "organisationType",
                                    "Organisation Type",
                                    [
                                      { _id: 1, name: "Private Limited" },
                                      { _id: 2, name: "Government" },
                                    ]
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
                                      { _id: 2, name: "soption 2" },
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
                                      onChange={this.onFileChange}
                                    />
                                    <button
                                      class="btn btn-main-primary btn-block"
                                      onClick={this.onFileUpload}
                                    >
                                      Upload!
                                    </button>
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
                                      onChange={this.onFileChange}
                                    />
                                    <button
                                      class="btn btn-main-primary btn-block"
                                      onClick={this.onFileUpload}
                                    >
                                      Upload!
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="parsley-checkbox" id="cbWrapper">
                                    <label class="ckbox">
                                      <input name="browser[]" type="checkbox" />
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
                                <Link to="/">Sign In</Link>
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
