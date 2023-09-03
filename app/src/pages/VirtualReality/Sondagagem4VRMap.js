import React from 'react';
import "../../index.css"
import "./VirtualReality.css"
import "./../Map/Map.css"
import { Link } from 'react-router-dom';

function Sondagem4VRMap() {
  return (
    <div className="SondagemMap">
      <img className='mapImage' src={process.env.PUBLIC_URL + "/images/sondagem4Map.jpg"} />
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/rv'} className="nav-link">
        <button className='mapPoint1'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point1shadow.png"} />
        </button>
      </Link>
    </div>
  );
}
export default Sondagem4VRMap;