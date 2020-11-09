import React, {} from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'
import beard from '../../img/beard.svg'

export default function Navbar() {
    return(
        <nav className="navWrapper">
            <div className="navImgWrapper">
                <Link to="/"><img src={beard} alt=""/></Link>
                
                
            </div>
            <div className="navLinksWrapper">
                <Link className="navLink">Beard Oil</Link>
                <Link className="navLink">Oil Parfume</Link>
                <Link className="navLink">Vitamens</Link>
                <Link className="navLink">Link 4</Link>
                <Link className="navLogin" to="/login">Login</Link>


            </div>
        </nav>
    )
};
