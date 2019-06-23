import * as THREE from 'three'


function playScene(container) {

    let scene, camera, renderer;

    let cube;

    function addCube() {

        let geometry, material;

        geometry = new THREE.BoxGeometry( 1, 1, 1 );
        material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
    }

    function init() {
        // Initialise all the basic three.js elements
        scene = new THREE.Scene();
        scene.background = new THREE.Color( "aliceblue" );
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        renderer = new THREE.WebGLRenderer();
    }
    
    function setup(container) {
        // Set up the canvas, scene, lighting etc.
        let canvas = renderer.domElement;
        container.appendChild(canvas)
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.fov = Math.atan(window.innerHeight / 2 / camera.position.z) * 2 * THREE.Math.RAD2DEG;
        camera.aspect = window.innerWidth / window.innerHeight;
    }

    function populate() {
        // Add object to the scene
        addCube();

        camera.position.z = 5;
    }

    function animate() {
        // Animate the scene
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    init();

    setup(container);

    populate();

    animate();

}



export default playScene;


