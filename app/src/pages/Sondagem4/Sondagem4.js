import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./Sondagem4.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';
import {Scene, Entity} from '@belivvr/aframe-react';

function Sondagem4() {
  return (
    <div className="Sondagem4">
      <TopButtons isHome={false} backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <Scene renderer="logarithmicDepthBuffer: true">
          <a-entity gltf-model={sondagem4Model} position="1500 -700 1500" rotation="180 0 180" scale="0.5 0.5 0.5" />
        </Scene>
      </div >
    </div>
  );
}
export default Sondagem4;