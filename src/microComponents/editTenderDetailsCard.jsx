import React from "react";
import Form from "../macroComponents/form/form";
import Joi from "joi-browser";
class EditTenderDetailsCards extends Form {
  state = {
    formData: {
      closingDate: "",
      deliveryDate: "",
      deliveryLocation: "",
      budgetAmount: "",
    },
    errors: {},
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.formData !== prevProps.formData) {
      const formData = { ...this.state.formData };
      for (let item in formData) {
        formData[item] = this.props.formData[item];
      }

      if (formData.closingDate) {
        formData.closingDate = formData.closingDate.substring(0, 10);
      }
      if (formData.deliveryDate) {
        formData.deliveryDate = formData.deliveryDate.substring(0, 10);
      }
      await this.setState({ formData });
    }
    if (this.props.errors !== prevProps.errors) {
      const { errors } = this.props;
      await this.setState({ errors });
    }
  };
  schema = {
    closingDate: Joi.date().min("now").required(),
    deliveryDate: Joi.date().greater(Joi.ref("closingDate")).required(),
    budgetAmount: Joi.number().required(),
    deliveryLocation: Joi.string().required(),
  };

  validateOnChange = (input) => {
    let obj = { [input.name]: input.value };
    let subSchema;
    if (`${[input.name]}` === "deliveryDate") {
      obj = {
        closingDate: this.state.formData.closingDate,
        [input.name]: input.value,
      };
      subSchema = {
        closingDate: this.schema["closingDate"],
        [input.name]: this.schema[input.name],
      };
    } else {
      subSchema = { [input.name]: this.schema[input.name] };
    }
    const { error } = Joi.validate(obj, subSchema);
    if (!error) return null;
    return error.details[0].message;
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
    await this.props.updateTenderDetails(
      this.state.formData,
      this.state.errors
    );
  };

  render() {
    return (
      <div className="card">
        <div className="card-header pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="card-title mg-b-0 datatable-link">
              if You want to Edit Tender. Fill the Forms !
            </h4>
          </div>
          <p className="tx-12 tx-gray-500 mb-2">
            {/*Lorem Ipsum is simply dummy typesetting industry.*/}
          </p>
        </div>
        <div className="card-body">
          <div className="card-sigin">
            <div className="main-signup-header">
              <div className="row">
                <div className="col-md-4">
                  {this.renderInput(
                    "closingDate",
                    "Tender Closing Date",
                    "date"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "deliveryDate",
                    "Tender Delivery Date",
                    "date"
                  )}
                </div>
                <div className="col-md-4">
                  {this.renderInput(
                    "budgetAmount",
                    "Tender Budget Amount(in Rand)"
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {this.renderInput(
                    "deliveryLocation",
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

export default EditTenderDetailsCards;
