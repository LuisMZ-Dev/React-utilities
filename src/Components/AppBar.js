import React from 'react'
import {  Link } from "react-router-dom";
import '../nav.css'


export const AppBar = () => {

  return (
   <section className="navigation">
        <div className="nav-container">
            <div className="brand">
                <Link to="/">basic</Link>
            </div>
        <nav >
            <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                <ul className="nav-list">
                    <li>
                        <Link to="/tables">Tables</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>          
                    </li>             
                </ul>
        </nav>
        </div>
    </section>
  
  )
}
