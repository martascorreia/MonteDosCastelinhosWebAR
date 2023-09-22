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
    //if already loaded
    if (modelCache[modelPath]) {
        console.log("has model")
        return modelCache[modelPath];
    }

    console.log("no model cached")

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

export const cleanModel = (model) => {
    if (model) {
        model.traverse((node) => {
            if (node.isMesh) {
                node.geometry.dispose();
                if (Array.isArray(node.material)) {
                    node.material.forEach(material => {
                        disposeMaterial(material);
                    });
                } else {
                    disposeMaterial(node.material);
                }
            }
        });
    }

    // Manually trigger garbage collection
    if (typeof window.gc === 'function') {
        window.gc();
    }
};

function disposeMaterial(material) {
    if (material.map) {
        material.map.dispose();
    }

    if (material.alphaMap) {
        material.alphaMap.dispose();
    }

    material.dispose();
}

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
