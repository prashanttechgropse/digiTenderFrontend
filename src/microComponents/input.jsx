import React from "react";
const Input = ({ name, value, error, label, disabled, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        value={value}
        id={name}
        name={name}
        className="form-control"
        placeholder={`Enter Your ${label}`}
        disabled={disabled}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
