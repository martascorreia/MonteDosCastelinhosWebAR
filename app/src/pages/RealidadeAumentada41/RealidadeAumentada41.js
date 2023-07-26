import React from 'react';
import { useState } from "react";
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeAumentada41.css"
import sondagem4Img from '../../resources/images/sondagem4.1.png';
import sondagem4Model from '../../resources/models/sondagem4.smaller.glb';
import packageJson from "../../../package.json";

function RealidadeAumentada() {
  const [modelAligned, setModelAligned] = useState(false);

  /*function componentWillUnmount() {
    let version = localStorage.getItem('version');
    if (version != packageJson.version) {
      if ('caches' in window) {
        caches.keys().then((names) => {
          // Delete all the cache files
          names.forEach(name => {
            caches.delete(name);
          })
        });

        // Makes sure the page reloads. Changes are only visible after you refresh.
        window.location.reload(true);
      }

      localStorage.clear();
      localStorage.setItem('version', packageJson.version);
    }
  };*/


  //colorManagement: true;

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene renderer="antialias: true; logarithmicDepthBuffer: true; sortObjects: true;" vr-mode-ui='enabled: false'>
          <a-assets>
            <a-asset-item id="sondagem4" src={sondagem4Model} />
          </a-assets>
          <a-camera rotation-reader look-controls="touchEnalbed: false; mouseEnabled: false;"/>
          {!modelAligned &&
            <div className="alignElements">
              <img className="alignImage" src={sondagem4Img} />
              <button className="alignedBtn" onClick={() => setModelAligned(true)}>
                Alinhado
              </button>
            </div>}
          {modelAligned &&
            <a-entity
              gltf-model="#sondagem4"
              position="-45 -90 -500"
              scale="1.3 1.3 1.3"
              rotation="0 -50 0"
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
export default RealidadeAumentada;