import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css"
import "./RealidadeAumentada.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function TotalModel() {
  window.addEventListener("gps-camera-update-position", e => { 
    console.log("hnhhhhh")
  });

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/ra"} />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true; antialias: true; alpha: true" vr-mode-ui='enabled: false' embedded 
        arjs='sourceType: webcam; debugUIEnabled: false;' webxr="optionalFeatures:  hit-test;" ar-hit-test="target:#myobject;">
          <a-camera arjs-device-orientation-controls='smoothingFactor: 0.1'/>
          <a-entity look-at="[gps-camera]" gltf-model={sondagem4Model} position="0 -150 60" rotation="-90 0 0" scale="1 1 1"/>
        </a-scene>
      </div >
    </div>
  );
}
export default TotalModel;