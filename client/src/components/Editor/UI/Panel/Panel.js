
// Dependencies
import React from 'react'


// GraphQL
import { graphql } from 'react-apollo';
import { getRoomByID } from '../../../../api/graphql/queries';


// Styling
import './Panel.css'



function Panel(props) {


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

    function models() {

        if ( props.data.loading ) return [];

        if ( !props.data.room ) return [];

        return props.data.room.modelObjects;

    }

    return (

        <div id="panel">

            <Header />

            <Palette models={models()} addObject={props.addObject}/>

        </div>

    );

}


export default graphql(getRoomByID)(Panel);
