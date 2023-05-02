import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeAumentada.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function RealidadeAumentada() {
  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true" vr-mode-ui='enabled: false' embedded arjs='sourceType: webcam;'>
          <a-entity gltf-model={sondagem4Model} position="0 0 -10" rotation="0 180 -6" scale="1.5 0.5 1.5"/>
          <a-camera gps-new-camera='gpsMaxDistance: 5' rotation-reader />
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;