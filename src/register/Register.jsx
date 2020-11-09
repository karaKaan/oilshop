import React from 'react';
import { Link } from 'react-router-dom'

import './Register.scss';

export default function Register() {
    return(
        <div className="loginWrapper">
        <Link to="/login"><p className="register">Login <i className="fas fa-chevron-right" /></p></Link>
        
        <h3 className="loginTitle">Register</h3>

    <form className="registerFormWrapper" action="" >
        <input className="input" type="text" placeholder="Firstname*"/>
        <input className="input" type="text" placeholder="Lastname*"/>
        <input className="input" type="text" placeholder="Adress+Nr*"/>
        <input className="input" type="text" placeholder="City*"/>
        <input className="input" type="text" placeholder="Postal Code*"/>
        <input className="input" type="text" placeholder="Email*"/>
        <input className="input" type="text" placeholder="Password*"/>
    </form>
        <button className="successBtn">Register</button>
        <p>* Fields with these symbols are mandatory</p>
</div>
    )
};
