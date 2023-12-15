import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.js"
import "../../../index.css"
import "./../ModelView.css"
import { loadModel, setFullScreen } from '../../../utils/utils.js';
import sondagem4Model from '../../../resources/models/sondagem4.withoutRoof.glb';

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

function Sondagem4A({ backUrl }) {
  const [model, setModel] = useState(null);

  useEffect(() => {
    localStorage.setItem('hasRefreshed', 'false');

    if (model == null) {
      load3DModel();
    }
  }, [model]);

  // Load model
  const load3DModel = () => {
    loadModel(sondagem4Model)
      .then((loadedModel) => {
        setModel(loadedModel);
      })
      .catch((error) => {
        console.error('Error loading model:', error);
      });
  };

  const cleanUp = () => {
    setFullScreen(false);
  };

  function Sondagem4Model({ position }) {
    const ref = useRef();

    return (
      <mesh
        position={position}
        ref={ref}>
        <primitive object={model} />
      </mesh>
    );
  }

  return (
    <div className="AugmentedReality">
      <TopButtons hideFullScreenButton={true} cleanUp={() => cleanUp()} backUrl={backUrl} />
      {model == null &&
        <LoadingScreen />}
      {model &&
        <Canvas camera={{ position: [0, 100, 150] }}>
          <ambientLight intensity={0.5} />
          <OrbitControls enableDamping={false} />
          <Sondagem4Model position={[0, 0, 0]} />
        </Canvas>}
    </div >
  );
}
export default Sondagem4A;