// Dependencies
// NOTE: 'React' must be in scope when using JSX
import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

// Subcomponents

function Logo() {

    return  (

        <div id="logo-wrapper">
            
            <div id="logo">

                <div id="alpha">alpha</div>

                <div id="isle">isle</div>

            </div>

        </div>

    );

}


function Register() {

    return (

        <div id="register">

            <div id="register-button" className="access-option">Register</div>
        
        </div>

    );

}



function Login() {

    return (

        <div id="login">
            
            <Link className="access-option" to="/user/rooms">Sign in</Link>
            
        </div>

    );

}


function Access() {

    return  (

        <div id="access">

            <Login />

            <Register />

        </div>

    );

}

// Main component
function Home() {


    return (

        <div id="home">

            <Logo />

            <Access />

        </div>

    );

}


export default Home;