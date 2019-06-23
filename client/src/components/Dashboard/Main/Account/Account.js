import React from 'react'
import { Link } from 'react-router-dom'

import './Account.css'

function Avatar(props) {

    return (

        <div id="avatar">

            <div id="profile-pic"></div>

            <div id="fullname">{ props.fullname }</div>

            <div id="location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{ props.location }</span>
            </div>

        </div>

    );

}


function Credential(props) {

    return (

        <div className="credential">

            <div className="credential-label">{props.label}</div>

            <input readOnly className="credential-value" type={props.inputType} value={props.inputValue} />

        </div>

    );

}


function Credentials() {

    return (

        <div id="credentials">

            <Credential label="email" inputType="text" inputValue="thedatadev@gmail.com" />
            
            <Credential label="password" inputType="password" inputValue="password" />

            <div id="update-credentials">Update</div>

            <Link to="/" id="sign-out">Sign out</Link>

        </div>

    );

}




function Account() {

    return (

        <div id="account">

            <Avatar fullname="Edrian Gomez" location="Sydney" />

            <div className="divider"></div>

            <Credentials />

        </div>

    );

}


export default Account;