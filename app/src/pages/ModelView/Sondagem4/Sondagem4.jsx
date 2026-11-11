import React, { useState, useRef, useEffect } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons"
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen"
import "../../../index.css";
import "./../ModelView.css";
import { cleanModel, loadModel, setFullScreen } from '../../../utils/utils';
import sondagem4Model from '../../../resources/models/sondagem4.withoutRoof.glb?url';
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls } from '@react-three/drei';

function Sondagem4A({ backUrl }) {
  const [model, setModel] = useState(null);
  const isDesktop = window.matchMedia('(min-width: 900px)').matches;

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

  function Sondagem4Model() {
    const ref = useRef();

    return (
      <mesh
        position={[0, 0, 0]}
        rotation={[0, -90, 0]}
        ref={ref}>
        <primitive object={model} />
      </mesh>
    );
  }

  //unmount
  useEffect(() => {
    return () => {
      if (model) cleanModel(model);
      cleanUp();
    };
  }, [model]);

  return (
    <div className="AugmentedReality">
      <TopButtons hideFullScreenButton={true} backUrl={backUrl} />
      {!model &&
        <LoadingScreen />}
      {model &&
        <Canvas camera={{ position: [0, 300, 200] }}>
          <hemisphereLight args={["#fffdf7", "#8d7864", 1.25]} />
          <directionalLight position={[120, 160, 100]} intensity={2.2} />
          <directionalLight position={[-120, 80, -100]} intensity={0.8} />
          <OrbitControls enableDamping={false} target={isDesktop ? [18, 38, 10] : [0, 0, 0]} />
          {isDesktop
            ? <Bounds fit clip margin={1.2}><Sondagem4Model /></Bounds>
            : <Sondagem4Model />}
        </Canvas>}
    </div >
  );
}
export default Sondagem4A;