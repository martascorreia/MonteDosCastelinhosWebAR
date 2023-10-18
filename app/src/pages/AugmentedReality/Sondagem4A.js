import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js"
import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import { setOrientation, loadModel, cleanCamera, cleanModel } from '../../utils/utils.js';

function Sondagem4A() {
  setOrientation("landscape");
  const [modelAligned, setModelAligned] = useState(false);
  const [model, setModel] = useState(null);
  const [isModelSet, setIsModelSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const entityRef = useRef();
  const [label, setLabel] = useState(null);

  const handleButtonClick = () => {
    cleanCamera();
    setModelAligned(true);
    setLabel("Vista Frontal");
  };

  useEffect(() => {
    localStorage.setItem('sondagem4ARAFlag', 'true');
    localStorage.setItem('hasRefreshed', 'false');

    if (model == null) {
      load3DModel();
    }
    if (modelAligned && model != null) {
      setModelInScene();
    }
  }, [model, modelAligned]);

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
      entityRef.current.object3D.position.set(-480, -300, -500);
      entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
      entityRef.current.setAttribute('rotation', '0 -50 0');
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
  };

  return (
    <div className="AugmentedReality">
      <TopButtons cleanUp={handleCleanup} backUrl={"/sondagem4/raTab"} label={label}/>
      {(isLoading || (!isLoading && modelAligned && !isModelSet)) &&
        <LoadingScreen />}
      {!isLoading && modelAligned &&
        <div className="content" id="realidadeAumentada">
          <a-scene
            className="scene"
            renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;"
            vr-mode-ui='enabled: false'>
            <a-camera
              rotation-reader
              look-controls="touchEnabled: true; mouseEnabled: true;" />
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
              material="shader: flat" />
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
export default Sondagem4A;