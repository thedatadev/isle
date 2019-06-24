
// Dependencies
import React, { useRef, useEffect } from 'react'


// GraphQL
import { graphql } from 'react-apollo';
import { getRoomByID } from '../../../../api/graphql/queries';


// Styling
import './Panel.css'

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




function Palette(props) {
    
    if ( props.models && props.models.length > 0 ) {

        return (

            <div id="palette">

                <Models models={props.models} addObject={props.addObject}/>

            </div>

        );

    } else {

        return (
        
            <div id="empty-palette">No models to display.</div>
            
        );

    }

}

function Models(props) {

    return props.models.map(model => {

        return (

            <div className="model"
                 key={model.id} 
                 onClick={ _ => props.addObject(model) }>

                {model.name}

            </div>

        );

    });

}


function EnterVR() {

    function enterVRMode(event) {

        event.preventDefault();
        event.stopImmediatePropagation(); // https://stackoverflow.com/questions/12052132/jquery-mobile-click-event-binding-twice

        console.log("Entering VR mode!")

    }

    let btn = useRef(null);

    useEffect(() => {

        btn.addEventListener("click", enterVRMode);

        return function() {

            if (btn !== null) btn.removeEventListener("click", enterVRMode);

        }

    });


    return (

        <div id="enter-vr">

            <i className="fas fa-vr-cardboard" ref={ element => btn = element }></i>

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

            <Palette models={models()} addObject={props.addObject}/>

            <EnterVR />

        </div>

    );

}


export default graphql(getRoomByID)(Panel);
