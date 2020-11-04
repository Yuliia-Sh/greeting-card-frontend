import React from 'react'
import './style.css'

export default function CommandButton(props) {
    return (
        <button className={props.className}
                onClick={props.action}>
            {props.caption}
        </button>
    )
}
