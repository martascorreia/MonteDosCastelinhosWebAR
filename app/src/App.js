import React from 'react';
import './App.css';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import RealidadeVirtual from "./pages/RealidadeVirtual/RealidadeVirtual"
import RealidadeAumentada from "./pages/RealidadeAumentada/RealidadeAumentada"
import RAGPS from "./pages/RAGPS/RAGPS"
import RAHitTests from "./pages/RAHitTests/RAHitTests"
import RealidadeAumentadaCut from './pages/RealidadeAumentadaCut/RealidadeAumentadaCut';

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR' element={<Home />} />
          <Route path='/rv' element={<RealidadeVirtual />} />
          <Route path='/ra' element={<RealidadeAumentada />} />
          <Route path='/racut' element={<RealidadeAumentadaCut />} />
          <Route path='/ragps' element={<RAGPS />} />
          <Route path='/raht' element={<RAHitTests />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;