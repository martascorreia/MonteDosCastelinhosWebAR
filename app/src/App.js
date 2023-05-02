import React from 'react';
import './App.css';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import RealidadeVirtual from "./pages/RealidadeVirtual/RealidadeVirtual"
import RealidadeAumentada from "./pages/RealidadeAumentada/RealidadeAumentada"

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MonteDosCastelinhosWebAR' element={<Home />} />
          <Route path='/rv' element={<RealidadeVirtual />} />
          <Route path='/ra' element={<RealidadeAumentada />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;