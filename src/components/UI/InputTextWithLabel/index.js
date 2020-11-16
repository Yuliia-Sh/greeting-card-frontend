import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

export default function InputTextWithLabel(props) {
    return (
        <div className="input-text-element__row">
            <label htmlFor={props.columnName}> {props.labelText}</label>
            <input type="text" id={props.columnName} className="styled-as-input" name={props.columnName} value={props.value}/>
        </div>
    )
}

InputTextWithLabel.propTypes = {
    columnName: PropTypes.string,
    labelText: PropTypes.string,
    value: PropTypes.string
}
