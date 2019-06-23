import React, { useEffect, useRef } from 'react'

// import SceneManager from '../../../../scene/manager.js

function Canvas() {

    let canvas = useRef(null);

    setCanvas = element => {
        canvas = element;
    }

    useEffect(() => {

        // Three.js code goes here

    });

    return (

        <div id="canvas-container" ref={setCanvas}></div>

    );

}


export default Canvas;