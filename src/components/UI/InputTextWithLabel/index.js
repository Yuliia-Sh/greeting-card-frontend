import React from "react";
import "./style.css";
import PropTypes from "prop-types";

export default function InputTextWithLabel(props) {
  let inputType = "text";
  if (props.columnName.indexOf("password")) {
    inputType = "password";
  }
  return (
    <div className="input-text-element__row">
      <label htmlFor={props.columnName}> {props.labelText}</label>
      <input
        type={inputType}
        id={props.columnName}
        className="styled-as-input"
        name={props.columnName}
        value={props.value}
      />
    </div>
  );
}

InputTextWithLabel.propTypes = {
  columnName: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
};
