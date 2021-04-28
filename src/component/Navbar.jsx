import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../component/Navbar.css'
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;