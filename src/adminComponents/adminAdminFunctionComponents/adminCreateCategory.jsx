import React, { Component } from "react";
import Form from "../../macroComponents/form/form";
import httpService from "../../services/httpService";
import { toast } from "react-toastify";
import pad from "../../services/padding";
import { Link } from "react-router-dom";

const Joi = require("joi-browser");

class AdminCreateCategory extends Form {
  state = {
    formData: {
      organisationName: "",
      organisationTypes: "",
    },
    errors: {},
  };

  schema = {
    organisationName: Joi.string().required(),
    organisationTypes: Joi.array().items(Joi.string()),
  };

  componentDidMount = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/admin/organisationTypes`
      );
      const formData = { ...this.state.formData };
      formData.organisationTypes = data.organisationTypes;
      await this.setState({ formData });
    } catch (error) {
      toast.error(error.message);
    }
  };

  renderOrganisationTypes() {
    const { organisationTypes } = this.state.formData;
    let srNo = 0;
    if (organisationTypes === "") return null;
    return organisationTypes.map((organistationType) => {
      srNo++;
      const index = srNo - 1;
      return (
        <tr role="row" key={srNo}>
          <td>{pad(srNo, 3)}</td>
          <td>{organistationType}</td>
          <td>
            <a
              onClick={() => this.removeCategory(index)}
              className="detail-icons"
            >
              <i className="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      );
    });
  }

  removeCategory = async (index) => {
    const previousFormData = { ...this.state.formData };
    try {
      const formData = { ...this.state.formData };
      formData.organisationTypes.splice(index, 1);
      this.setState({ formData });
      const {
        data,
        error,
      } = await httpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/admin/removeOrganisationTypes`,
        { organisationTypes: this.state.formData.organisationTypes }
      );
      if (error) throw error;
      toast.success(data.message);
    } catch (error) {
      const formData = previousFormData;
      this.setState({ formData });
    }
  };

  doSubmit = async () => {
    const previousFormData = { ...this.state.formData };
    const formData = { ...this.state.formData };
    formData.organisationTypes.push(formData.organisationName);
    this.setState({ formData });
    try {
      const {
        data,
      } = await httpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/admin/addOrganisationTypes`,
        { organisationType: this.state.formData.organisationName }
      );
      toast.success(data.message);
      formData.organisationName = "";
      this.setState({ formData });
    } catch (error) {
      toast.error(error.message);
      const formData = previousFormData;
      this.setState({ formData });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Page</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Create Category
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
                    Create Organization
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy texttypesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <div className="row">
                      <div className="col-md-12">
                        {this.renderInput(
                          "organisationName",
                          "Organisation Name"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      {this.renderButton(
                        "Submit",
                        this.handleSubmit,
                        "btn btn-primary-gradient btn-block"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Organization List
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy industry.
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
                          id="example2"
                        >
                          <thead>
                            <tr role="row">
                              <th>Sr.No</th>
                              <th>Organization Name</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>{this.renderOrganisationTypes()} </tbody>
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

export default AdminCreateCategory;
