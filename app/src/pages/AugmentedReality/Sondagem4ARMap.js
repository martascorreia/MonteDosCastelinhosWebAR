import React, { useState } from 'react';
import "../../index.css"
import "./AugmentedReality.css"
import "./../Map/Map.css"
import { Link } from 'react-router-dom';

function Sondagem4ARMap() {
  const [sondagem4ARAFlag, setSondagem4ARAFlag] = useState(localStorage.getItem('sondagem4ARAFlag'));
  const [sondagem4ARBFlag, setSondagem4ARBFlag] = useState(localStorage.getItem('sondagem4ARBFlag'));
  const [sondagem4ARCFlag, setSondagem4ARCFlag] = useState(localStorage.getItem('sondagem4ARCFlag'));

  return (
    <div className="SondagemMap">
      <img className='mapImage' src={process.env.PUBLIC_URL + "/images/Maps/sondagem4ARMap.jpg"} />
      <Link to={'/sondagem4/raA'} className="nav-link">
        <button className='mapPoint mapPointAAR4'>
          {(sondagem4ARAFlag == null || sondagem4ARAFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointA.png"} />}
          {(sondagem4ARAFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointAdarker.png"} />}
        </button>
      </Link>
      <Link to={'/sondagem4/raB'} className="nav-link">
        <button className='mapPoint mapPointBAR4'>
          {(sondagem4ARBFlag == null || sondagem4ARBFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointB.png"} />}
          {(sondagem4ARBFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointBdarker.png"} />}
        </button>
      </Link>
      <Link to={'/sondagem4/raC'} className="nav-link">
        <button className='mapPoint mapPointCAR4'>
          {(sondagem4ARCFlag == null || sondagem4ARCFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointC.png"} />}
          {(sondagem4ARCFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointCdarker.png"} />}
        </button>
      </Link>
    </div>
  );
}
export default Sondagem4ARMap;