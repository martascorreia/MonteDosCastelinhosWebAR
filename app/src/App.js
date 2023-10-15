import React from 'react';
import './App.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Map from "./pages/Map/Map"
import Sondagem4VR from "./pages/VirtualReality/Sondagem4VR"
import Sondagem4A from "./pages/AugmentedReality/Sondagem4A"
import Sondagem4C from "./pages/AugmentedReality/Sondagem4C"
import Sondagem4B from "./pages/AugmentedReality/Sondagem4B"
import { getSondagem } from './utils/sondagensInfo';

function App() {
  return (
    <div className="App" id="app">
      <HashRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mapa' element={<Map />} />
          <Route path='/sondagem4' element={getSondagem("4", 1)} />
          <Route path='/sondagem4/raTab' element={getSondagem("4", 2)} />
          <Route path='/sondagem4/rvTab' element={getSondagem("4", 3)} />
          <Route path='/sondagem4/raA' element={<Sondagem4A />} />
          <Route path='/sondagem4/raB' element={<Sondagem4B />} />
          <Route path='/sondagem4/raC' element={<Sondagem4C />} />
          <Route path='/sondagem4/rvA' element={<Sondagem4VR id={'A'} label={"Entrada"} />} />
          <Route path='/sondagem4/rvB' element={<Sondagem4VR id={'B'} label={"Banhos"} />} />
          <Route path='/sondagem4/rvC' element={<Sondagem4VR id={'C'} label={"Átrio"} />} />
          <Route path='/sondagem4/rvD' element={<Sondagem4VR id={'D'} label={"Quartos"} />} />
          <Route path='/sondagem4/rvE' element={<Sondagem4VR id={'E'} label={"Anexos"} />} />
          <Route path='/sondagem5' element={getSondagem("5", 1)} />
          <Route path='/sondagem8' element={getSondagem("8", 1)} />
          <Route path='/sondagem9' element={getSondagem("9", 1)} />
        </Routes>
      </HashRouter >
    </div >
  );
}
export default App;