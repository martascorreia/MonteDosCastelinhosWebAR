export const setOrientation = (type) => {
    //const isMobile = navigator.userAgentData.mobile;
    // if (!isMobile) return;
   /* if (screen.orientation !== undefined && screen.orientation.lock !== undefined) {
        var typeLock = type == "landscape" ? "landscape-primary" : "portrait-primary"
        screen.orientation.lock(typeLock)
            .then(function () { })
            .catch(function (error) { });
    }*/

    var typeLock = type == "landscape" ? "landscape-primary" : "portrait-primary"
    require('o9n').orientation.lock(typeLock)
            .then(function () { })
            .catch(function (error) { });
}

export const reloadPage = () => {
    window.location.reload();
}

export const garbageCollect = () => {
    if (typeof window.gc === 'function') {
        window.gc();
    } else {
        console.warn('Garbage collection is not supported in this browser.');
    }
}

export const isFullScreen = () => {
    return document.fullscreenElement != null;
}

export const setFullScreen = (setFullScreen) => {
    //full -> normal
    if (isFullScreen() && !setFullScreen) {
        document.exitFullscreen();

        //normal -> full
    } else if (!isFullScreen() && setFullScreen) {
        document.body.requestFullscreen();
    }
}

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadModel = async (modelPath) => {
    //load model
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(modelPath, (glb) => {
            const model = glb.scene;
            resolve(model);
        }, null, reject);
    });
};

export const setCamera = () => {
    const videoElement = document.getElementById('webcam');
    // Check if getUserMedia is available in the browser
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Specify the constraints to use the back camera
        const constraints = {
            video: {
                facingMode: 'environment', // Use the back camera
            },
        };

        // Request access to the camera with the specified constraints
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                // Assign the stream to the video element
                videoElement.srcObject = stream;
            })
            .catch(function (error) {
                console.error('Error accessing the back camera:', error);
            });
    } else {
        console.error('getUserMedia is not supported in this browser');
    }
}


export const cleanSondagemFlags = () => {
    //VR
    localStorage.setItem('sondagem4VRAFlag', 'false');
    localStorage.setItem('sondagem4VRBFlag', 'false');
    localStorage.setItem('sondagem4VRCFlag', 'false');
    localStorage.setItem('sondagem4VRDFlag', 'false');
    localStorage.setItem('sondagem4VREFlag', 'false');

    //AR
    localStorage.setItem('sondagem4ARAFlag', 'false');
    localStorage.setItem('sondagem4ARBFlag', 'false');
    localStorage.setItem('sondagem4ARCFlag', 'false');
}


export const handleCleanup = (model, entityRef, scenes) => {
    //clean model
    let entity = entityRef.current;
    if (entity) {
        const object3D = entityRef.current.object3D.children.find(child => child === model);
        if (object3D) {
            // dispose geometry and materials
            cleanModel(object3D);

            // remove the model from the entity
            entity.object3D.remove(object3D);
        }
    }

    // clear references
    entity = null;
    entityRef.current = null;

    //clean scene
    scenes.forEach(scene => {
        scene.remove();
    });

    // clean camera
    cleanCamera();
};

export const cleanModel = (object3D) => {
    if (object3D) {
        object3D.traverse((node) => {
            if (node.isMesh) {
                node.geometry.dispose();
                node.material.dispose();
            }
        });
    }
};

export const cleanCamera = () => {
    const elementsToRemove = document.querySelectorAll("video");
    elementsToRemove.forEach(element => {
        if (!element.paused) {
            element.pause();
        }
        element.remove();
    });
};

export const getUserLocation = () => {
   /* return {
        lat: 39.012603,
        lng: -8.973466,
    };*/
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            return location;
        });
    }
    return null;
};

export const isUserWithinBounds = (userLocation) => {
    if (!userLocation) return false;
    var mapBounds = getMapBounds();

    return (
        userLocation.lat >= mapBounds.swLat &&
        userLocation.lat <= mapBounds.neLat &&
        userLocation.lng >= mapBounds.swLng &&
        userLocation.lng <= mapBounds.neLng
    );
};

export const getMapBounds = () => {
    return {
        swLat: 39.010969,
        neLat: 39.013578,
        swLng: -8.979158,
        neLng: -8.972700
    }
};