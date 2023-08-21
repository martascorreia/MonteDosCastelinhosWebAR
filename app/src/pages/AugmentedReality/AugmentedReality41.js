import React, { useState, useRef, useEffect, useCallback } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import sondagem4Model from '../../resources/models/sondagem4.smaller.glb';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function AugmentedReality41() {
  const [modelAligned, setModelAligned] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const entityRef = useRef();

  const handleButtonClick = () => {
    setModelAligned(true);
  };

  useEffect(() => {
    if (modelAligned && model == null) {
      setIsLoading(true);
      loadModel();
    }
  }, [modelAligned]);

  // Load model
  const loadModel = () => {
    // Load the custom 3D model
    const loader = new GLTFLoader();
    loader.load(process.env.PUBLIC_URL + "/models/sondagem4.smaller.glb", (glb) => {
      const newModel = glb.scene;
      setModel(newModel);

      if (entityRef.current) {
        entityRef.current.object3D.add(newModel);
        entityRef.current.object3D.position.set(-45, -90, -500);
        entityRef.current.object3D.scale.set(1.3, 1.3, 1.3);
        entityRef.current.setAttribute('rotation', '0 -50 0');
        setIsLoading(false);
      }
    });
  };

  // Cleanup resources
  const handleCleanup = () => {
    cleanupModel();
    cleanupCamera();
    entityRef.current = null;
  };

  const cleanupModel = () => {
    console.log("CLEAN UP")
    console.log(model)

    if (model) {
      model.traverse((node) => {
        console.log(node);
        if (node.isMesh) {
          node.geometry.dispose();
          node.material.dispose();
        }
      });

      if (entityRef.current) {
        entityRef.current.object3D.remove(model);
      }

      setModel(null);
    }
  };

  const cleanupCamera = () => {
    const elementsToRemove = document.querySelectorAll("video");
    elementsToRemove.forEach(element => {
      if (!element.paused) {
        element.pause();
      }
      element.remove();
    });
  };

  return (
    <div className="RealidadeAumentada">
      <TopButtons cleanUp={handleCleanup} backUrl={"/MonteDosCastelinhosWebAR/sondagem4"} />
      <div className="content">
        <a-scene embedded renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          <a-camera rotation-reader look-controls="touchEnabled: false; mouseEnabled: false;" />
          {modelAligned &&
            <a-entity
              className="model"
              ref={entityRef}
              geometry-merger
              material="shader: flat" />}
          {modelAligned &&
            <div className="alignElements">
              <img className="alignImage" src={sondagem4Img} />
            </div>}
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
export default AugmentedReality41;