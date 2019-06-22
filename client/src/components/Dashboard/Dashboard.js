// Dependencies
import React from 'react';


import './Dashboard.css'


// Subcomponents

function Main() {

    return (

        <div id="main">

        

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

            <Tab name="models"  icon="fas fa-cubes" />
            <Tab name="rooms"   icon="fas fa-vr-cardboard" />
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