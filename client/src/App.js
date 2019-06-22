// Dependencies
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Assets
import './App.css';

// Components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (

    <BrowserRouter>

      <div className="App">

        <Route exact path="/" component={Home} />

        <Route path="/user" component={Dashboard} />

      </div>

    </BrowserRouter>


  );
}

export default App;
