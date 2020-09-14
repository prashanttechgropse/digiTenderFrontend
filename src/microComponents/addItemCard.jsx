import React, { Component } from "react";
import Form from "../macroComponents/form/form";
import Joi from "joi-browser";
class AddItemCard extends Form {
  state = {
    formData: {
      category: "",
      name: "",
      quantity: "",
      unitOfMeasure: "",
    },
    errors: {},
  };

  schema = {
    category: Joi.string().required(),
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    unitOfMeasure: Joi.string().required(),
  };

  doSubmit = async () => {
    this.props.addItem(this.state.formData);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-sigin">
            <div className="main-signup-header">
              <div className="row">
                <div className="col-md-6">
                  {this.renderSelect("category", "Select Category", [
                    {
                      _id: "mobile",
                      name: "Mobile",
                    },
                    { _id: "laptop", name: "Laptop" },
                  ])}
                </div>
                <div className="col-md-6">
                  {this.renderInput("name", "Item Name")}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {this.renderInput("quantity", "Add Quantity for Item")}
                </div>
                <div className="col-md-6">
                  {this.renderInput("unitOfMeasure", "Unit of Meassure")}
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 offset-9">
                  {this.renderButton(
                    "Add More",
                    this.handleSubmit,
                    "btn btn-warning-gradient btn-block"
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

export default AddItemCard;
