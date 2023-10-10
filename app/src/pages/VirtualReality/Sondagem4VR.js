import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js"
import "../../index.css"
import "./VirtualReality.css"
import { setOrientation, loadModel, cleanCamera } from '../../utils/utils.js';

function VirtualReality({ id }) {
  setOrientation("landscape");
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();

  useEffect(() => {
    var hasRefreshed = localStorage.getItem('refreshFlag');
    //hasRefreshed = (hasRefreshed == null || hasRefreshed == 'false') ? false : true;
    hasRefreshed = true

    if (!hasRefreshed) {
      console.log("refreshing")
      window.location.reload()
      localStorage.setItem('refreshFlag', true);
    } else {
      if (model == null) {
        load3DModel();
      } else {
        setModelInScene();
      }
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
      if (id == 1) entityRef.current.object3D.position.set(-550, -210, 60);  //A
      if (id == 2) entityRef.current.object3D.position.set(-555, -210, 150); //B
      if (id == 3) entityRef.current.object3D.position.set(-515, -225, 180); //C
      if (id == 4) entityRef.current.object3D.position.set(-480, -225, 215); //D
      if (id == 5) entityRef.current.object3D.position.set(-420, -235, 110); //E
      entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
      entityRef.current.setAttribute('rotation', '0 -50 0');
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
        object3D.traverse((node) => {
          if (node.isMesh) {
            node.geometry.dispose();
            node.material.dispose();
          }
        });

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
    localStorage.setItem('refreshFlag', false);
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
            <a-camera look-controls="touchEnabled: true; mouseEnabled: true;" />
          </a-scene>
        </div >}
    </div>
  );
}
export default VirtualReality;