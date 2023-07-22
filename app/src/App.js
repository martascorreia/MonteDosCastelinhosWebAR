import React from 'react';
import './App.css';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import RealidadeVirtual from "./pages/RealidadeVirtual/RealidadeVirtual"
import RealidadeAumentada41 from "./pages/RealidadeAumentada41/RealidadeAumentada41"
import RAGPS from "./pages/RAGPS/RAGPS"
import RAHitTests from "./pages/RAHitTests/RAHitTests"
import RealidadeAumentada43 from './pages/RealidadeAumentada43/RealidadeAumentada43';

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR' element={<Home />} />
          <Route path='/rv' element={<RealidadeVirtual />} />
          <Route path='/ra41' element={<RealidadeAumentada41 />} />
          <Route path='/ra43' element={<RealidadeAumentada43 />} />
          <Route path='/ragps' element={<RAGPS />} />
          <Route path='/raht' element={<RAHitTests />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;