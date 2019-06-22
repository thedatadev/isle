import React from 'react'

import './Editor.css'


function Editor() {

    return (

        <div id="editor">

            <div id="editor-landscape">
                <h1>Welcome to the editor!</h1>
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