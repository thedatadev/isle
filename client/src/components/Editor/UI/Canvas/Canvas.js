import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import playScene from './scene/scene'

import './Canvas.css'


function addObjects() {



}


function Canvas() {

    let container = useRef(null);

    function setCanvas(element) {
        container = element;
    }

    useEffect(() => {

        // Three.js code goes here
        playScene(container, addObjects)

    });

    // TODO: Fix premature rendering of canvas
    
    return (

        <div id="canvas-container" ref={setCanvas}></div>

    );

}


export default Canvas;