import React from 'react';
import { useState } from "react";
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./RealidadeAumentada41.css"
import sondagem4Img from '../../resources/sondagem4.1.png';
import sondagem4Model from '../../resources/sondagem4.1.smaller.glb';
import packageJson from "../../../package.json";

function RealidadeAumentada() {
  const [modelAligned, setModelAligned] = useState(false);

  function componentWillUnmount() {
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
  };

  return (
    <div className="RealidadeAumentada">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        <a-scene renderer="logarithmicDepthBuffer: true;" vr-mode-ui='enabled: false'>
          <a-assets>
            <a-asset-item id="sondagem4" src={sondagem4Model} />
          </a-assets>
          <a-camera rotation-reader>
            <a-entity id="marker" position="0 0 -5" />
          </a-camera>
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
              position="0 -350 -790"
              scale="6 6 6"
            />}
        </a-scene>
      </div >
    </div>
  );
}
export default RealidadeAumentada;

