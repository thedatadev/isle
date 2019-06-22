import React from 'react'

import './Panel.css'


function Model() {

    return (

        <div className="model">



        </div>

    );

}


function Palette() {

    return (

        <div id="palette">

            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />
            <Model />

        </div>

    );

}


function Header() {

    return (

        <div id="panel-header">

            <p>Panel Header</p>

            {/* Save */}

            {/* Minimize */}

            {/* Settings */}

        </div>

    );

}


function Panel() {

    return (

        <div id="panel">

            <Header />

            <Palette />

        </div>

    );

}


export default Panel;