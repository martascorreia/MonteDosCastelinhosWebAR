import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeVirtual.css"
import sondagem4Model from '../../resources/sondagem4.smaller.glb';

function RealidadeVirtual() {
  return (
    <div className="RealidadeVirtual">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true">
          <a-entity gltf-model={sondagem4Model} position="5 -15 -45" rotation="0 250 0" scale="0.5 0.5 0.5"/>
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeVirtual;