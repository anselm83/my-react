import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Routes,
  } from "react-router-dom";
import styles from './App.css';

export default function Mainpage() {
  return (
    <>
         <Router>
            <ul className="menuBar">
                <li>
                <NavLink className="nav-link" to="/" exact >Home</NavLink> 
                </li>
                <li>
                <NavLink className="nav-link" to="/about" exact >About Us</NavLink>  
                </li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Home title="Home Page" content="This is Home Page" />} />
                <Route path="/about" element={<About title="About Page" content="This is About Page" />} />
            </Routes>
         </Router>
         
        
    </>
  )
}
