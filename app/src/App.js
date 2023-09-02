import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Sondagem4VR from "./pages/VirtualReality/Sondagem4VR"
import Sondagem41 from "./pages/AugmentedReality/Sondagem41"
import Sondagem42 from "./pages/AugmentedReality/Sondagem42"
import Sondagem43 from "./pages/AugmentedReality/Sondagem43"
import { getSondagem } from './utils/sondagensInfo';

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4' element={getSondagem("4")} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/ra41' element={<Sondagem41 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/ra42' element={<Sondagem42 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/ra43' element={<Sondagem43 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rv' element={<Sondagem4VR />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem5' element={getSondagem("5")} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;