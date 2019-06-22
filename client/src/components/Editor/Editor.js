import React from 'react'
import ReactSVG from 'react-svg'

import './Editor.css'


function Editor() {

    return (

        <div id="editor">

            <div id="editor-landscape">
                <h1>Welcome to the editor!</h1>
            </div>

            <div id="editor-portrait">
                <h1>Please switch to landscape mode!</h1>
                <ReactSVG src="./static/portrait-to-landscape.svg" />
            </div>



        </div>

    );

}


export default Editor;