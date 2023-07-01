import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RAGPS.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function RAGPS() {
  
  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene 
          renderer="logarithmicDepthBuffer: true;" 
          vr-mode-ui='enabled: false' 
          embedded 
          arjs='sourceType: webcam;'>
          <a-camera gps-new-camera positionMinAccuracy="10" rotation-reader> </a-camera>

          <a-box color="white" //sondagem 1
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.011443; longitude: -8.974826;"
          />

          <a-box color="green" //sondagem 2
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.012200; longitude: -8.973674;"
          />

          <a-box color="blue" //sondagem 3
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.012571; longitude: -8.974665;"
          />

          <a-box color="yellow" //sondagem 4
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.012719; longitude: -8.974550;"
          />

          <a-box color="hotpink" //sondagem 5
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.011740; longitude: -8.973834;"
          />

          <a-box color="orange" //sondagem 6
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.012531; longitude: -8.975470;"
          /> 

          <a-box color="red" //sondagem 7
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.012376; longitude: -8.974424;"
          />     

          <a-box color="violet" //sondagem 8
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 39.011980; longitude: -8.974258;"
          />    

          <a-box color="Crimson" //house
          look-at="[gps-new-camera]"
          scale="1 1 1"
          gps-new-entity-place="latitude: 38.999069; longitude: -9.007022;"
          />               
        </a-scene> 
      </div >
    </div>
  );
}
export default RAGPS;