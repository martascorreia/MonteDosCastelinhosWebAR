import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import VirtualReality from "./pages/VirtualReality/VirtuaReality"
import AugmentedReality41 from "./pages/AugmentedReality/AugmentedReality41"
import AugmentedReality42 from "./pages/AugmentedReality/AugmentedReality42"
import AugmentedReality43 from "./pages/AugmentedReality/AugmentedReality43"
import Sondagem from './pages/Sondagem/Sondagem';
import { getSondagemInfo } from './utils/sondagensInfo';

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rv' element={<VirtualReality />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/ra41' element={<AugmentedReality41 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/ra42' element={<AugmentedReality42 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/ra43' element={<AugmentedReality43 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4' element={getSondagemInfo("4")} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem5' element={getSondagemInfo("5")} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;