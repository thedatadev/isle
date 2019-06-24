// Dependencires - node_modules
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// Dependencies - internal libs
import { PlaneDragControls } from './lib/PlaneDragControls'


function setupEditor() {

    // ------------ Private variables ----------------

    let scene, camera, renderer;

    let cameraControls, orbitControls;

    let dragControls, plane;

    let loader;

    let objects = []; // NOTE: There may be a problem in dragging new objects added to this array
    
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

        // const editor = setupEditor();
        // <Panel loadModel={editor.loadModel}/>
        // <Scene mountCanvas={editor.mountCanvas}/>

        mountCanvas: (canvasContainer) => {

            console.log("mounting canvas!", canvasContainer)

            // In the Scene component,
            // call mountCanvas(containerRef) in a use(Layout)Effect hook

            canvasContainer.appendChild(canvas)

        },

        addObject: (model) => {

            loadModel(model)

        },

        animate: animate



    };

}

export default setupEditor;




































