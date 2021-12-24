import React from 'react'

// Component Imports
import News from '../News/News';
import Clients from './components/Clients/Clients'
import Message from './components/Message/Message'
import Team from './components/Team/Team'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';

// Features Import
import Fade from 'react-reveal/Fade';

function HomePage() {
    return (
        <Fade bottom>
            <About/>
            <Message />
            <News />
            <WhatWeDo />
            <Clients />
            <Team />
            <Contact />
        </Fade>
    )
}

export default HomePage
