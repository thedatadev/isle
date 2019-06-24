
// Dependencies
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


// Components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Editor from './components/Editor/Editor';


// Styling
import './App.css';


// GraphQL, Apollo client setup
const port = process.env.port || 4000;
const apolloClient = new ApolloClient({
  uri: `http://127.0.0.1:${port}/graphql`
});




function Mobile() {

  return (

    <ApolloProvider client={apolloClient}>

      <BrowserRouter>

        <div className="App">

          <Route exact path="/" component={Home} />

          <Route path="/user" component={Dashboard} />

          <Route path="/editor" component={Editor} />

        </div>

      </BrowserRouter>

    </ApolloProvider>

  );

}


function isMobile() {

  function isPortrait() {

    return window.innerWidth < window.innerHeight;

  }

  const maxMobileWidth = 480;

  const width = isPortrait() ? window.innerWidth : window.innerHeight;

  return width < maxMobileWidth;

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
