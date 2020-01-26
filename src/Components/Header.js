import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <div className= "container">
             <div className = "title">
            <a href="#">Online news</a>
            </div>
            <div className="navbar">
                <ul>
                    {/* <li><a href="/"> Home </a></li>
                    <li><a href="About"> About </a></li>
                    <li><a href="Contact"> Contact </a></li> */}
                    <li><Link to ="/"> Home </Link></li>
                    <li><Link to ="About"> About </Link></li>
                    <li><Link to ="All News"> All News </Link></li>
                    <li><Link to ="Contact"> Contact </Link></li>
                </ul>
            </div>
        </div>    
    )
}


export default Header;