import React, {  } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from '../footer/Footer'
import Login from '../login/Login'
import Navbar from '../navbar/Navbar'

import './App.scss'

export default function App() {
    return(
        <Router>
            <Navbar/>
            <Route path='/login' component={Login}/>
            <Footer/>
        </Router>
    )
    
}
