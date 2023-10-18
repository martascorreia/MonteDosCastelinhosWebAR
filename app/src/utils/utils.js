export const setOrientation = (type) => {
    const isMobile = navigator.userAgentData.mobile;
    if (!isMobile) return;

    var typeLock = type == "landscape" ? "landscape-primary" : "portrait-primary"
    screen.orientation.lock(typeLock)
        .then(function () { })
        .catch(function (error) { });
}

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
var modelCache = {};

export const loadModel = async (modelPath) => {
    //model already loaded
    if (modelCache[modelPath]) {
        return modelCache[modelPath];
    }

    //load model
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(modelPath, (glb) => {
            const model = glb.scene;
            modelCache[modelPath] = model;
            resolve(model);
        }, null, reject);
    });
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

