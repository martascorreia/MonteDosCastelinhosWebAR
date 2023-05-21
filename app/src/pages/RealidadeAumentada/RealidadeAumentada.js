import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeAumentada.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function RealidadeAumentada() {
  screen.orientation.lock("landscape")
	.then(function() {
		alert('Locked');
	})
	.catch(function(error) {
	});

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true" vr-mode-ui='enabled: false' embedded arjs='sourceType: webcam;'>
          <a-entity gltf-model={sondagem4Model} position="0 -80 0" rotation="0 180 -6" scale="1 1 1" gps-new-entity-place="latitude: 38.999076; longitude: -9.007012"/>
          <a-camera arjs-device-orientation-controls='smoothingFactor: 0.1'> </a-camera>
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;