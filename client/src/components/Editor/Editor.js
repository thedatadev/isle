import React from 'react'

import './Editor.css'

import Canvas from './UI/Canvas/Canvas'
import Panel from './UI/Panel/Panel'

function EditorUI() {

    // TODO:

    // 1. Replace EditorUI with Canvas

    // 2. Invoke a setupCanvas function from scene/scene

    // 3. Return a canvas object with public methods including 'loadModel'

    // 4. Pass canvas.loadModel into Panel i.e. <Panel loadModel={canvas.loadModel}/>

    return (

        <div id="editor-ui">

            <Canvas />

            <Panel />

        </div>

    );

}


function Editor() {

    return (

        <div id="editor">

            <div id="editor-landscape">
                
                {/* <Canvas /> */}
                <EditorUI />

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