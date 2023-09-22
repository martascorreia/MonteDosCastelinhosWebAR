import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter >
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR/mapa' element={<Map />}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4' element={getSondagem("4", 1)}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raTab' element={getSondagem("4", 2)}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvTab' element={getSondagem("4", 3)}/>
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raA' element={<Sondagem4A />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raB' element={<Sondagem4B />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/raC' element={<Sondagem4C />} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvA' element={<Sondagem4VR id={1}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvB' element={<Sondagem4VR id={2}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvC' element={<Sondagem4VR id={3}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvD' element={<Sondagem4VR id={4}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem4/rvE' element={<Sondagem4VR id={5}/>} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem5' element={getSondagem("5", 1)} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem8' element={getSondagem("8", 1)} />
          <Route path='/MonteDosCastelinhosWebAR/sondagem9' element={getSondagem("9", 1)} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;