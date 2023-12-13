import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.js"
import "../../../index.css"
import "./../AugmentedReality.css"
import sondagem4Img from '../../../resources/images/alignmentImages/sondagem4A.png';
import { setOrientation, loadModel, handleCleanup, cleanCamera, setFullScreen } from '../../../utils/utils.js';
import AligmentButton from '../../../components/AlignmentButton/AligmnentButton.js';

function Sondagem4A({ backUrl }) {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isModelSet, setIsModelSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();
  const cameraRef = useRef();
  const [label, setLabel] = useState(null);

  const handleButtonClick = () => {
    cleanCamera();
    setModelAligned(true);
    setLabel("Vista Frontal");
  };

  useEffect(() => {
    localStorage.setItem('sondagem4ARAFlag', 'true');
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
    loadModel(process.env.PUBLIC_URL + '/models/sondagem4.smaller.glb')
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
    if (entityRef.current) {
      entityRef.current.object3D.add(model);
      entityRef.current.object3D.position.set(-75, -90, -580);
      entityRef.current.object3D.scale.set(1.8, 1.8, 1.8);
      entityRef.current.setAttribute('rotation', '7 -35 -7');
      setIsModelSet(true)
    }
  };

  const cleanUp = () => {
    handleCleanup(model, entityRef, document.querySelectorAll('a-scene'));
    setModel(null);
    setFullScreen(false);
  };

  const printEntityPosition = () => {
    if (entityRef.current) {
      console.log('Model Position:', entityRef.current.object3D.position);
      console.log('Model Rotation:', entityRef.current.object3D.rotation);
    }
    if (cameraRef.current) {
      console.log('Camera Position:', cameraRef.current.object3D.position);
      console.log('Camera Rotation:', cameraRef.current.object3D.rotation);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(printEntityPosition, 5000);
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
          <a-scene
            embedded
            className="scene"
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            vr-mode-ui='enabled: false'>
            <a-entity>
              <a-camera
                position="0 0 0"
                rotation="0 0 0"
                ref={cameraRef}
                look-controls="touchEnabled: true; mouseEnabled: true;">
                <a-entity rotation="0 0 0"/>
              </a-camera>
              <a-entity rotation="0 0 0"
                className="model"
                ref={entityRef}
                geometry-merger
              />
            </a-entity>
            {true &&
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img} />
              </div>}
          </a-scene>
        </div>}
      {!isLoading && !modelAligned &&
        <div className="content">
          <a-scene
            embedded
            className="scene"
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            vr-mode-ui='enabled: false'>
            <a-camera />
          </a-scene>
          <div className="alignElements">
            <img className="alignImage" src={sondagem4Img} />
            <AligmentButton onClick={handleButtonClick}/>
          </div>
        </div>}
    </div >
  );
}
export default Sondagem4A;