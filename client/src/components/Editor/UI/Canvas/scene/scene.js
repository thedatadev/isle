// Dependencires - node_modules
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls'
// import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect'

// Dependencies - internal libs
import { PlaneDragControls } from './lib/PlaneDragControls'


function playScene(container, addObjects) {

    let scene, camera, renderer;

    let cameraControls, orbitControls, deviceControls;

    let dragControls, plane;

    let loader;

    let objects = [];

    function init() {
        // Initialise all the basic three.js elements
        scene = new THREE.Scene();
        scene.background = new THREE.Color( "aliceblue" );
        // camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.set( 0, 5, 0 ); 
        renderer = new THREE.WebGLRenderer();
    }

    function setupPlane() {

        let planeGeometry = new THREE.PlaneGeometry( 10, 10, 10 );
        let planeMaterial = new THREE.MeshBasicMaterial( {
            // color: 0xf0f0f0,
            color: "rgb(190, 165, 155)", 
            side: THREE.DoubleSide
        } );
        plane = new THREE.Mesh( planeGeometry, planeMaterial );
        // plane.position.y = - 1;
        plane.rotation.x = Math.PI / 2;
        scene.add( plane );	

    }
    
    function setup(container) {

        // Model GLTF/GLB Loader
        loader = new GLTFLoader();

        // Set up the canvas, scene, lighting etc.
        let canvas = renderer.domElement;
        container.appendChild(canvas)
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Retain aspect ratio upon resize
        camera.fov = Math.atan(window.innerHeight / 2 / camera.position.z) * 2 * THREE.Math.RAD2DEG;
        camera.aspect = window.innerWidth / window.innerHeight;

        // Light
        let directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
        directionalLight.position.set(1, 1, 2);
        scene.add( directionalLight );

        // Orbit Controls
        orbitControls = new OrbitControls( camera, canvas );
        orbitControls.rotateSpeed = 1 / 2;
        orbitControls.enableZoom = true;
        orbitControls.zoomSpeed = 1 / 2;
        orbitControls.minPolarAngle = Math.PI / 3;
        orbitControls.maxPolarAngle = Math.PI / 3;
        cameraControls = orbitControls;

        // Populate the scene
        populate();

        // Plane Drag Controls
        dragControls = new PlaneDragControls( camera, objects, canvas, plane, cameraControls );

        
    }

    function loadModel(model) {

        loader.load( model.uri, function (gltf) {

            let object = gltf.scene;

            scene.add( object );

            object.scale.set( model.scale.x, model.scale.y, model.scale.z );
            object.rotation.set( model.rotation.x, model.rotation.y, model.rotation.z );
            object.position.set( model.position.x, model.position.y, model.position.z );

            objects.push(object)

        });


    }

    function populate() {
        // Add object to the scene
        setupPlane()

        loadModel({
            id: "bed-id",
            name: "bed",
            uri: "https://cdn.glitch.com/56c001f0-5c8d-45df-a008-23bbde1d84a4%2Fbed.glb",
            position: { x: 0.0, y: 0.0, z: 0.0 },
            rotation: { x: 0.0, y: 0.0, z: 0.0 },
            scale:    { x: 0.5, y: 0.5, z: 0.5 },
        });


        // camera.position.z = 5;
    }

    function animate() {
        // Animate the scene
        requestAnimationFrame( animate );

        cameraControls.update()

        renderer.render( scene, camera );
    }

    init();

    setup(container);

    

    animate();

}



export default playScene;


