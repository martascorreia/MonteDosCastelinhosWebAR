import React, { useState, useRef, useEffect, useCallback } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.3.png';
import sondagem43 from '../../resources/models/sondagem4.3.png';
import { setOrientation, loadModel, cleanCamera } from '../../utils/utils.js';
import { isBrowser, isMobile } from 'react-device-detect';

function Sondagem43() {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const entityRef = useRef();

  const handleButtonClick = () => {
    setModelAligned(true);
  };

  useEffect(() => {
    if (modelAligned && model == null && isBrowser) {
      setIsLoading(true);
      load3DModel();
    }
  }, [modelAligned]);

  // Load model
  const load3DModel = () => {
    loadModel(process.env.PUBLIC_URL + '/models/sondagem4.3.smaller.glb', false)
      .then((loadedModel) => {
        if (entityRef.current) {
          entityRef.current.object3D.add(loadedModel);
          entityRef.current.object3D.position.set(90, -460, 220);
          entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
          entityRef.current.setAttribute('rotation', '25 35 18');
          setIsLoading(false);
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
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4/raTab"} />
      <div className="content">
        <a-scene className="scene" embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          {isMobile && <a-camera rotation-reader look-controls="touchEnabled: false; mouseEnabled: false;" />}
          {isBrowser && modelAligned &&
            <div className="alignElements">
              <img className="alignImage" src={sondagem4Img} />
            </div>}
          {isBrowser && modelAligned &&
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
              material="shader: flat" />}
          {isMobile && modelAligned &&
            <a-image
              src={sondagem43}
              position="0 1 -7.7"
              scale="21 5.5 0"
              material="transparent: true; blending: normal"
            ></a-image>}
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
export default Sondagem43;