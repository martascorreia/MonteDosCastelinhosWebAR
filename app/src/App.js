import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Map from "./pages/Map/Map"
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
          <Route path='/MonteDosCastelinhosWebAR/mapa' element={<Map />}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4' element={getSondagem("4", 1)}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raTab' element={getSondagem("4", 2)}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvTab' element={getSondagem("4", 3)}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raA' element={<Sondagem41 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raB' element={<Sondagem43 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raC' element={<Sondagem42 />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvA' element={<Sondagem4VR id={1}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvB' element={<Sondagem4VR id={2}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvC' element={<Sondagem4VR id={3}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem5' element={getSondagem("5", 1)} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem8' element={getSondagem("8", 1)} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem9' element={getSondagem("9", 1)} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;