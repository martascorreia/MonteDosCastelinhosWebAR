import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./Map.css"

function Map() {
    return ( 
      <div className="Map">
          <TopButtons isHome={false} backUrl={"/MonteDosCastelinhosWebAR"}/>    
          <div className="content">
        </div > 
      </div>
    );
}
export default Map;