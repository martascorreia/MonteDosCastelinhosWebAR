import React, { useEffect, useRef, useState } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import "../../../index.css"
import "./../AugmentedReality.css"
import sondagem4Img from '../../../resources/images/alignmentImages/sondagem4B.jpeg';
import sondagem4ImgLines from '../../../resources/images/alignmentImages/sondagemBLines.png';
import sondagem4B from '../../../resources/models/sondagem4B.png';
import { setOrientation, cleanCamera } from '../../../utils/utils.js';
import AligmentButton from '../../../components/AlignmentButton/AligmnentButton.js';

function Sondagem4B({ backUrl }) {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [label, setLabel] = useState(null);
  const entityRef = useRef();
  const entityParentRef = useRef();
  const cameraRef = useRef();
  const [cameraOrientation, setCameraOrientation] = useState(null);

  const handleModelAligned = () => {
    if (cameraRef.current)
      setCameraOrientation(cameraRef.current.object3D.rotation.clone());
    setModelAligned(true);
    setLabel("Vista Central");
  };

  useEffect(() => {
    localStorage.setItem('sondagem4ARBFlag', 'true');
    localStorage.setItem('hasRefreshed', 'false');

    if (modelAligned) {
      setModelInScene();
    }
  }, [modelAligned]);

  // Set model
  const setModelInScene = () => {
    if (cameraRef.current && entityParentRef.current) {
      entityParentRef.current.object3D.rotation.set(cameraOrientation.x, cameraOrientation.y, cameraOrientation.z);
    }
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

    //references
    entityRef = null;
    cameraRef = null;
    entityParentRef = null;
  };

  return (
    <div className="AugmentedReality">
      <TopButtons hideFullScreenButton={true} cleanUp={handleCleanup} backUrl={backUrl} label={label} />
      <div className="content">
        <a-scene className="scene"
          embedded
          renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortTransparentObjects: true;"
          xr-mode-ui='enabled: false'>
          <a-entity position="0 0 0" rotation="0 0 0">
            <a-camera
              ref={cameraRef} look-controls='enabled: true;' />
          </a-entity>
          {modelAligned &&
            <a-entity ref={entityParentRef}>
              <a-image
                src={sondagem4B}
                ref={entityRef}
                scale="30 7 0"
                rotation="0 0 0"
                position="0 -3 -7.5"
                material="transparent: true; blending: normal"
              />
            </a-entity>}
          {!modelAligned &&
            <div className="alignElements">
              <img className="alignImage" src={sondagem4ImgLines} />
              <AligmentButton onClick={() => handleModelAligned()} />
              <a className='aligmentText'>
                <b>Dica:</b> Alinhe-se entre as duas árvores acima, no centro do espaço vazio.
              </a>
            </div>}
          {modelAligned && false &&
            <div className="alignElements">
              <img className="alignImage" src={sondagem4Img} />

            </div>}
        </a-scene>
      </div>
    </div >
  );
}
export default Sondagem4B;