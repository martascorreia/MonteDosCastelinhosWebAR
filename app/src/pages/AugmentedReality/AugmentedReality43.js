import React from 'react';
import { useState } from "react";
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./AugmentedReality.css"
import sondagem4Img from '../../resources/images/alignmentImages/sondagem4.3.png';
import sondagem4Model from '../../resources/models/sondagem4.3.smaller.glb';

function AugmentedReality43() {
  const [modelAligned, setModelAligned] = useState(false);
 
  return (
    <div className="AugmentedReality">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
      <a-scene renderer="antialias: true; logarithmicDepthBuffer: true; sortObjects: true;" vr-mode-ui='enabled: false'>
          <a-assets>
            <a-asset-item id="sondagem4" src={sondagem4Model}/>
          </a-assets>
          <a-camera rotation-reader /*look-controls="touchEnabled: false; mouseEnabled: false;"*//>
  
          {!modelAligned && 
              <div className="alignElements">
                <img className="alignImage" src={sondagem4Img}/>
                <button className="alignedBtn" onClick={() => setModelAligned(true)}>
                  Alinhado
                </button>  
              </div>}
            {modelAligned && 
              <a-entity 
                gltf-model="#sondagem4"
                position="90 -460 220"
                scale="1.3 1.3 1.3"
                rotation="25 35 18"
              />}
             {modelAligned &&
            <div className="alignElements">
              <img className="backgroundImage" src={sondagem4Img} />
            </div>}
        </a-scene> 
      </div >
    </div>
  );
}
export default AugmentedReality43;