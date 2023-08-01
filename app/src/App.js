import React from 'react';
import './App.css';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import RealidadeVirtual from "./pages/RealidadeVirtual/RealidadeVirtual"
import RealidadeAumentada41 from "./pages/RealidadeAumentada41/RealidadeAumentada41"
import RealidadeAumentada43 from './pages/RealidadeAumentada43/RealidadeAumentada43';
import Sondagem4 from './pages/Sondagem4/Sondagem4';
import Mapa from './pages/Mapa/Mapa';

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR/mapa' element={<Mapa />} />
          <Route path='/MonteDosCastelinhosWebAR/rv' element={<RealidadeVirtual />} />
          <Route path='/MonteDosCastelinhosWebAR/ra41' element={<RealidadeAumentada41 />} />
          <Route path='/MonteDosCastelinhosWebAR/mapa' element={<Mapa />} />
          <Route path='/MonteDosCastelinhosWebAR/ra43' element={<RealidadeAumentada43 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4' element={<Sondagem4 sondagemID='4' />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;