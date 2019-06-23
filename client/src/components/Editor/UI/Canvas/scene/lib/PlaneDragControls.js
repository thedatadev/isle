/*

    PlaneDragControls

    Given a PlaneGeometry object, enable dragging of objects along the planes surface.

*/ 

PlaneDragControls = function( camera, objects, canvas, plane, orbitControls ) {

    // --------------- State ---------------
    
    let mouse = new THREE.Vector2();

    let selected = null;
    let selectedOffsetFromPlane = new THREE.Vector3();

    let raycaster = new THREE.Raycaster();
    let intersection = null;

    let canvasBorder = canvas.getBoundingClientRect();



    // --------------- Helper ---------------

    function getMousePosition() {
        /*
        Converts 2D viewport mouse coordinates into 3D clipspace coordinates
        */

        mouse.x = ( ( event.clientX - canvasBorder.left ) / canvasBorder.width ) * 2 - 1;
        mouse.y = - ( ( event.clientY - canvasBorder.top ) / canvasBorder.height ) * 2 + 1;

    }


    function reorientRaycaster() {
        /*
        Sets the origin of the raycaster to the current mouse position
        */

        raycaster.setFromCamera( mouse, camera );

    }


    function selectNearestObject() {
        /*
        Selects the first object that the raycaster hits
        */ 

        let intersectingObjects = raycaster.intersectObjects( objects ); // TODO: handle adding new objects during runtime

        if ( intersectingObjects.length > 0 ) {

            selected = intersectingObjects[0];

        }

    }


    function raycasterIntersectsPlane() {
        /*
        Check if the raycaster hits the plane
        */ 

        let intersects = raycaster.intersectObject( plane );

        if ( intersects.length > 0 ) { // NOTE: .intersectObject returns an array despite its name

            intersection = intersects[0];

            return true;
        }

        return false;

    }


    function updateOffsetFromPlane() {
        /*
        Measure the distance of the selected object from the plane
        */ 

        selectedOffsetFromPlane.subVectors( intersection.point, selected.object.position );

    }


    function updateSelectedPosition() {
        /*
        Position the selected object so it is completely visible on top of the plane's surface
        */ 

        selected.object.position.subVectors( intersection.point, selectedOffsetFromPlane );

    }



    // --------------- Event handlers ---------------

    function select( event ) {
        /*
        Selects an object in the canvas and enables drag and drop event listeners
        */ 

        event.preventDefault();

        console.log( "Event handler: select" );

        if ( selected === null ) {

            getMousePosition();
            reorientRaycaster();
            selectNearestObject();

            if ( selected !== null ) {

                if ( raycasterIntersectsPlane() ) {

                    updateOffsetFromPlane();

                }

                enable();

            }

        }

    }


    function drag( event ) {
        /*
        Updates the position of the currently selected object
        */ 

        console.log( "Event handler: drag" );

        event.preventDefault();

        getMousePosition();
        reorientRaycaster();

        if ( raycasterIntersectsPlane() ) {

            updateSelectedPosition();

            canvas.style.cursor = "move";

        } else {

            canvas.style.cursor = "no-drop";

        }


    }


    function drop( event ) {
        /*
        Resets selected object and turns off drag and drop event listeners
        */ 

        console.log( "Event handler: drop" );

        event.preventDefault();

        if ( selected !== null ) {

            selected = null;

            disable();

        }

    }

    // --------------- Event listeners ---------------

    function enable() {

        orbitControls.enabled = false;

        canvas.addEventListener( "mousemove", drag );
        canvas.addEventListener( "mouseup",   drop );

    }


    function disable() {

        canvas.removeEventListener( "mousemove", drag );
        canvas.removeEventListener( "mouseup",   drop );

        orbitControls.enabled = true;

        canvas.style.cursor = "auto";
        
    }


    // Listen for object selections
    canvas.addEventListener("mousedown", select);


}