import React, { Suspense, lazy, useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { getVR, getAR, getSondagem } from './utils/sondagensInfo';
import RouteBoundary, { RouteFallback } from './components/RouteBoundary/RouteBoundary';
import TopButtons from './components/TopButtons/TopButtons';
import './pages/AugmentedReality/AugmentedReality.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Map = lazy(() => import('./pages/Map/Map'));
const About = lazy(() => import('./pages/About/About'));
const Sondagem4VRMap = lazy(() => import('./pages/VirtualReality/Sondagem4/Sondagem4VRMap'));
const Sondagem4VR = lazy(() => import('./pages/VirtualReality/Sondagem4/Sondagem4VR'));
const Sondagem4ARMap = lazy(() => import('./pages/AugmentedReality/Sondagem4/Sondagem4ARMap'));
const Sondagem4A = lazy(() => import('./pages/AugmentedReality/Sondagem4/Sondagem4A'));
const Sondagem4C = lazy(() => import('./pages/AugmentedReality/Sondagem4/Sondagem4C'));
const Sondagem4B = lazy(() => import('./pages/AugmentedReality/Sondagem4/Sondagem4B'));
const Sondagem4ModelView = lazy(() => import('./pages/ModelView/Sondagem4/Sondagem4'));
const supportsAR = isMobile || isTablet;
const arJsReady = supportsAR
  ? new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.unpkg.com/@ar-js-org/ar.js@3.4.8/aframe/build/aframe-ar.js';
    script.onload = resolve;
    script.onerror = () => reject(new Error('Could not load AR.js'));
    document.head.appendChild(script);
  })
  : Promise.resolve();

const withSuspense = (Component, props = {}) => (
  <RouteBoundary>
    <Suspense fallback={<RouteFallback />}>
      <Component {...props} />
    </Suspense>
  </RouteBoundary>
);

const ARUnavailable = ({ backUrl }) => (
  <div className="AugmentedReality desktopARUnavailable">
    <TopButtons hideFullScreenButton={true} backUrl={backUrl} />
    <main className="desktopARNotice">
      <h1>Realidade aumentada</h1>
      <p>Esta experiência está disponível apenas em dispositivos móveis.</p>
    </main>
  </div>
);

const ARExperience = ({ Component, ...props }) => {
  const [isReady, setIsReady] = useState(false);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let active = true;
    arJsReady.then(() => {
      if (active) setIsReady(true);
    }).catch(() => {
      if (active) setHasLoadError(true);
    });
    return () => { active = false; };
  }, []);

  if (hasLoadError) {
    return <ARUnavailable backUrl={props.backUrl} />;
  }
  if (!isReady) return <RouteFallback />;
  return <Component {...props} />;
};

const withAR = (Component, props) => withSuspense(
  supportsAR ? ARExperience : ARUnavailable,
  supportsAR ? { Component, ...props } : props
);

export const routes = [
  { path: '/', element: withSuspense(Home) },
  { path: '/mapa', element: withSuspense(Map) },
  { path: '/mais', element: withSuspense(About) },
  { path: '/sondagem4', element: getSondagem(4) },
  { path: '/sondagem4/raMapa', element: withAR(Sondagem4ARMap, { instructions: getAR(4).instructions, backUrl: '/sondagem4' }) },
  { path: '/sondagem4/raA', element: withAR(Sondagem4A, { backUrl: '/sondagem4' }) },
  { path: '/sondagem4/raB', element: withAR(Sondagem4B, { backUrl: '/sondagem4' }) },
  { path: '/sondagem4/raC', element: withAR(Sondagem4C, { backUrl: '/sondagem4' }) },
  { path: '/sondagem4/rvMapa', element: withSuspense(Sondagem4VRMap, { instructions: getVR(4).instructions }) },
  { path: '/sondagem4/rvA', element: withSuspense(Sondagem4VR, { id: 'A', label: 'Entrada', backUrl: '/sondagem4' }) },
  { path: '/sondagem4/rvB', element: withSuspense(Sondagem4VR, { id: 'B', label: 'Banhos', backUrl: '/sondagem4' }) },
  { path: '/sondagem4/rvC', element: withSuspense(Sondagem4VR, { id: 'C', label: 'Átrio', backUrl: '/sondagem4' }) },
  { path: '/sondagem4/rvD', element: withSuspense(Sondagem4VR, { id: 'D', label: 'Quartos', backUrl: '/sondagem4' }) },
  { path: '/sondagem4/rvE', element: withSuspense(Sondagem4VR, { id: 'E', label: 'Arrumos', backUrl: '/sondagem4' }) },
  { path: '/sondagem4/modelo3D', element: withSuspense(Sondagem4ModelView, { backUrl: '/sondagem4' }) },
  { path: '/sondagem5', element: getSondagem(5) },
  { path: '/sondagem8', element: getSondagem(8) },
  { path: '/sondagem9', element: getSondagem(9) },
];
