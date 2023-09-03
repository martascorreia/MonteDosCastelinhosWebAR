import React from 'react';
import "../../index.css"
import "./AugmentedReality.css"
import "./../Map/Map.css"

import { Link } from 'react-router-dom';

function Sondagem4ARMap() {
  return (
    <div className="SondagemMap">
      <img className='mapImage' src={process.env.PUBLIC_URL + "/images/sondagem4Map.jpg"} />
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra42'} className="nav-link">
        <button className='mapPoint1'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point1shadow.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra42'} className="nav-link">
        <button className='mapPoint2'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point2shadow.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/ra43'} className="nav-link">
        <button className='mapPoint3'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point3shadow.png"} />
        </button>
      </Link>
    </div>
  );
}
export default Sondagem4ARMap;