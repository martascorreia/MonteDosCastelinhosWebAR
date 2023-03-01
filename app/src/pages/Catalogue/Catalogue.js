import React from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "../../index.css"
import "./Catalogue.css"

function Catalogue() {
    return ( 
      <div className="Map">
        <TopButtons isHome={false} backUrl={"/MonteDosCastelinhosWebAR"}/>    
        <div className="content">
        </div > 
      </div>
    );
}
export default Catalogue;