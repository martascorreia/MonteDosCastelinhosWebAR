import React from 'react';
import { useState } from "react";
import TopButtons from "../../components/TopButtons/TopButtons.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css"
import "./RealidadeAumentada.css"
import sondagem4Img from '../../resources/sondagem4.png';
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function RealidadeAumentada() {
  const [modelAligned, setModelAligned] = useState(false);
 
  /**
   *  {modelAligned && 
                <a-light type="directional" id="light" target="totalModel" position="-2 4 2"
                  light="castShadow: true; shadowMapHeight: 1024; shadowMapWidth: 1024; shadowCameraLeft: -7; shadowCameraRight: 5; shadowCameraBottom: -5; shadowCameraTop: 5;"/>}
  */

   // position="-200 -80 -190" rotation="0 -15 0"

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
      <a-scene renderer="logarithmicDepthBuffer: true;" vr-mode-ui='enabled: false' embedded arjs='sourceType: webcam;'>
          <a-camera arjs-device-orientation-controls='smoothingFactor: 0.1' gps-new-camera rotation-reader/>
            {!modelAligned && 
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img}/>
                <button className="alignedBtn" onClick={() => setModelAligned(true)}>
                  Alinhado
                </button>  
              </div>}
            {modelAligned && 
              <a-entity 
                  gltf-model={sondagem4Model}
                  position="0 -350 -790" 
                  rotation="0 0 0"
                  scale="6 6 6"
              />}
        </a-scene> 
      </div >
    </div>
  );
}
export default RealidadeAumentada;