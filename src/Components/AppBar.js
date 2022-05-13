import React from 'react'
import {  Link } from "react-router-dom";
import '../nav.css'


export const AppBar = () => {

  return (
   <section className="navigation">
        <div className="nav-logo">
            <div className="title-logo">
                <Link to="/">Home</Link>
            </div>
        </div>
        <nav className='nav-list' >            
                <ul>
                    <li>
                        <Link to="/basic">Basic</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/tables">Tables</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>          
                    </li>             
                </ul>
        </nav>

  
    </section>
  
  )
}
