// Dependencies
import React from 'react'


import './Dashboard.css'


// Subcomponents
import Rooms from '../Main/Rooms/Rooms'
import Models from '../Main/Models/Models'

function Main() {

    return (

        <div id="main">

            {/* <Rooms /> */}

            <Models />

        </div>

    );

}


function Tab(props) {

    return (

        <div className="tab">
            <i className={ "tab-icon " + props.icon }></i>
            <div className="tab-name">{props.name}</div>
        </div>

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