import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../../microComponents/input";
import Select from "../../microComponents/select";

class Form extends Component {
  state = {
    formData: {},
    errors: {},
  };

  validateOnSubmit = () => {
    const result = Joi.validate(this.state.formData, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateOnChange = (input) => {
    const obj = { [input.name]: input.value };
    const subSchema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, subSchema);
    if (!error) return null;
    return error.details[0].message;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validateOnSubmit();
     this.setState({ errors: errors || {} });

    if (errors) return;

    await this.doSubmit();
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
     this.setState({ formData, errors });
  };

  renderInput = (name, label, type = "text") => {
    const { formData, errors } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        value={formData[name]}
        label={label}
        name={name}
        error={errors[name]}
        type={type}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { formData, errors } = this.state;
    return (
      <Select
        onChange={this.handleChange}
        value={formData[name]}
        label={label}
        options={options}
        name={name}
        error={errors[name]}
      />
    );
  };

  renderButton = (
    label,
    handleSubmit,
    buttonClassName = "btn btn-main-primary btn-block"
  ) => {
    return (
      <button
        className={buttonClassName}
        disabled={this.validateOnSubmit()}
        onClick={handleSubmit}
      >
        {label}
      </button>
    );
  };
}

export default Form;
