import React, { useState, useRef, useEffect, useCallback } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.2.png';
import { setOrientation, loadModel, cleanCamera } from '../../utils/utils.js';
import { isBrowser, isMobile } from 'react-device-detect';

function Sondagem42() {
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
          entityRef.current.object3D.position.set(680, -490, -300);
          entityRef.current.object3D.scale.set(2, 2, 2);
          entityRef.current.setAttribute('rotation', '2 70 10');
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

  return (
    <div className="AugmentedReality">
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4"} />
      <div className="content">
        <a-scene className="scene" embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          {isMobile && <a-camera rotation-reader look-controls="touchEnabled: true; mouseEnabled: true;" />}
          {modelAligned &&
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
              material="shader: flat" />}
          {isBrowser && modelAligned &&
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
export default Sondagem42;