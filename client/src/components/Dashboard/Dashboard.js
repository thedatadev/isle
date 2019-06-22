// Dependencies
import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import './Dashboard.css'


// Subcomponents
import Rooms from '../Main/Rooms/Rooms'
import Models from '../Main/Models/Models'
import Account from '../Main/Account/Account'

function Main() {

    return (

        <div id="main">

            <Route exact path="/rooms" component={Rooms} />

            <Route exact path="/models" component={Models} />

            <Route exact path="/account" component={Account} />

        </div>

    );

}


function Tab(props) {

    return (

        <NavLink className="tab" to={"/" + props.name}>

            <i className={ "tab-icon " + props.icon }></i>

            <div className="tab-name">{props.name}</div>

        </NavLink>

    );

}


function Tabs() {

    return (

        <div id="tabs">

            <Tab name="rooms"   icon="fas fa-vr-cardboard" />
            <Tab name="models"  icon="fas fa-cubes" />
            <Tab name="account" icon="fas fa-user-circle" />

        </div>

    );

}


// Main component
function Dashboard() {


    return (

        <BrowserRouter>

            <div id="dashboard">

                <Main />

                <Tabs />

            </div>

        </BrowserRouter>

    );

}


export default Dashboard;