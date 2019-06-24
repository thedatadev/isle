
// Dependencies
import React, { useRef, useEffect } from 'react'


// GraphQL
import { graphql } from 'react-apollo';
import { getRoomByID } from '../../../../api/graphql/queries';


// Styling
import './Panel.css'

function Header(props) {
    
    return (

        <div id="panel-header">

            <p>{props.title}</p>

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

                <img className="model-icon" src={model.icon} alt={model.id}/>

            </div>

        );

    });

}




function VRButton(props) {

    function enterVRMode(event) {

        event.preventDefault();
        event.stopImmediatePropagation(); // https://stackoverflow.com/questions/12052132/jquery-mobile-click-event-binding-twice

        console.log("Entering VR mode!");

        props.enterVR();

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

        // if ( props.data.loading ) return [];

        // if ( !props.data.room ) return [];

        // return props.data.room.modelObjects;

        // TODO: Fix the way that request for models are being handled, since they're too slow on mobile
        return [
    
            {
                id: "chair-id",
                name: "chair",
                uri: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Fchair.glb",
                position: { x: 0.0, y: 0.0, z: 0.0 },
                rotation: { x: 0.0, y: 0.0, z: 0.0 },
                scale:    { x: 0.5, y: 0.5, z: 0.5 },
                icon: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Fchair.png"
            },
        
            {
                id: "bookshelf-id",
                name: "bookshelf",
                uri: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Fbookshelf.glb",
                position: { x: 0.0, y: 0.0, z: 0.0 },
                rotation: { x: 0.0, y: 0.0, z: 0.0 },
                scale:    { x: 0.5, y: 0.5, z: 0.5 },
                icon: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Fbookshelf.png"
            },
        
            {
                id: "floor-lamp-id",
                name: "floor lamp",
                uri: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Ffloor-lamp.glb",
                position: { x: 0.0, y: 0.0, z: 0.0 },
                rotation: { x: 0.0, y: 0.0, z: 0.0 },
                scale:    { x: 0.5, y: 0.5, z: 0.5 },
                icon: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Ffloor-lamp.png"
            },
        
            {
                id: "table-id",
                name: "table",
                uri: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Ftable.glb",
                position: { x: 0.0, y: 0.0, z: 0.0 },
                rotation: { x: 0.0, y: 0.0, z: 0.0 },
                scale:    { x: 0.5, y: 0.5, z: 0.5 },
                icon: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Ftable.png"
            },
        
            {
                id: "bed-id",
                name: "bed",
                uri: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Fbed.glb",
                position: { x: 0.0, y: 0.0, z: 0.0 },
                rotation: { x: 0.0, y: 0.0, z: 0.0 },
                scale:    { x: 0.5, y: 0.5, z: 0.5 },
                icon: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Fbed.png"
            },
        
        ];
        

    }

    function title() {

        if ( props.data.loading ) return "Room Title";

        if ( !props.data.room ) return "Room Title";

        return props.data.room.name;

    }

    return (

        <div id="panel">

            <Header title={title()}/>

            <Palette models={models()} addObject={props.addObject}/>

            <VRButton enterVR={ props.enterVR }/>

        </div>

    );

}


export default graphql(getRoomByID)(Panel);
