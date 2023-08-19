import React, { useState, useRef, useEffect, useCallback } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeAumentada41.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.1.png';
import sondagem4Model from '../../resources/models/sondagem4.smaller.glb';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, Object3D, Group } from 'three';
import { useAFrame } from 'aframe-react';

function RealidadeAumentada() {
  const [modelAligned, setModelAligned] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const entityRef = useRef();
  //const cameraRef = useRef();

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
      setModel(model);

      if (entityRef.current) {
        entityRef.current.object3D.add(model);
        entityRef.current.setAttribute('position', '-45 -90 -500');
        entityRef.current.setAttribute('scale', '1.3 1.3 1.3');
        entityRef.current.setAttribute('rotation', '0 -50 0');

        setIsLoading(false);
        setModelLoaded(true);
      }
    });

  }, [modelAligned]);

  const handleCleanup = () => {
    console.log("UNMOUNT");
    console.log("refs:");
    console.log(entityRef);
    //console.log(cameraRef);

    //MODEL
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
    /*if (cameraRef.current) {
      console.log("clean camera");
      cameraRef.current.pause();
      cameraRef.current = null;
    }*/


    console.log("refs an the end:");
    console.log(entityRef);

  };

  return (
    <div className="RealidadeAumentada">
      <TopButtons cleanUp={handleCleanup} /*backUrl={"/MonteDosCastelinhosWebAR/sondagem4"} */ />
      <div className="content">
        <a-scene renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: false; sortObjects: true;" vr-mode-ui='enabled: false'>
          {/*<a-assets>
            <a-asset-item id="sondagem4" src={sondagem4Model} />
          </a-assets>*/}
          <a-camera rotation-reader look-controls="touchEnabled: false; mouseEnabled: false;" />
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