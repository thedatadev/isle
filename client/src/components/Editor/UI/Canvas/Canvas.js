import React, { useEffect, useRef } from 'react'

import playScene from './scene/scene'

import './Canvas.css'


function Canvas() {

    let container = useRef(null);

    function setCanvas(element) {
        container = element;
    }

    useEffect(() => {

        // Three.js code goes here
        playScene(container)

    });

    return (

        <div id="canvas-container" ref={setCanvas}></div>

    );

}


export default Canvas;