import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.js"
import "../../../index.css"
import "./../VirtualReality.css"
import { setOrientation, loadModel, cleanCamera, cleanModel } from '../../../utils/utils.js';

function VirtualReality({ id, label, backUrl }) {
  setOrientation("landscape");
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();

  useEffect(() => {
    localStorage.setItem('sondagem4VR' + id + 'Flag', 'true');
    localStorage.setItem('hasRefreshed', 'false');

    if (model == null) {
      load3DModel();
    } else {
      setModelInScene();
    }
  }, [model]);

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
      entityRef.current.setAttribute('rotation', '0 0 0');

      //A
      if (id == 'A') entityRef.current.object3D.position.set(95, -55, -70);
      if (id == 'A') entityRef.current.setAttribute('rotation', '0 -130 0');

      //B
      if (id == 'B') entityRef.current.object3D.position.set(-45, -55, 5); //B
      if (id == 'B') entityRef.current.setAttribute('rotation', '0 -25 0');

      //C
      if (id == 'C') entityRef.current.object3D.position.set(0, -63, 15);
      if (id == 'C') entityRef.current.setAttribute('rotation', '0 -25 0');

      //D
      if (id == 'D') entityRef.current.object3D.position.set(40, -67, 30);
      if (id == 'D') entityRef.current.setAttribute('rotation', '0 -25 0');

      //E
      if (id == 'E') entityRef.current.object3D.position.set(-70, -80, -70);
      if (id == 'E') entityRef.current.setAttribute('rotation', '0 50 0');

      entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
    }
  };

  // Cleanup resources
  const handleCleanup = () => {
    //clean up model
    let entity = entityRef.current;
    if (entity) {
      const object3D = entityRef.current.object3D.children.find(child => child === model);
      if (object3D) {
        // dispose geometry and materials
        cleanModel(object3D);

        // remove the model from the entity
        entity.object3D.remove(object3D);
        setModel(null);
      }
    }
    // clear references
    entity = null;
    entityRef.current = null;

    // clean up camera
    cleanCamera();

    //clean refresh flag
    localStorage.setItem('hasRefreshed', false);
  };

  return (
    <div className="VirtualReality">
      {isLoading &&
        <TopButtons cleanUp={handleCleanup} backUrl={backUrl} />}
      {isLoading &&
        <LoadingScreen />}
      {!isLoading &&
        <TopButtons cleanUp={handleCleanup} backUrl={backUrl} label={label} />}
      {!isLoading &&
        <div className="content">
          <a-scene className="scene" embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
              material="shader: flat" />
            <a-camera look-controls="touchEnabled: true; mouseEnabled: true;" />
          </a-scene>
        </div >}
    </div>
  );
}
export default VirtualReality;