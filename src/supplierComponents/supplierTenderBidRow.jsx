import React, { Component } from "react";
import Form from "../macroComponents/form/form";
import Joi from "joi-browser";
class SupplierTenderBidRow extends Form {
  state = {
    formData: {
      price: "",
    },
    errors: {},
  };

  schema = {
    price: Joi.number().required(),
  };

  handleChange = async (srNo, e) => {
    //validation on change of input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    //setting state according to input
    const formData = { ...this.state.formData };
    formData[e.currentTarget.name] = e.currentTarget.value;
    await this.setState({ formData, errors });
    this.props.pushPrice(this.state.formData.price, srNo);
  };

  render() {
    const { item, srNo } = this.props;
    return (
      <tr role="row">
        <td>{`#000${srNo}`}</td>
        <td>{item.category}</td>
        <td>{item.name}</td>
        <td>
          <span className="badge badge-primary f-14">{item.unitOfMeasure}</span>
        </td>
        <td>
          <span className="badge badge-success f-14">{item.quantity}</span>
        </td>
        <td>
          <div>
            <input
              onChange={(e) => this.handleChange(srNo, e)}
              value={this.state.formData["price"]}
              type="text"
              className="form-control"
              placeholder=""
              id="price"
              name="price"
            />
            {this.state.errors["price"] && (
              <div className="alert alert-danger">
                {this.state.errors["price"]}
              </div>
            )}
          </div>
        </td>
        <td>100 </td>
      </tr>
    );
  }
}

export default SupplierTenderBidRow;