import React from 'react';
import './App.css';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Map from "./pages/Map"
import About from "./pages/About/About"
import Catalogue from "./pages/Catalogue"

function App() {
    return ( 
      <div className="App" id="app">        
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/mapa' element={<Map/>} />
              <Route path='/sobre' element={<About/>} />
              <Route path='/catalogo' element={<Catalogue/>} />
          </Routes>
      </BrowserRouter>
        </div > 
    );
}
export default App;