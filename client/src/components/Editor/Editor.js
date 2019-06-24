import React, { useState, useEffect, useRef } from 'react'

import './Editor.css'

import Panel from './UI/Panel/Panel'
import setupEditor from './UI/Canvas/scene/scene2'


// function EditorUI() {

//     /** 
//      * Problem:
//      * 
//      * We need the scene to instantiate before render so that we can pass 
//      * it down to the Panel component.
//      * 
//      * The canvas must be appended to the container once the container 
//      * has fully rendered/mounted, or else we would be trying to append to null
//      * 
//      * */ 


//     //  SOLUTION: Re-design the structure of this component tree from the ground up!

//     let container = useRef(null);

//     let canvas;

//     useEffect(() => {

//         // NOTE: useLayoutEffect may be better for large components because we need 
//         //       the component to render before we can setup the canvas container
//         let canvas = setupCanvas(container);

//         console.log("canvas hook", canvas);

//     });

//     console.log("canvas out", canvas);
    
    
//     return (

//         <div id="editor-ui">

//             {/* TODO: turn this into its own standalone component?... */}
//             <div id="canvas-container" ref={element => container = element}></div>

//             <Panel canvas={canvas}/>

//         </div>

//     );

// }


function Scene(props) {

    let canvasContainer = useRef(null);

    useEffect(() => {

        props.mountCanvas(canvasContainer);

        props.animate();

    });

    return (

        <div id="canvas-container" ref={ element => canvasContainer = element }></div>

    );

}


function EditorUI2() {

    const editor = setupEditor();

    console.log(editor);

    return (

        <div id="editor-ui">

            <Scene mountCanvas={editor.mountCanvas} animate={editor.animate} />


            <Panel addObject={editor.addObject}/>

        </div>


    );

}

function Editor() {

    return (

        <div id="editor">

            <div id="editor-landscape">
                
                <EditorUI2 />

            </div>

            <div id="editor-portrait">
                <div>Please switch to landscape mode</div>
                <div id="portrait-to-landscape">
                    <i className="fas fa-mobile-alt"></i>
                    <i id="landscape-arrow" className="fas fa-arrow-right"></i>
                    <i id="landscape-icon" className="fas fa-mobile-alt"></i>
                </div>
            </div>

        </div>

    );

}


export default Editor;