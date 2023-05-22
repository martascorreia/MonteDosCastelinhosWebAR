import React from 'react';
import { useState } from "react";

import TopButtons from "../../components/TopButtons/TopButtons.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css"
import "./RealidadeAumentada.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';
import sondagem4Img from '../../resources/sondagem4.png';


function RealidadeAumentada() {
  screen.orientation.lock("landscape")
	.then(function() {
		alert('Locked');
	})
	.catch(function(error) {
	});

  const [modelAligned, setModelAligned] = useState(false);


  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true; antialias: true; alpha: true" vr-mode-ui='enabled: false' embedded arjs='sourceType: webcam;'>
          <a-camera arjs-device-orientation-controls='smoothingFactor: 0.1'/>
            {!modelAligned && 
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img}/>
                <button className="alignedBtn" onClick={() => setModelAligned(true)}>
                  Alinhado
                  <FontAwesomeIcon icon="fa-solid fa-house"/>
                </button>  
              </div>}
            {modelAligned && 
              <a-entity gltf-model={sondagem4Model} position="0 -80 0" rotation="0 180 -6" scale="1 1 1"/>}
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;