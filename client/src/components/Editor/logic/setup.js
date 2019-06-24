// Dependencires - node_modules
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls'


// Dependencies - internal libs
import { PlaneDragControls } from './PlaneDragControls'


function setupEditor() {

    // ------------ Private variables ----------------

    let scene, camera, renderer;

    let cameraControls, orbitControls;

    let dragControls, plane;

    let loader;

    let objects = []; 
    
    // ------------ Setting up the editor scene ----------------

    // Initialise all the basic three.js elements
    scene = new THREE.Scene();
    scene.background = new THREE.Color( "aliceblue" );
    // camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 5, 0 ); 
    renderer = new THREE.WebGLRenderer();

    // Model GLTF/GLB Loader
    loader = new GLTFLoader();

    // Set up the canvas, scene, lighting etc.
    let canvas = renderer.domElement;
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

    // Render plane
    let planeGeometry = new THREE.PlaneGeometry( 10, 10, 10 );
    let planeMaterial = new THREE.MeshBasicMaterial( {
        color: "rgb(190, 165, 155)", 
        side: THREE.DoubleSide
    } );
    plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.rotation.x = Math.PI / 2;
    scene.add( plane );	


    // Plane Drag Controls
    dragControls = new PlaneDragControls( camera, objects, canvas, plane, cameraControls );

    // ------------ Private functions -----------------

    function loadModel(model) {

        console.log("loading -----> ", model);

        loader.load( model.uri, function (gltf) {

            gltf.scene.traverse( function( object ) {
    
                if ( object.isMesh ) {

                    scene.add( object );

                    console.log(object);
                    object.scale.set( object.scale.x * 0.5, 
                                      object.scale.y * 0.5, 
                                      object.scale.z * 0.5 );
                    object.position.set( object.position.x * 0.5, 
                                         object.position.y * 0.5, 
                                         object.position.z * 0.5 );

                    objects.push( object );

                }
                
            } );

        });

    }

    function animate() {
        // Animate the scene
        requestAnimationFrame( animate );

        cameraControls.update()

        renderer.render( scene, camera );
    }


    // ------------ Public functions -----------------

    return {

        mountCanvas: (canvasContainer) => {

            canvasContainer.appendChild(canvas)

        },

        addObject: (model) => {

            loadModel(model)

            // NOTE: re-instantition is required each time a new object is added to the scene and objects array
            dragControls = new PlaneDragControls( camera, objects, canvas, plane, cameraControls );

        },

        animate: animate,

        enterVR: () => {

            // NOTE: HTTPs is required to detect deviceorientation events

            document.querySelector("#panel").style.display = "none";
        
            camera.position.set( 0, -2, 5 );


            function setOrientationControls(e) {
    
                if ( !e.alpha ) {
                    return;
                }
        
                cameraControls = new DeviceOrientationControls( camera, true );
                cameraControls.connect();
                cameraControls.update();
        
                window.removeEventListener('deviceorientation', setOrientationControls, true);
            }

            window.addEventListener('deviceorientation', setOrientationControls, true);
    
        }


    };

}

export default setupEditor;




































