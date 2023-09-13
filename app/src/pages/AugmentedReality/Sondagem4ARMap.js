import React from 'react';
import "../../index.css"
import "./AugmentedReality.css"
import "./../Map/Map.css"
import { Link } from 'react-router-dom';

function Sondagem4ARMap() {
  return (
    <div className="SondagemMap">
      <img className='mapImage' src={process.env.PUBLIC_URL + "/images/Maps/sondagem4ARMap.jpg"} />
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/raA'} className="nav-link">
        <button className='mapPoint mapPointAAR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointA.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/raB'} className="nav-link">
        <button className='mapPoint mapPointBAR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointB.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/raC'} className="nav-link">
        <button className='mapPoint mapPointCAR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointC.png"} />
        </button>
      </Link>
    </div>
  );
}
export default Sondagem4ARMap;