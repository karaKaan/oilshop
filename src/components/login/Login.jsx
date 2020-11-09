import React, {} from 'react'

import './Login.scss'
import google from '../../img/google.svg'
import { Link } from 'react-router-dom'

export default function Login() {
    return(
        <div className="loginWrapper">
                <Link to="/register"><p className="register">Register <i className="fas fa-chevron-right" /></p></Link>
                
                <h3 className="loginTitle">Login</h3>

            <form className="formWrapper" action="" >
                <input className="input" type="text" placeholder="Email"/>
                <input className="input" type="text" placeholder="Password"/>
                <button>Login</button>
            </form>
            <hr/>
            <div className="socialLogins">
                <img src={google} className="google"/>
            </div>
        </div>
    )
};
