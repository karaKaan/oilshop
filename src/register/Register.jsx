
import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import './Register.scss';

export default function Register() {
    const [userFirstName, setUserFirstName] = useState()
    const [userName, setUserName] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [postalCode, setPostalCode] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    async function registerUser() {
        try {
            
            const body = {userFirstName, userName, address, city, postalCode, email, password}
            
            await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
        } catch (err) {
            console.error(err.message);
        }
    }


    return(
        <div className="loginWrapper">
        <Link to="/login"><p className="register">Login <i className="fas fa-chevron-right" /></p></Link>
        
        <h3 className="loginTitle">Register</h3>

    <form className="registerFormWrapper" action="" >
        <input className="input" type="text" placeholder="Firstname*" onChange={(e) => setUserFirstName(e.target.value)}/>
        <input className="input" type="text" placeholder="Lastname*" onChange={(e) => setUserName(e.target.value)}/>
        <input className="input" type="text" placeholder="Adress+Nr*" onChange={(e) => setAddress(e.target.value)}/>
        <input className="input" type="text" placeholder="City*" onChange={(e) => setCity(e.target.value)}/>
        <input className="input" type="text" placeholder="Postal Code*" onChange={(e) => setPostalCode(e.target.value)}/>
        <input className="input" type="text" placeholder="Email*" onChange={(e) => setEmail(e.target.value)}/>
        <input className="input" type="password" placeholder="Password*" onChange={(e) => setPassword(e.target.value)}/>
    </form>
        <button className="successBtn" onClick={() => registerUser()}>Register</button>
        <p>* Fields with these symbols are mandatory</p>
</div>
    )
};
