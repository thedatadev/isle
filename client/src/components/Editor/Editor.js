import React from 'react'

import './Editor.css'

import Panel from './ui/Panel/Panel'
import Scene from './ui/Scene/Scene'

import setupEditor from './logic/setup'



function EditorUI() {

    const editor = setupEditor();

    return (

        <div id="editor-ui">

            <Scene mountCanvas={editor.mountCanvas} animate={editor.animate} />

            <Panel addObject={editor.addObject}/>

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

    return (

        // TODO: proper conditional rendering

        <div id="editor">

            <Portrait/>

            <Landscape/>

        </div>

    );

}


export default Editor;