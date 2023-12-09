import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.js"
import "../../../index.css"
import "./../AugmentedReality.css"
import sondagem4Img from '../../../resources/images/alignmentImages/sondagem4A.png';
import { setOrientation, loadModel, cleanCamera, cleanModel } from '../../../utils/utils.js';
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

  // Cleanup resources
  const handleCleanup = () => {
    //clean up model
    let entity = entityRef.current;
    if (entity) {
      const object3D = entityRef.current.object3D.children.find(child => child === model);
      if (object3D) {
        // dispose geometry and materials
        cleanModel(object3D);

        // remove the model from the entity
        entity.object3D.remove(object3D);
        setModel(null);
      }
    }
    // clear references
    entity = null;
    entityRef.current = null;

    const scenes = document.querySelectorAll('a-scene');
    scenes.forEach(scene => {
      scene.remove();
    });

    // clean up camera
    cleanCamera();
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
      <TopButtons hideFullScreenButton={true} cleanUp={handleCleanup} backUrl={backUrl} label={label} />
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