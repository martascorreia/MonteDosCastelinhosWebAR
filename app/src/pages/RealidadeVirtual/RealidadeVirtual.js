import React, { useEffect, useState } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeVirtual.css"
import sondagem4Model from '../../resources/models/sondagem4.smaller.glb';
import WASPButtons from '../../components/WASPButtons/WASPButtons.js';
import { setOrientation } from '../../utils.js';

function RealidadeVirtual() {
  setOrientation("landscape");

  return (
    <div className="RealidadeVirtual">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR/sondagem4"} />
      <WASPButtons />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true">
          <a-entity gltf-model={sondagem4Model} position="5 -15 -45" rotation="0 250 0" scale="0.5 0.5 0.5" />
          <a-entity id="camera" camera look-controls touch-controls/>
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeVirtual;