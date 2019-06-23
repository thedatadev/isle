
// Dependencies
import React from 'react'


// GraphQL
import { graphql } from 'react-apollo';
import { getRoomByID } from '../../../../api/graphql/queries';


// Styling
import './Panel.css'


function Model(props) {

    return (

        <div className="model">

            {/* TODO: Model Thumbnail */}

        </div>

    );

}


function Models(props) {

    return props.models.map(model => {

        return <Model model={model} key={model.id}/>

    });

}


function Palette(props) {


    if ( props.models && props.models.length > 0 ) {

        return (

            <div id="palette">

                <Models models={props.models}/>

            </div>

        );

        

    } else {

        return (
        
            <div id="empty-palette">No models to display.</div>
            
        );

    }

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


function Panel(props) {

    function models() {

        if ( props.data.loading ) return [];

        if ( !props.data.room ) return [];

        return props.data.room.modelObjects;

    }

    return (

        <div id="panel">

            <Header />

            <Palette models={models()} />

        </div>

    );

}


export default graphql(getRoomByID)(Panel);
