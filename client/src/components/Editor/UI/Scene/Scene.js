import React, { useEffect, useRef } from 'react'


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

export default Scene;