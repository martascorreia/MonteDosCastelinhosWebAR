import React from 'react';
import './App.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Map from "./pages/Map/Map"
import About from "./pages/About/About"
import Sondagem4VRMap from './pages/VirtualReality/Sondagem4/Sondagem4VRMap';
import Sondagem4VR from "./pages/VirtualReality/Sondagem4/Sondagem4VR"
import Sondagem4ARMap from './pages/AugmentedReality/Sondagem4/Sondagem4ARMap';
import Sondagem4A from "./pages/AugmentedReality/Sondagem4/Sondagem4A"
import Sondagem4C from "./pages/AugmentedReality/Sondagem4/Sondagem4C"
import Sondagem4B from "./pages/AugmentedReality/Sondagem4/Sondagem4B"
import Sondagem4ModelView from './pages/ModelView/Sondagem4/Sondagem4';
import { getVR, getAR, getSondagem } from './utils/sondagensInfo';

function App() {
  return (
    <div className="App" id="app">
      <HashRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mapa' element={<Map />} />
          <Route path='/mais' element={<About />} />
          <Route path='/sondagem4' element={getSondagem(4)} />
          <Route path='/sondagem4/raMapa' element={<Sondagem4ARMap instructions={getAR(4).instructions}/>} />
          <Route path='/sondagem4/raA' element={<Sondagem4A backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/raB' element={<Sondagem4B backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/raC' element={<Sondagem4C backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/rvMapa' element={<Sondagem4VRMap instructions={getVR(4).instructions}/>} />
          <Route path='/sondagem4/rvA' element={<Sondagem4VR id={'A'} label={"Entrada"} backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/rvB' element={<Sondagem4VR id={'B'} label={"Banhos"} backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/rvC' element={<Sondagem4VR id={'C'} label={"Átrio"} backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/rvD' element={<Sondagem4VR id={'D'} label={"Quartos"} backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/rvE' element={<Sondagem4VR id={'E'} label={"Anexos"} backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem4/modelo3D' element={<Sondagem4ModelView backUrl={"/sondagem4"}/>} />
          <Route path='/sondagem5' element={getSondagem(5)} />
          <Route path='/sondagem8' element={getSondagem(8)} />
          <Route path='/sondagem9' element={getSondagem(9)} />
        </Routes>
      </HashRouter >
    </div >
  );
}
export default App;