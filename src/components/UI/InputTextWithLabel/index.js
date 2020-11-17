import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { formValidator } from "../../../forms/user/formValidator";


class InputTextWithLabel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        value: props.value ? props.value : '',
        errorMessage: ''
    }
  }

  inputChange = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    let errorMessage = "";
    if (!formValidator.isValid(name, val)) {
      errorMessage = 'Value is not correct';    
    } 
    if (name === "login" && val === "") {
      errorMessage = 'Value is required';
    }
    this.setState({value: val, errorMessage: errorMessage});
  }

  showError() {
    let className = "error"; 
    let message = this.state.errorMessage;
    if (message.length === 0) {
      className = className + " hidden";
      message = 'Value is correct';
    }  

    return <span className={className}> {message}</span>;
  }
 
 render() {

  let inputType = "text";
  if (this.props.columnName.indexOf("password") > 0) {
    inputType = "password";
  }

  return (
    <React.Fragment>
    <div className="input-text-element__row">
      <label htmlFor={this.props.columnName}> {this.props.labelText}</label>
      <input
        key = {this.props.columnName} 
        type={inputType}
        id={this.props.columnName}
        className="styled-as-input margin-bottom"
        name={this.props.columnName}
        value={this.state.value}
        onChange={this.inputChange}
      />
    </div>    
    {this.showError()}
    </React.Fragment>
  );
 }
}

export default InputTextWithLabel;

InputTextWithLabel.propTypes = {
  columnName: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
};
