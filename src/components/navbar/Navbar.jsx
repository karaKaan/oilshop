import React, {} from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'


export default function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="">
                <svg></svg>
                <span>Img</span>
            </div>
            <div className="">
                <Link className="justify-content-center">Link 1</Link>
                <Link className="justify-content-center">Link 2</Link>
                <Link className="justify-content-center">Link 3</Link>
                <Link className="justify-content-center">Link 4</Link>
                <Link className="">Login</Link>

            </div>
        </nav>
    )
};
