import React, { useState, useEffect } from 'react'

import './Editor.css'

import Panel from './ui/Panel/Panel'
import Scene from './ui/Scene/Scene'

import setupEditor from './logic/setup'



function EditorUI() {

    const editor = setupEditor();

    return (

        <div id="editor-ui">

            <Scene mountCanvas={editor.mountCanvas} animate={editor.animate} />

            <Panel addObject={editor.addObject} enterVR={editor.enterVR}/>

        </div>


    );

}


function Landscape() {

    return (

        <div id="editor-landscape">
                
            <EditorUI />

        </div>

    );

}



function Portrait() {

    return  (

        <div id="editor-portrait">

            <div>Please switch to landscape mode</div>

            <div id="portrait-to-landscape">
                <i className="fas fa-mobile-alt"></i>
                <i id="landscape-arrow" className="fas fa-arrow-right"></i>
                <i id="landscape-icon" className="fas fa-mobile-alt"></i>
            </div>

        </div>



    );

}



function Editor() {

    function getOrientation() {

        return window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape';

    }

    function handleOrientationChange(event) {

        event.preventDefault();

        setOrientation(getOrientation());

    }

    let [ orientation, setOrientation ] = useState(getOrientation());


    useEffect(() => {

        window.addEventListener("resize", handleOrientationChange);

        return function() {

            window.removeEventListener("resize", handleOrientationChange);

        }

    });

    return (

        <div id="editor">

            { orientation === 'portrait' && <Portrait/> }

            { orientation === 'landscape' && <Landscape/> }

        </div>

    );

}


export default Editor;