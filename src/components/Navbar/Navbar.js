import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar-section">
            <img src="https://static.wixstatic.com/media/be8e7d_cd80002f664b48a2a860dc6d0b638d89~mv2.png/v1/fill/w_398,h_75,al_c,q_85,usm_0.66_1.00_0.01/logo_gray_yoko01_edited.webp"/>
            <div className='navbar-links'>
                <ul className='navbar-links-list'>
                    <li><Link className='navbar-link' id='link1' to="/">Home</Link></li>
                    <li><Link className='navbar-link' id='link2' to="/news">News</Link></li>
                    <li><Link className='navbar-link' id='link3' to="/story">User's Voice</Link></li>
                    <li><Link className='navbar-link' id='link4' to="/more">More</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
