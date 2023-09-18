import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js"

import "../../index.css"
import "./VirtualReality.css"
import { setOrientation, loadModel } from '../../utils/utils.js';

function VirtualReality({ id }) {
  setOrientation("landscape");
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();

  useEffect(() => {
    if (model == null) {
      load3DModel();
    }
    if (model != null) {
      setModelInScene();
    }
  }, [model]);

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
      if (id == 1) entityRef.current.object3D.position.set(-550, -210, 60);  //A
      if (id == 2) entityRef.current.object3D.position.set(-550, -210, 160); //B
      if (id == 3) entityRef.current.object3D.position.set(-515, -225, 180); //C
      if (id == 4) entityRef.current.object3D.position.set(-480, -225, 215); //D
      if (id == 5) entityRef.current.object3D.position.set(-420, -235, 110);  //E
      entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
      entityRef.current.setAttribute('rotation', '0 -50 0');
    }
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
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4/rvTab"} />
      {isLoading &&
        <LoadingScreen />}
      {!isLoading &&
        <div className="content">
          <a-scene className="scene" embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
              material="shader: flat" />
            <a-camera look-controls="touchEnabled: true; mouseEnabled: true;" wasd-controls="acceleration: 100; fly: true" />
          </a-scene>
        </div >}
    </div>
  );
}
export default VirtualReality;