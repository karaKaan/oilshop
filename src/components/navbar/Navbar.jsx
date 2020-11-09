import React, {} from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'


export default function Navbar() {
    return(
        <nav className="navWrapper">
            <div className="navImgWrapper">
                <img src="../../img/beard.svg" alt=""/>
                <span>Img</span>
            </div>
            <div className="navLinksWrapper">
                <Link className="navLink">Link 1</Link>
                <Link className="navLink">Link 2</Link>
                <Link className="navLink">Link 3</Link>
                <Link className="navLink">Link 4</Link>
                <Link className="navLogin">Login</Link>


            </div>
        </nav>
    )
};
