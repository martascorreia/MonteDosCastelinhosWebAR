import React from 'react';
import "../../index.css"
import "./VirtualReality.css"
import "./../Map/Map.css"
import { Link } from 'react-router-dom';

function Sondagem4VRMap() {
  return (
    <div className="SondagemMap">
      <img className='mapImage' src={process.env.PUBLIC_URL + "/images/Maps/sondagem4VRMap.jpg"} />
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/rvA'} className="nav-link">
        <button className='mapPoint mapPointAVR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointA.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/rvB'} className="nav-link">
        <button className='mapPoint mapPointBVR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointB.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/rvC'} className="nav-link">
        <button className='mapPoint mapPointCVR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointC.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/rvD'} className="nav-link">
        <button className='mapPoint mapPointDVR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointD.png"} />
        </button>
      </Link>
      <Link to={'/MonteDosCastelinhosWebAR/sondagem4/rvE'} className="nav-link">
        <button className='mapPoint mapPointEVR4'>
          <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointE.png"} />
        </button>
      </Link>
    </div>
  );
}
export default Sondagem4VRMap;