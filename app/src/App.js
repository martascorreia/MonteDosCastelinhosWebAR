import React from 'react';
import logo from './resources/logo.PNG';
import './App.css';
import TopButtons from "./components/TopButtons/TopButtons.js"
import TextButton from "./components/TextButton.js"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function App() {
    return ( 
      <div className="app" id="app">
        {true && 
          <TopButtons/>}        
        <div className="content">
          <img src={logo} className="logo" alt="logo"/>
          <div className="startMenu">
            <TextButton text="Mapa"/>
            <TextButton text="Catálogo"/>
            <TextButton text="Sobre"/>
          </div>
        </div > 
      </div>
    );
}
export default App;