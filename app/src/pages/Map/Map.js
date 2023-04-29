import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./Map.css"
import {Scene} from '@belivvr/aframe-react';
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function Map() {
    return ( 
      <div className="Map">
        <TopButtons isHome={false} backUrl={"/MonteDosCastelinhosWebAR"} />
        <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true" vr-mode-ui='enabled: false' embedded arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;'>
              <a-entity gltf-model={sondagem4Model} position="0 0 -10" rotation="0 180 0" />
            <a-camera gps-new-camera='gpsMaxDistance: 5' rotation-reader/>
        </a-scene>
        </div >
      </div>
    );
}
export default Map;