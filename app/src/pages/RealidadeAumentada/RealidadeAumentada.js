import React from 'react';
import { useState } from "react";
import TopButtons from "../../components/TopButtons/TopButtons.js"
import TotalModel from "./TotalModel.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css"
import "./RealidadeAumentada.css"
import sondagem4Img from '../../resources/sondagem4.png';
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';
import mindTarget from '../../resources/teclado.mind';

function RealidadeAumentada() {
 /* screen.orientation.lock("landscape")
	.then(function() {
		alert('Locked');
	})
	.catch(function(error) {
	});
*/

/**
 * <a-scene mindar-image="imageTargetSrc:${mindTarget}"" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights, logarithmicDepthBuffer: true" 
          vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
          <a-entity mindar-image-target="targetIndex: 0">
            <a-gltf-model position="0 -150 60" rotation="-90 0 0" scale="1 1 1" src={sondagem4Model}/>
          </a-entity>
          {false && 
            <a-entity id="totalModel" look-at="[gps-camera]" gltf-model={sondagem4Model} position="0 -150 60" rotation="-90 0 0" scale="1 1 1"/>
            }
          {false && 
            <a-light type="directional" id="light" target="totalModel" position="-2 4 2"
              light="castShadow: true; shadowMapHeight: 1024; shadowMapWidth: 1024; shadowCameraLeft: -7; shadowCameraRight: 5; shadowCameraBottom: -5; shadowCameraTop: 5;"/>
          }
        </a-scene>
 */

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">       
        <a-scene mindar-image={"imageTargetSrc: " + mindTarget} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
	          <img id="card" src={sondagem4Img} />
	          <a-asset-item id="avatarModel" src={sondagem4Model}></a-asset-item>
          </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
          <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel"/>
        </a-entity>
      </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;