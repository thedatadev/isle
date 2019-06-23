
var camera,                 // The viewport into the 3D space
    scene,                  // Container for all 3D objects
    renderer,               // Makes 3D objects inside the scene visible to the camera
    canvas,                 // HTML element representing the renderer
    light,                  // Directional light
    cameraControls,         // Enables camera movement
    orbitControls,          // Enables room rotation
    deviceControls,         // Enables magic window effect
    dragDropControls,       // Drag and drop controls for canvas
    objectPanelControls,    // Drag and drop controls for object panel
    panel,                  // Panel displaying all drag-and-drop items
    plane;                  // Plane surface to drag and drop objects on

var objects = [];

var loader = new THREE.GLTFLoader();

function init() {
    /* 
    The init() method initializes values for the necessary variables: camera, scene and renderer.
    In addition, it initializes values for extra tools and features such as controls and lighting.
    */ 

    // ------------ Camera ------------
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

    // ------------ Scene ------------
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );

    // ------------ Renderer ------------
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas = renderer.domElement;

    // ------------ Extras ------------

    // Orbit Controls
    orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
    orbitControls.rotateSpeed = 1 / 2;
    orbitControls.enableZoom = true;
    orbitControls.zoomSpeed = 1 / 2;
    orbitControls.minPolarAngle = Math.PI / 3;
    orbitControls.maxPolarAngle = Math.PI / 3;

    // Set default camera controls to orbit controls
    cameraControls = orbitControls;

    // Light
    let directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set(1, 1, 2);
    scene.add( directionalLight );

}

function setup() {
    /* 
    The setup() method is responsible for setting up 3D objects in the scene
    before adding the renderer canvas to the dom and calling animate().
    */ 

    // ------------ Renderer ------------
    document.querySelector("#editor").appendChild( canvas );

    // ------------ Scene ------------
    addPlane();
    // addBox();
    addChair();
    // addRug();
    // addTable();
    // addBookshelf();

    // ------------ Camera ------------
    camera.position.set( 0, 0, 10 ); 
    cameraControls.update(); // controls.update() must be called after any manual changes to the camera's transform

    // ------------ Drag Drop Controls ------------
    dragDropControls = new PlaneDragControls( camera, objects, canvas, plane, cameraControls );

    // ------------ Object Panel Controls
    objectPanelControls = new PanelDragControls( canvas, objects, scene );

}

function animate() {
    /* 
    The animate() method continuously renders the scene to the camera.
    */ 

    requestAnimationFrame( animate );

    cameraControls.update(); // required if controls.enableDamping or controls.autoRotate are set to true

    renderer.render( scene, camera );

}

function addPlane() {
    /*
    Adds a plane to the scene
    */ 
    let planeGeometry = new THREE.PlaneGeometry( 5, 5, 5 );
    let planeMaterial = new THREE.MeshBasicMaterial( {
        // color: 0xf0f0f0,
        color: "rgb(190, 165, 155)", 
        side: THREE.DoubleSide
    } );
    plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.y = - 1;
    plane.rotation.x = Math.PI / 2;
    scene.add( plane );				
}

function addBox() {
    /*
    Adds a box to the scene
    */
    let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    let boxMaterial = new THREE.MeshPhongMaterial( {color: 'coral' } );
    let box = new THREE.Mesh( boxGeometry, boxMaterial );
    scene.add( box );
    objects.push( box );    
}

function addChair() {    

    // Load a glTF resource
    loader.load(
        // resource URL
        `static/glb/chair.glb`,
        // called when the resource is loaded
        function ( gltf ) {

            // scene.add( gltf.scene );
            // gltf.scene.scale.set( 0.01, 0.01, 0.01 );
            // gltf.scene.position.set( 2, -1, -2 );
            let objectModel = gltf.scene;

            scene.add(objectModel);

            objectModel.traverse( function( object ) {
            // https://discourse.threejs.org/t/gltf-loaded-object-drag-and-drop/2285/4

                if ( object.isMesh ) {

                    // scene.add( object );
                    object.scale.set( 0.05, 0.05, 0.05 );
                    object.rotation.set( 0, 0, -1.5708 );
                    object.position.set( 6, 6, 13 );

                    // object.scale.set( 0.01, 0.01, 0.01 );
                    // object.position.set( 0, -1, 0 );

                }
             
             } );

        },
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );
}

function addModel(model) {    

    // Load a glTF resource
    loader.load(
        // resource URL
        `static/glb/${model.name}.glb`,
        // called when the resource is loaded
        function ( gltf ) {

            let modelObject = gltf.scene;


            modelObject.traverse( function( object ) {
            // https://discourse.threejs.org/t/gltf-loaded-object-drag-and-drop/2285/4

                if ( object.isMesh ) {

                    scene.add( object );

                    object.scale.set( model.scale.x, model.scale.y, model.scale.z );
                    object.rotation.set( model.rotation.x, model.rotation.y, model.rotation.z );
                    object.position.set( model.position.x, model.position.y, model.position.z );

                    objects.push( object );

                }
             
             } );

        }, undefined, undefined
    );
}

function addBookshelf() {

    addModel({
        name: "bookshelf",
        scale: {
            x: 0.01,
            y: 0.01,
            z: 0.01
        },
        rotation: {
            x: -1.5708,
            y: 0,
            z: 3.14159
        },
        position: {
            x: 2,
            y: -1,
            z: -2
        }
    });

}

function addRug() {

    addModel({
        name: "rug",
        scale: {
            x: 0.01,
            y: 0.01,
            z: 0.01
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        position: {
            x: 0,
            y: -1,
            z: 0
        }
    });  

}

function addTable() {

    addModel({
        name: "table",
        scale: {
            x: 1,
            y: 1,
            z: 1
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        },
        position: {
            x: -1,
            y: -1,
            z: 2
        }
    });

}


function setupVRMode() {

    const vrModeButton = document.querySelector("#vr-mode");

    vrModeButton.addEventListener("click", function() {

        panel.style.display = "none";

        camera.position.set( 0, 0, 0 );


        function setOrientationControls(e) {

            if ( !e.alpha ) {
              return;
            }
  
            deviceControls = new THREE.DeviceOrientationControls( camera, true );
            cameraControls = deviceControls;
            cameraControls.connect();
            cameraControls.update();
  
            window.removeEventListener('deviceorientation', setOrientationControls, true);
          }
          window.addEventListener('deviceorientation', setOrientationControls, true);


    });

}


document.addEventListener( "DOMContentLoaded", function() {

    panel = document.querySelector( "#panel" );

    init();
    setup();
    animate();
    setupVRMode();
    
});