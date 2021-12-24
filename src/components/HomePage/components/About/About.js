import React from 'react'
import './About.css'
import img from '../../../../images/main-section-image.jpg'

function About() {
    return (
        <div className='main-container'>
            <div className='main-subcontainer'>
                <h2 className='main-heading'>We’ll keep challenging until the whole society become a school.</h2>
                <h5 className="main-subheading">A society, where all people respect each other and where every encounter is a learning experience. That is our ideal. We will create a society, where the children can live their lives as they are, by visualizing that each person is a unique and irreplaceable individual through AI that is closer to people than people. We continue to challenge ourselves every day to turn the suffering of COVID-19 into the joy of the next generation.</h5>
                <h6 className='main-sub-text'>We visualize you’re one and only.      I’mbesideyou Inc.</h6>
                <button className='main-button'>Contact Us</button>
            </div>
            <img alt='bg_image' className='main-section-image' src={img} />
        </div>
    )
}

export default About


