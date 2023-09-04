import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./VirtualReality.css"
import WASPButtons from '../../components/WASPButtons/WASPButtons.js';
import { setOrientation, loadModel } from '../../utils/utils.js';

function VirtualReality() {
  setOrientation("landscape");
  const [modelLoaded, setModelLoaded] = useState(false);
  const entityRef = useRef();

  useEffect(() => {
    if (!modelLoaded)
      load3DModel();
  }, []);

  // Load model
  const load3DModel = () => {
    loadModel(process.env.PUBLIC_URL + '/models/sondagem4.smaller.glb', true)
      .then((loadedModel) => {
        if (entityRef.current) {
          entityRef.current.object3D.add(loadedModel);
          entityRef.current.object3D.position.set(-550, -215, -15);
          entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
          entityRef.current.setAttribute('rotation', '0 -50 0');
          setModelLoaded(true);
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
    <div className="VirtualReality">
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4"} />
      <WASPButtons />
      <div className="content">
        <a-scene className="scene" embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          <a-entity
            className="model"
            ref={entityRef}
            geometry-merger
            material="shader: flat" />
          <a-entity id="camera" camera look-controls="touchEnabled: false; mouseEnabled: true;" touch-controls />
        </a-scene>
      </div >
    </div>
  );
}
export default VirtualReality;