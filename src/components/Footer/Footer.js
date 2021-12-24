import React from 'react'
import './Footer.css'

function Footer() {
    const date = new Date();

    return (
        <div className='footer-container'>
            <p>Information security policy</p>
            <p>{date.getFullYear()} I'm beside you All Rights Reserved</p>
        </div>
    )
}

export default Footer
