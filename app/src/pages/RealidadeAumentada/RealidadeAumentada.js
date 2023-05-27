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
  let userLat;
  let userLng;

  navigator.geolocation.getCurrentPosition(userLocation);
  function userLocation(position) {
    userLat = position.coords.latitude;
    userLng = position.coords.longitude;
    console.log(userLat +" " + userLng);
}

/**<a-scene renderer="logarithmicDepthBuffer: true; antialias: true; alpha: true" vr-mode-ui='enabled: false'
         embedded arjs='sourceType: webcam;'>
          <a-text
          value="This content will always face you."
          look-at="[gps-camera]"
          scale="50 50 50"
          gps-entity-place={"longitude: " + userLng + "; latitude: " + userLat}
          ></a-text>
          <a-camera arjs-device-orientation-controls='smoothingFactor: 0.1' gps-camera rotation-reader/>

            {false && 
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img}/>
                <button className="alignedBtn" onClick={() => setModelAligned(true)}>
                  Alinhado
                  <FontAwesomeIcon icon="fa-solid fa-house"/>
                </button>  
              </div>}
            {false && 
              <a-entity id="totalModel" gltf-model={sondagem4Model} position="0 -150 60" rotation="0 0 0" scale="1 1 1" gps-new-entity-place={"longitude: " + userLng + "; latitude: " + userLat}/>}
            {false && 
              <a-light type="directional" id="light" target="totalModel" position="-2 4 2"
			          light="castShadow: true; shadowMapHeight: 1024; shadowMapWidth: 1024; shadowCameraLeft: -7; shadowCameraRight: 5; shadowCameraBottom: -5; shadowCameraTop: 5;"/>}
        </a-scene> */

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-text
          value="This content will always face you."
          look-at="[gps-camera]"
          scale="50 50 50"
          gps-entity-place={"longitude: " + userLng + "; latitude: " + userLat +";"}></a-text>
        <a-camera gps-camera rotation-reader> </a-camera>
      </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;