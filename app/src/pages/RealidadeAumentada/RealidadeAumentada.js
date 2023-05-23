import React from 'react';
import { useState } from "react";
import TopButtons from "../../components/TopButtons/TopButtons.js"
import TotalModel from "./TotalModel.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css"
import "./RealidadeAumentada.css"
import sondagem4Img from '../../resources/sondagem4.png';
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

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
        <a-scene renderer="logarithmicDepthBuffer: true; antialias: true; alpha: true" vr-mode-ui='enabled: false'
         embedded arjs='sourceType: webcam;' webxr="optionalFeatures:  hit-test;" ar-hit-test="target:#totalModel;">
          <a-camera arjs-device-orientation-controls='smoothingFactor: 0.1' position="0 1.2 0"/>
            {!modelAligned && 
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img}/>
                <button className="alignedBtn" onClick={() => setModelAligned(true)}>
                  Alinhado
                  <FontAwesomeIcon icon="fa-solid fa-house"/>
                </button>  
              </div>}
            {modelAligned && 
              <a-entity id="totalModel" look-at="[gps-camera]" gltf-model={sondagem4Model} position="0 -150 60" rotation="-90 0 0" scale="1 1 1"/>
              }
            {modelAligned && 
              <a-light type="directional" id="light" target="totalModel" position="-2 4 2"
			          light="castShadow: true; shadowMapHeight: 1024; shadowMapWidth: 1024; shadowCameraLeft: -7; shadowCameraRight: 5; shadowCameraBottom: -5; shadowCameraTop: 5;"/>
            }
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;