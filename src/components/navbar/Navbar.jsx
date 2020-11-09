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
                <Link className="navLink">Beard Oil</Link>
                <Link className="navLink">Oil Parfume</Link>
                <Link className="navLink">Vitamens</Link>
                <Link className="navLink">Link 4</Link>
                <Link className="navLogin">Login</Link>


            </div>
        </nav>
    )
};
