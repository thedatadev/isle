// Dependencies
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Assets
import './App.css';

// Components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';



function Mobile() {

  return (

    <BrowserRouter>

      <div className="App">

        <Route exact path="/" component={Home} />

        <Route path="/user" component={Dashboard} />

      </div>

    </BrowserRouter>

  );

}


function isMobile() {

  function isPortrait() {

    return window.innerWidth < window.innerHeight;

  }

  const maxWidth = 480;

  const width = isPortrait() ? window.innerWidth : window.innerHeight;

  return width < maxWidth;

}


function Desktop() {

  const desktopStyling = {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: '100',
    marginTop: '100px'
  }

  return (

    <div className="App" style={desktopStyling}>

      <p>Sorry, this application only works on mobile devices!</p>

    </div>

  );

}


function App() {

  // TODO: detect orientation change from portrait to landscape

  return isMobile() ? Mobile() : Desktop();
  
}

export default App;
