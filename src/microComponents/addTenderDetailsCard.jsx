import React, { Component } from "react";
import Form from "../macroComponents/form/form";
import Joi from "joi-browser";
class AddTenderDetailsCard extends Form {
  state = {
    formData: {
      tenderClosingDate: "",
      tenderDeliveryDate: "",
      tenderDeliveryLocation: "",
      tenderBudgetAmount: "",
    },
    errors: {},
  };
  schema = {
    tenderClosingDate: Joi.date().required(),
    tenderDeliveryDate: Joi.date().required(),
    tenderBudgetAmount: Joi.string().required(),
    tenderDeliveryLocation: Joi.string().required(),
  };

  handleChange = async (e) => {
    //validation on change of input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    //setting state according to input
    const formData = { ...this.state.formData };
    formData[e.currentTarget.name] = e.currentTarget.value;
    await this.setState({ formData, errors });
    this.props.updateTenderDetails(this.state.formData, this.state.errors);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="card-title mg-b-0 datatable-link">
              if You want to Create New Tender. Fill the Forms !
            </h4>
          </div>
          <p className="tx-12 tx-gray-500 mb-2">
            Lorem Ipsum is simply dummy text of the printing and simply dummy
            text of the printing and typesetting industry.
          </p>
        </div>
        <div className="card-body">
          <div className="card-sigin">
            <div className="main-signup-header">
              <div className="row">
                <div className="col-md-4">
                  {this.renderInput(
                    "tenderClosingDate",
                    "Tender Closing Date",
                    "date"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "tenderDeliveryDate",
                    "Tender Delivery Date",
                    "date"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "tenderBudgetAmount",
                    "Tender Budget Amount"
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {this.renderInput(
                    "tenderDeliveryLocation",
                    "Tender Delivery Location"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTenderDetailsCard;
