import React from 'react';
import './App.css';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import VirtualReality from "./pages/VirtualReality/VirtuaReality"
import AugmentedReality41 from "./pages/AugmentedReality/AugmentedReality41"
import AugmentedReality43 from "./pages/AugmentedReality/AugmentedReality43"
import sondagem41Img from './resources/images/alignmentImages/sondagem4.1.png';

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
          <Route path='/MonteDosCastelinhosWebAR/rv' element={<VirtualReality />} />
          <Route path='/MonteDosCastelinhosWebAR/ra41' element={<AugmentedReality41 />} />
          <Route path='/MonteDosCastelinhosWebAR/ra43' element={<AugmentedReality43 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4' element={<Sondagem4 sondagemID='4' />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;