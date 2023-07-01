import React from 'react';
import { useState } from "react";
import TopButtons from "../../components/TopButtons/TopButtons.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css"
import "./RAHitTests.css"
import sondagem4Img from '../../resources/sondagem4.png';
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function RAHitTests() {
  const [modelAligned, setModelAligned] = useState(false);
 
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
              <a-entity id="totalModel" gltf-model={sondagem4Model} position="-200 -80 -190" rotation="0 -15 0" scale="1 1 1"/>}
        </a-scene> 
      </div >
    </div>
  );
}
export default RAHitTests;