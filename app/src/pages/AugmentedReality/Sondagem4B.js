import React, { useEffect, useState } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"

import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4B.png';
import sondagem4B from '../../resources/models/sondagem4B.png';
import { setOrientation, cleanCamera } from '../../utils/utils.js';

function Sondagem4B() {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [label, setLabel] = useState(null);

  const handleButtonClick = () => {
    cleanCamera();
    setModelAligned(true);
    setLabel("Vista Central");
  };

  // Cleanup resources
  const handleCleanup = () => {
    cleanCamera();
  };

  useEffect(() => {
    localStorage.setItem('sondagem4ARBFlag', 'true');
    localStorage.setItem('hasRefreshed', 'false');
  });

  return (
    <div className="AugmentedReality">
      <TopButtons cleanUp={handleCleanup} backUrl={"/sondagem4/raTab"} label={label} />
      {modelAligned &&
        <div className="content">
          <a-scene className="scene"
            embedded
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            vr-mode-ui='enabled: false'>
            <a-camera
              rotation-reader
              look-controls="touchEnabled: true; mouseEnabled: true;" />
            <a-image
              src={sondagem4B}
              position="0 1 -7.7"
              scale="21 5.5 0"
              material="transparent: true; blending: normal"
            />
            {false &&
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img} />
              </div>}
          </a-scene>
        </div>}
      {!modelAligned &&
        <div className="content">
          <a-scene
            className="scene"
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            vr-mode-ui='enabled: false'>
            <a-camera
              rotation-reader
              look-controls="touchEnabled: false; mouseEnabled: false;" />
          </a-scene>
          <div className="alignElements">
            <img className="alignImage" src={sondagem4Img} />
            <button className="alignedBtn" onClick={handleButtonClick}>
              Alinhado
            </button>
          </div>
        </div>}
    </div >
  );
}
export default Sondagem4B;