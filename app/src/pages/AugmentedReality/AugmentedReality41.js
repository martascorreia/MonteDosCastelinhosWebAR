import React, { useState, useRef, useEffect, useCallback } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import { setOrientation } from '../../utils.js';
import { loadModel } from '../../utils.js';

function AugmentedReality41() {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const entityRef = useRef();

  const handleButtonClick = () => {
    setModelAligned(true);
  };

  useEffect(() => {
    if (modelAligned && model == null) {
      setIsLoading(true);
      load3DModel();
    }
  }, [modelAligned]);

  // Load model
  const load3DModel = () => {
    loadModel(process.env.PUBLIC_URL + '/models/sondagem4.smaller.glb', true)
      .then((loadedModel) => {
        if (entityRef.current) {
          entityRef.current.object3D.add(loadedModel);
          entityRef.current.object3D.position.set(-480, -300, -500);
          entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
          entityRef.current.setAttribute('rotation', '0 -50 0');
          setIsLoading(false);
          setModel(loadedModel);
        }
      })
      .catch((error) => {
        console.error('Error loading model:', error);
      });
  };

  // Cleanup resources
  const handleCleanup = () => {
    cleanCamera();
    entityRef.current = null;
  };

  const cleanCamera = () => {
    const elementsToRemove = document.querySelectorAll("video");
    elementsToRemove.forEach(element => {
      if (!element.paused) {
        element.pause();
      }
      element.remove();
    });
  };

  return (
    <div className="AugmentedReality">
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4"} />
      <div className="content">
        <a-scene className="scene" embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          <a-camera rotation-reader look-controls="touchEnabled: false; mouseEnabled: false;" />
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
    </div>
  );
}
export default AugmentedReality41;