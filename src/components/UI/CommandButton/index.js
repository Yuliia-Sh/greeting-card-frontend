import React from 'react'
import './style.css'

export default function CommandButton(props) {
    return (
        <input type="submit" className={props.className}
                onClick={props.action}
                value={props.caption}
                form={props.form ? props.form : ''}/>
    )
}
