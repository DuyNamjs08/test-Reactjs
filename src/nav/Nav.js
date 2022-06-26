import React from 'react';
import './Nav.scss'
import {  NavLink } from "react-router-dom";

function Nav() {
    return (
      <div className="topnav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/sign-up">Sign up</NavLink>
        
      </div>
    );
}

export default Nav;