import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export default function CommandButtonLink(props) {
    return (
        <Link to={props.to} className = {props.className} > {props.caption} </Link> 
    )
}
