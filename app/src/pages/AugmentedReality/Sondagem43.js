import React, { useState, useRef, useEffect, useCallback } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js"

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
  const [isModelSet, setIsModelSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();

  const handleButtonClick = () => {
    cleanCamera();
    setModelAligned(true);
  };

  useEffect(() => {
    if (isBrowser && model == null) {
      load3DModel();
    } else if (isMobile && model == null) {
      setIsLoading(false);
    }

    if (isBrowser && modelAligned && model != null) {
      setModelInScene();
    } else if (isMobile && modelAligned && model != null) {
      setIsModelSet(true)
    }
  }, [model, modelAligned]);

  // Load model
  const load3DModel = () => {
    loadModel(process.env.PUBLIC_URL + '/models/sondagem4.3.smaller.glb', false)
      .then((loadedModel) => {
        console.log("model loaded")
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
      entityRef.current.object3D.position.set(90, -460, 220);
      entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
      entityRef.current.setAttribute('rotation', '25 35 18');
      setIsModelSet(true)
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
  };

  return (
    <div className="AugmentedReality">
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4/raTab"} />
      {(isLoading || (!isLoading && modelAligned && !isModelSet)) &&
        <LoadingScreen />}
      {!isLoading && modelAligned &&
        <div className="content">
          <a-scene className="scene"
            embedded
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            vr-mode-ui='enabled: false'>
            <a-camera
              rotation-reader
              look-controls="touchEnabled: true; mouseEnabled: true;" />
            {isBrowser &&
              <a-entity
                className="model"
                ref={entityRef}
                geometry-merger
                material="shader: flat" />}
            {isMobile &&
              <a-image
                src={sondagem43}
                position="0 1 -7.7"
                scale="21 5.5 0"
                material="transparent: true; blending: normal"
              />}
            {false &&
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img} />
              </div>}
          </a-scene>
        </div>}
      {!isLoading && !modelAligned &&
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
export default Sondagem43;