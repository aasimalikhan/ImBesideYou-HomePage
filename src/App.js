// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import News from './components/News/News';
// import Message from './components/Message/Message';
// import Clients from './components/Clients/Clients';
// import Team from './components/Team/Team';
// import './App.css'

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer';
import './App.css'


function App(){
    return (
        <Router>
            <Navbar/>
            <Body />
            <Footer />
        </Router>
    )
}

export default App;
