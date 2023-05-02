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
          <a-entity gltf-model={sondagem4Model} position="1000 -5000 -15000" rotation="170 60 180" />
          <a-camera wasd-controls near="1" far="300000" position="0 1.65 0" />
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeVirtual;