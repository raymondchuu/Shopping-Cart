import React, { Component } from 'react';

// Stateless Functional Component

function NavBar({totalCounters}) { // or const NavBar = (props) => {}
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar </a>

            <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>
        </nav> );
};
 
export default NavBar;