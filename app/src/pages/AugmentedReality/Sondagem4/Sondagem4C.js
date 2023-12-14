import React, { useState, useRef, useEffect, } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.js"
import "../../../index.css"
import "./../AugmentedReality.css"
import sondagem4Model from '../../../resources/models/sondagem4.smaller.glb';
import sondagem4ModelStraight from '../../../resources/models/sondagem4.smaller.straight.glb';
import sondagem4Img from '../../../resources/images/alignmentImages/sondagem4C.png';
import { setOrientation, loadModel, cleanCamera, handleCleanup, setFullScreen } from '../../../utils/utils.js';
import AligmentButton from '../../../components/AlignmentButton/AligmnentButton.js';
import * as THREE from 'three';
import { Math as ThreeMath } from 'three';

function Sondagem4C({ backUrl }) {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isModelSet, setIsModelSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();
  const alignmentCameraRef = useRef();
  const [alignmentCameraPosition, setAlignmentCameraPosition] = useState(null);
  const [alignmentCameraRotation, setAlignmentCameraRotation] = useState(null);
  const cameraRef = useRef();
  const [label, setLabel] = useState(null);

  const handleModelAligned = () => {
    setAlignmentCameraPosition(alignmentCameraRef.current.object3D.position.clone());
    setAlignmentCameraRotation(alignmentCameraRef.current.object3D.rotation.clone());
    cleanCamera();
    setModelAligned(true);
    setLabel("Vista da Retaguarda");
  };

  useEffect(() => {
    localStorage.setItem('sondagem4ARCFlag', 'true');
    localStorage.setItem('hasRefreshed', 'false');

    if (model == null) {
      load3DModel();
    }
    if (modelAligned && model != null) {
      setModelInScene();
    }
  }, [model, modelAligned]);

  // Load model
  const load3DModel = () => {
    loadModel(sondagem4ModelStraight)
      .then((loadedModel) => {
        setModel(loadedModel);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading model:', error);
      });
  };

  // Set model
  const setModelInScene = () => {
    if (entityRef.current && cameraRef.current) {
      entityRef.current.object3D.add(model);

      //position
      //alignmentCameraPosition.y × 180°/π = 57.29578°
      const cameraPosition = alignmentCameraPosition;
      entityRef.current.object3D.position.set(85, -145, -660);
      entityRef.current.object3D.scale.set(3, 3.33, 3);
      entityRef.current.setAttribute('rotation', '-5 90 10');
      cameraRef.current.setAttribute('rotation', '0 0 0');

      let controls = document.querySelector('a-camera').components['look-controls']
      controls.pitchObject.rotation.x = 0
      controls.yawObject.rotation.y = 0

      setIsModelSet(true)
    }
  };

  // Set model
  /*const setModelInScene = () => {
    if (entityRef.current && cameraRef.current) {
      // Get the camera's position and rotation
      const cameraPosition = alignmentCameraPosition;
      const cameraRotation = alignmentCameraRotation;

      console.log(alignmentCameraPosition, alignmentCameraRotation);

      // Convert rotation to radians
      const rotationRad = {
        x: cameraRotation.x,
        y: cameraRotation.y,
        z: cameraRotation.z,
      };
      
      // Calculate the position in front of the camera
      const distance = 0 // Adjust the distance as needed
      const frontPosition = {
        x: cameraPosition.x + distance * Math.sin(rotationRad.y),
        y: cameraPosition.y + distance * Math.sin(rotationRad.x),
        z: cameraPosition.z - distance * Math.cos(rotationRad.y)
      };

      console.log(frontPosition);

      // Set the object's position
      entityRef.current.object3D.position.set(85, -145, -660);

      // Set other properties as needed
      entityRef.current.object3D.scale.set(3, 3.33, 3);
      entityRef.current.setAttribute('rotation', '5 65 17');

      setIsModelSet(true);
    }
  };*/

  const cleanUp = () => {
    handleCleanup(model, entityRef, document.querySelectorAll('a-scene'));
    setModel(null);
    setFullScreen(false, true);
  };

  const printEntityPosition = () => {
    if (entityRef.current) {
      /*console.log('Model Position:', entityRef.current.object3D.position);
      console.log('Model Rotation:', entityRef.current.object3D.rotation);*/
    }
    if (cameraRef.current) {
      console.log('Camera Position:', cameraRef.current.object3D.position);
      console.log('Camera Rotation:', cameraRef.current.object3D.rotation);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(printEntityPosition, 10000);
    return () => {
      // Clean up interval on component unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="AugmentedReality">
      <TopButtons hideFullScreenButton={true} cleanUp={() => cleanUp()} backUrl={backUrl} label={label} />
      {(isLoading || (!isLoading && modelAligned && !isModelSet)) &&
        <LoadingScreen />}
      {!isLoading && modelAligned &&
        <div className="content">
          <a-scene className="scene"
            embedded
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            xr-mode-ui='enabled: false'>
            <a-entity>
              {/*<a-camera
                position="0 0 0"
                rotation="0 0 0"
                ref={cameraRef}
                look-controls="touchEnabled: true; mouseEnabled: true;">
      </a-camera>*/}
              <a-entity position="0 0 0" rotation="0 0 0">
                <a-camera
                  ref={cameraRef} look-controls='enabled: true' />
              </a-entity>
              <a-entity
                className="model"
                ref={entityRef}
                geometry-merger
                anchored="persistent: true"
              />
            </a-entity>
            {true &&
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img} />
              </div>}
          </a-scene>
        </div >}
      {!isLoading && !modelAligned &&
        <div className="content">
          <a-scene
            className="scene"
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            xr-mode-ui='enabled: false'>
            <a-camera ref={alignmentCameraRef} />
          </a-scene>
          <div className="alignElements">
            <img className="alignImage" src={sondagem4Img} />
            <AligmentButton onClick={() => handleModelAligned()} />
          </div>
        </div>}
    </div>
  );
}
export default Sondagem4C;