// Dependencies
import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Dashboard.css'


// Subcomponents
import Rooms from '../Main/Rooms/Rooms'
import Models from '../Main/Models/Models'
import Account from '../Main/Account/Account'

function Main() {

    return (

        <div id="main">

            <Route exact path="/user/rooms" component={Rooms} />

            <Route exact path="/user/models" component={Models} />

            <Route exact path="/user/account" component={Account} />

        </div>

    );

}


function Tab(props) {

    return (

        <NavLink className="tab" to={"/user/" + props.name}>

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

        <div id="dashboard">

            <Main />

            <Tabs />

        </div>

    );

}


export default Dashboard;