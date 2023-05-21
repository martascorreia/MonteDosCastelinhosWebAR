import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeVirtual.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';

function RealidadeVirtual() {
  return (
    <div className="RealidadeVirtual">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true">
          <a-entity gltf-model={sondagem4Model} position="0 0 -10" rotation="0 180 -6" scale="0.5 0.5 0.5"/>
          <a-entity camera look-controls position="0 1.6 0"/>
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeVirtual;