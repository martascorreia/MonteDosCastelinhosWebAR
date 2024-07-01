import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.js"
import "../../../index.css"
import "./../AugmentedReality.css"
import { loadModel, handleCleanup, setFullScreen } from '../../../utils/utils.js';
import PopUp from '../../../components/PopUp/PopUp.js';

function Sondagem4A({ backUrl }) {
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isModelSet, setIsModelSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sceneRef = useRef();
  const entityRef = useRef();
  const entityParentRef = useRef();
  const cameraRef = useRef();
  const [label, setLabel] = useState(null);
  const [cameraOrientation, setCameraOrientation] = useState(null);
  const [instructionsOk, setInstructionsOk] = useState(false);

  const handleModelAligned = () => {
    setCameraOrientation(cameraRef.current.object3D.rotation.clone());
    setModelAligned(true);
    setLabel("Vista Frontal");
  };

  useEffect(() => {
    if (!isLoading && sceneRef.current) {
      const sceneEl = sceneRef.current;
      const arSystem = sceneEl.systems["mindar-image-system"];
      sceneEl.addEventListener('renderstart', () => {
        arSystem.start(); // start AR 
      });
      return () => {
        arSystem.stop();
      }
    }
  }, [sceneRef.current]);

  useEffect(() => {
    localStorage.setItem('sondagem4ARAFlag', 'true');
    localStorage.setItem('hasRefreshed', 'false');

    if (model == null) {
      load3DModel();
    }
   /* if (model != null) {
      setModelInScene();
    }*/
  }, [model, modelAligned]);

  // Load model
  const load3DModel = () => {
    loadModel(process.env.PUBLIC_URL + '/models/sondagem4.smaller.glb')
      .then((loadedModel) => {
        setModel(loadedModel);
        setIsLoading(false);
        entityRef.current.object3D.add(model);
      })
      .catch((error) => {
        console.error('Error loading model:', error);
      });
  };

  // Set model
  const setModelInScene = () => {
    if (entityRef.current && cameraRef.current && entityParentRef.current) {
      entityRef.current.object3D.add(model);
      //entityRef.current.object3D.position.set(-90, -130, -580);
      //entityRef.current.object3D.scale.set(1.8, 1.8, 1.8);
      //entityRef.current.setAttribute('rotation', '7 -35 -7');
      //entityParentRef.current.object3D.rotation.set(cameraOrientation.x, cameraOrientation.y, cameraOrientation.z);
      setIsModelSet(true)
    }
  };

  const cleanUp = () => {
    handleCleanup(model, entityRef, document.querySelectorAll('a-scene'));
    setModel(null);
    setFullScreen(false);
  };

  return (
    <div className="AugmentedReality">
      <TopButtons hideFullScreenButton={true} cleanUp={() => cleanUp()} backUrl={backUrl} label={label} />
      {isLoading &&
        <LoadingScreen />}
      <div className="content">
        {!isLoading &&
          <a-scene
            mindar-image="imageTargetSrc: ./targets.mind; filterMinCF:0.0001; filterBeta: 0.001"
            vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false"
            embedded
            className="scene"
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortTransparentObjects: true;"
            xr-mode-ui='enabled: false'
            ref={sceneRef}>
            <a-camera
              ref={cameraRef} look-controls='enabled: true;' />
            <a-entity ref={entityParentRef} mindar-image-target="targetIndex: 0">
              <a-entity
                className="model"
                ref={entityRef}
                geometry-merger
                anchored="persistent: true" />
            </a-entity>
          </a-scene>}
      </div>
    </div >
  );
}
export default Sondagem4A;