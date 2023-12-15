import React, { useEffect, useState } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import "../../../index.css"
import "./../AugmentedReality.css"
import sondagem4Img from '../../../resources/images/alignmentImages/sondagem4B.png';
import sondagem4B from '../../../resources/models/sondagem4B.png';
import { setOrientation, cleanCamera } from '../../../utils/utils.js';
import AligmentButton from '../../../components/AlignmentButton/AligmnentButton.js';

function Sondagem4B({backUrl}) {
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
    //clean scene
    const scenes = document.querySelectorAll('a-scene');
    scenes.forEach(scene => {
      scene.remove();
    });

    // clean camera
    cleanCamera();
  };

  useEffect(() => {
    localStorage.setItem('sondagem4ARBFlag', 'true');
    localStorage.setItem('hasRefreshed', 'false');
  });

  return (
    <div className="AugmentedReality">
      <TopButtons hideFullScreenButton={true} cleanUp={handleCleanup} backUrl={backUrl} label={label} />
      {modelAligned &&
        <div className="content">
          <a-scene className="scene"
            embedded
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            xr-mode-ui='enabled: false'>
            <a-camera
              position="0 0 0"
              rotation="-30 -100 0"
              look-controls="touchEnabled: true; mouseEnabled: true;" />
            <a-entity rotation="0 0 0">
              <a-image
                src={sondagem4B}
                position="0 0 -7.5"
                scale="30 7 0"
                rotation="0 0 -3"
                material="transparent: true; blending: normal"
              />
              {true &&
                <div className="alignElements">
                  <img className="alignImage" src={sondagem4Img} />
                </div>}
            </a-entity>
          </a-scene>
        </div>}
      {!modelAligned &&
        <div className="content">
          <a-scene
            className="scene"
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            xr-mode-ui='enabled: false'>
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
export default Sondagem4B;