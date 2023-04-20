import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./Sondagem4.css"
import sondagem4Model from '../../resources/sondagem4 - noMontain.glb';

function Sondagem4() {
  return (
    <div className="Sondagem4">
      <TopButtons isHome={false} backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene>
          <a-entity gltf-model={sondagem4Model} position="0 -500 -3000" rotation="0 255 0" scale="0.1 0.1 0.1"/>
        </a-scene>
      </div >
    </div>
  );
}
export default Sondagem4;