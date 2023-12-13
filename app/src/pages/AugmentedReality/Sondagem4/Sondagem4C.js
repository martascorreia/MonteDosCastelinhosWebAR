import React, { useState, useRef, useEffect, } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.js"
import "../../../index.css"
import "./../AugmentedReality.css"
import sondagem4Img from '../../../resources/images/alignmentImages/sondagem4C.png';
import { setOrientation, loadModel, cleanCamera, cleanModel } from '../../../utils/utils.js';
import AligmentButton from '../../../components/AlignmentButton/AligmnentButton.js';

function Sondagem4C({ backUrl }) {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isModelSet, setIsModelSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();
  const [label, setLabel] = useState(null);

  const handleButtonClick = () => {
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
      entityRef.current.object3D.position.set(85, -145, -660);
      entityRef.current.object3D.scale.set(3, 3.33, 3);
      entityRef.current.setAttribute('rotation', '5 65 17');
      setIsModelSet(true)
    }
  };

  const cleanUp = () => {
    handleCleanup(model, entityRef, document.querySelectorAll('a-scene'));
    setModel(null);
    setFullScreen(false, true);
  };

    }
  };

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
            vr-mode-ui='enabled: false'>
            <a-camera
              position="0 0 0"
              rotation="0 0 0"
              look-controls="touchEnabled: true; mouseEnabled: true;">
              <a-entity rotation="0 0 0" />
            </a-camera>
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
            />
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
            vr-mode-ui='enabled: false'>
            <a-camera />
          </a-scene>
          <div className="alignElements">
            <img className="alignImage" src={sondagem4Img} />
            <AligmentButton onClick={handleButtonClick} />
          </div>
        </div>}
    </div>
  );
}
export default Sondagem4C;