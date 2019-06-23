PanelDragControls = function( canvas, objects, scene ) {

    let panel = document.querySelector("#panel");
    let title = document.querySelector("#title");
    let panelObjects = panel.querySelectorAll(".object");
    let selected = null;

    function insert( object ) {
        objects.push( object );
        scene.add( object );
    }

    function addBox() {
        let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        let boxMaterial = new THREE.MeshPhongMaterial( { color: 'blue' } );
        let box = new THREE.Mesh( boxGeometry, boxMaterial );
        insert( box );
    }

    function addSphere() {
        let sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
        let sphereMaterial = new THREE.MeshPhongMaterial( { color: 'aliceblue' } );
        let sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        insert( sphere );
    }

    function addCylinder() {
        let cylinderGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 );
        let cylinderMaterial = new THREE.MeshPhongMaterial( { color: 'lime' } );
        let cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        insert( cylinder );
    }

    function addRing() {
        let ringGeometry = new THREE.RingGeometry( 0.5, 1, 32 );
        let ringMaterial = new THREE.MeshPhongMaterial( { 
            color: 'black', 
            side: THREE.DoubleSide 
        } );
        let ring = new THREE.Mesh( ringGeometry, ringMaterial );
        insert( ring );
    }

    function addPlane() {
        let planeGeometry = new THREE.PlaneGeometry( 1, 1, 32 );
        let planeMaterial = new THREE.MeshPhongMaterial( {
            color: 'pink',
            side: THREE.DoubleSide
        } );
        let plane = new THREE.Mesh( planeGeometry, planeMaterial );
        insert( plane );
    }

    function addCone() {
        let coneGeometry = new THREE.ConeGeometry( 1, 1, 32 );
        let coneMaterial = new THREE.MeshPhongMaterial( { color: 'yellow' } );
        let cone = new THREE.Mesh( coneGeometry, coneMaterial );
        insert( cone );
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

    function addChair() {

        addModel({
            name: "chair",
            scale: {
                x: 0.07,
                y: 0.07,
                z: 0.07
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            position: {
                x: 5,
                y: 5,
                z: 13
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
                x: 0,
                y: -1,
                z: 0
            }
        });

    }


    // Add an event listener to the canvas for dragover events
    canvas.addEventListener("dragover", function( event ) {

        event.preventDefault();

        if ( selected !== null ) {

            console.log(`Dragging object: ${selected}`);

        }
        

    });

    // Add an event listener to the canvas for drop events
    canvas.addEventListener("drop", function( event ) {

        event.preventDefault();

        if ( selected !== null ) {

            console.log(`Dropped object: ${selected}`);

            switch ( selected ) {

                case "box":
                    addBox();
                    break;

                case "sphere":
                    addSphere();
                    break;

                case "cylinder":
                    addCylinder();
                    break;

                case "ring":
                    addRing();
                    break;

                case "plane":
                    addPlane();
                    break;

                case "cone":
                    addCone();
                    break;

                // Furniture
                case "chair":
                    addChair();
                    break;

                case "rug":
                    addRug();
                    break;

                case "table":
                    addTable();
                    break;

                case "bookshelf":
                    addBookshelf();
                    break;

                default:

            }

            selected = null;

        }

    });

        
    // Add an event listener to each object in the object panel
    panelObjects.forEach(object => {

        object.addEventListener("dragstart", function( event ) {
    
            console.log(`Selected object: ${event.target.id}`);

            selected = event.target.id;
    
        });

        object.addEventListener("mouseover", function( event ) {

            title.innerText = event.target.id;

        });

        object.addEventListener("mouseout", function() {

            title.innerText = "Object Panel";

        });

    });
    
    
}