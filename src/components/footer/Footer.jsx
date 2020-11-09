import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

export default function Footer() {
   return(
       <div className="footerWrapper">
           <h4 className="footerTitle">OilShop</h4>
           <hr/>
           <div className="footerLinks">
               <Link className="footerLink" to="/">Impressum</Link> <p className="verticalRule">|</p>
               <Link className="footerLink" to="/">Datenschutzerklärung</Link> <p className="verticalRule">|</p>
               <Link className="footerLink" to="/">Information</Link> <p className="verticalRule">|</p>
               <Link className="footerLink" to="/">Certification</Link> <p className="verticalRule">|</p>
               <Link className="footerLink" to="/">Link</Link> <p className="verticalRule">|</p>
               <Link className="footerLink" to="/">Link</Link>
           </div>
       </div>
   ) 
}