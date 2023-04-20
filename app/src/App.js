import React from 'react';
import './App.css';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Map from "./pages/Map/Map"
import About from "./pages/About/About"
import Catalogue from "./pages/Catalogue/Catalogue"
import Sondagem4 from "./pages/Sondagem4/Sondagem4"

function App() {
    return ( 
      <div className="App" id="app">        
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/MonteDosCastelinhosWebAR' element={<Home/>} />
              <Route path='/sondagem4' element={<Sondagem4/>} />
              <Route path='/mapa' element={<Map/>} />
              <Route path='/sobre' element={<About/>} />
              <Route path='/catalogo' element={<Catalogue/>} />
          </Routes>
        </BrowserRouter>
      </div > 
    );
}
export default App;