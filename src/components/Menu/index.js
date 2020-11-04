import React from 'react'
import './style.css';

import {Link} from 'react-router-dom'

import home from '../../assets/images/home.png';
import user from '../../assets/images/user.png';
import photos from '../../assets/images/photos.png';
import exit from '../../assets/images/exit.png';

export default function Menu(props) {

    function handleLogout(event) {
        event.preventDefault();
        props.logoutCall();
    }

    let classForRow = 'navigation-row';
    if (!props.isLoggedIn) {
        classForRow = 'navigation-row-before-login';
    }
    return (

        <div className={classForRow}>
            <Link to="/" className="navigation-link home">
                <img src={home} alt=""/>
            </Link>
            {props.isLoggedIn && <Link to="/" className="navigation-link profile">
                <img src={user} alt=""/>
            </Link>}
            {props.isLoggedIn && <Link to="/all_cards" className="navigation-link my-cards">
                <img src={photos} alt=""/>
            </Link>}
            {props.isLoggedIn &&
            <Link to="/all_cards" className="navigation-link logout" onClick={(e) => handleLogout(e)}>
                <img src={exit} alt="" className="navigation-link log-out"/>
            </Link>}
        </div>
    )
}
