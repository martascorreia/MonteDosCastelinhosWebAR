import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./Sondagem4.css"
import sondagem4Model from '../../resources/sondagem4 - smaller.glb';
import {Scene} from '@belivvr/aframe-react';

function Sondagem4() {
  return (
    <div className="Sondagem4">
      <TopButtons isHome={false} backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <Scene renderer="logarithmicDepthBuffer: true">
          <a-entity gltf-model={sondagem4Model} position="1000 -5000 -15000" rotation="180 60 180" />
            <a-camera wasd-controls near="1" far="300000" position="0 1.65 0"/>
        </Scene>
      </div >
    </div>
  );
}
export default Sondagem4;