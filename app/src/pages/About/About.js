import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./About.css"

function App() {
    return ( 
      <div className="About">
        <TopButtons isHome={false} backUrl={"/"}/>    
        <div className="content">
        </div > 
      </div>
    );
}
export default App;