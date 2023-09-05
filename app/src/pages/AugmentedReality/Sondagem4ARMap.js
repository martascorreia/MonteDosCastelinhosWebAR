import React from 'react';
import "../../index.css"
import "./AugmentedReality.css"
import "./../Map/Map.css"

import { Link } from 'react-router-dom';

function Sondagem4ARMap() {
  return (
    <div className="SondagemMap">
      <img className='mapImage' src={process.env.PUBLIC_URL + "/images/sondagem4Map.jpg"} />
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra41'} className="nav-link">
        <button className='mapPoint mapPoint1AR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point1.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra42'} className="nav-link">
        <button className='mapPoint mapPoint2AR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point2.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra43'} className="nav-link">
        <button className='mapPoint mapPoint3AR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point3.png"} />
        </button>
      </Link>
    </div>
  );
}
export default Sondagem4ARMap;