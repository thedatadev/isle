// Dependencies
// NOTE: 'React' must be in scope when using JSX
import React from 'react';


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


function LoginOption(props) {

    return (

        <div className="login-option access-option">
            { props.option }
        </div>

    );

}


function Login() {

    return (

        <div id="login">
            {/* <LoginOption option="email" />
            <LoginOption option="Google" />
            <LoginOption option="Facebook" /> */}
            <LoginOption option="Sign in"/>
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