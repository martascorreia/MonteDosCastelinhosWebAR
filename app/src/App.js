import React from 'react';
import logo from './resources/logo.PNG';
import './App.css';
import TopButtons from "./components/TopButtons/TopButtons.js"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function App() {
    return ( 
      <div className="app" id="app">
        {true && 
          <TopButtons/>}        
        <div className="startMenu">
          <img src={logo} className="logo" alt="logo"/>

        </div > 
      </div>
    );
}
export default App;