import React, { useState, useRef, useEffect, useCallback } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeAumentada41.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import sondagem4Model from '../../resources/models/sondagem4.smaller.glb';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, Object3D, Group } from 'three';

function RealidadeAumentada() {
  const [modelAligned, setModelAligned] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const entityRef = useRef();
  const modelRef = useRef();
  const cameraRef = useRef();

  const handleButtonClick = () => {
    setModelAligned(true);
  };


  useEffect(() => {
    if (!modelAligned || modelLoaded) return;

    setIsLoading(true);
    const loader = new GLTFLoader();

    // load the custom 3D model
    loader.load(process.env.PUBLIC_URL + "/models/sondagem4.smaller.glb", (glb) => {
      const model = glb.scene;

      if (entityRef.current) {
        let entity = entityRef.current;
        modelRef.current = model;

        entity.object3D.add(model);
        entity.setAttribute('position', '-45 -90 -500');
        entity.setAttribute('scale', '1.3 1.3 1.3');
        entity.setAttribute('rotation', '0 -50 0');

        setIsLoading(false);
        setModelLoaded(true);
      }
    });

    // clean up on unmount
    return () => {
      console.log("UNMOUNT");
      handleCleanup();
    }
  }, [modelAligned, modelLoaded]);

  const handleCleanup = () => {
    let entity = entityRef.current;
    console.log(entityRef.current)

    if (entity) {
      //clean up model
      const model = modelRef.current;
      console.log(model)

      if (model) {
        // dispose geometry and materials
        model.traverse((node) => {
          if (node.isMesh) {
            node.geometry.dispose();
            node.material.dispose();
          }
        });

        // Remove the model from the entity
        entity.object3D.remove(model);
        modelRef.current = null; // Clear the model reference
      }

      const camera = modelRef.current;
      console.log(camera)

      // clean up camera
      if (camera) {
        console.log("clean camera");
        camera.pause();
      }

      // clear references
      entity = null;
      entityRef.current = null;
    }
  };

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR/sondagem4"} />
      <div className="content">
        <a-scene renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          {/*<a-assets>
            <a-asset-item id="sondagem4" src={sondagem4Model} />
          </a-assets>*/}
          <a-camera rotation-reader look-controls="touchEnabled: false; mouseEnabled: false;" ref={cameraRef}/>
          {!modelAligned &&
            <div className="alignElements">
              <img className="alignImage" src={sondagem4Img} />
              <button className="alignedBtn" onClick={handleButtonClick}>
                Alinhado
              </button>
            </div>}
          {modelAligned &&
            <a-entity
              ref={entityRef}
            />}
          {modelAligned &&
            <div className="alignElements">
              <img className="backgroundImage" src={sondagem4Img} />
            </div>}
          {/*isLoading && <div>Loading model...</div>*/}
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;