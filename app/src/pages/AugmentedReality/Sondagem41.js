import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js"

import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import { setOrientation, loadModel, cleanCamera } from '../../utils/utils.js';
import { isBrowser, isMobile } from 'react-device-detect';

function Sondagem41() {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();

  const handleButtonClick = () => {
    setModelAligned(true);
  };

  useEffect(() => {
    if (model == null) {
      load3DModel();
    }
    if (modelAligned && model != null) {
      setModelInScene();
    }
  }, [model, modelAligned]);

  // Load model
  const load3DModel = () => {
    loadModel(process.env.PUBLIC_URL + '/models/sondagem4.smaller.glb', true)
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
      entityRef.current.object3D.position.set(-480, -300, -500);
      entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
      entityRef.current.setAttribute('rotation', '0 -50 0');
    }
  };

  // Cleanup resources
  const handleCleanup = () => {
    cleanCamera();
    entityRef.current = null;
  };

  return (
    <div className="AugmentedReality">
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4/raTab"} />
      {isLoading &&
        <LoadingScreen />}
      {!isLoading && <div className="content">
        <a-scene className="scene" embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          {isMobile && <a-camera rotation-reader look-controls="touchEnabled: false; mouseEnabled: false;" wasd-controls="enabled: false" />}
          {modelAligned &&
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
              material="shader: flat" />}
          {modelAligned &&
            <div className="alignElements">
              <img className="alignImage" src={sondagem4Img} />
            </div>}
        </a-scene>
        {!modelAligned &&
          <div className="alignElements">
            <img className="alignImage" src={sondagem4Img} />
            <button className="alignedBtn" onClick={handleButtonClick}>
              Alinhado
            </button>
          </div>}
      </div >
      }
    </div >
  );
}
export default Sondagem41;