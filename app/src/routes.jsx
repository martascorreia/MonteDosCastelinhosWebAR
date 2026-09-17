import React, { Suspense, lazy } from 'react';
import { getVR, getAR, getSondagem } from './utils/sondagensInfo';

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

const withSuspense = (Component, props = {}) => (
  <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export const routes = [
  { path: '/', element: withSuspense(Home) },
  { path: '/mapa', element: withSuspense(Map) },
  { path: '/mais', element: withSuspense(About) },
  { path: '/sondagem4', element: getSondagem(4) },
  { path: '/sondagem4/raMapa', element: withSuspense(Sondagem4ARMap, { instructions: getAR(4).instructions }) },
  { path: '/sondagem4/raA', element: withSuspense(Sondagem4A, { backUrl: '/sondagem4' }) },
  { path: '/sondagem4/raB', element: withSuspense(Sondagem4B, { backUrl: '/sondagem4' }) },
  { path: '/sondagem4/raC', element: withSuspense(Sondagem4C, { backUrl: '/sondagem4' }) },
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
