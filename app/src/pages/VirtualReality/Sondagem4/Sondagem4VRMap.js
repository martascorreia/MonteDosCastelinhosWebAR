
import React, { useState } from 'react';
import TopButtons from "../../../components/TopButtons/TopButtons.js"
import "./Sondagem4VRMap.css"
import "../../../index.css"
import { Link } from 'react-router-dom';
import { setOrientation } from '../../../utils/utils.js';

function Sondagem4VRMap({ instructions }) {
  setOrientation("landscape");
  const [sondagem4VRAFlag, setSondagem4VRAFlag] = useState(localStorage.getItem('sondagem4VRAFlag'));
  const [sondagem4VRBFlag, setSondagem4VRBFlag] = useState(localStorage.getItem('sondagem4VRBFlag'));
  const [sondagem4VRCFlag, setSondagem4VRCFlag] = useState(localStorage.getItem('sondagem4VRCFlag'));
  const [sondagem4VRDFlag, setSondagem4VRDFlag] = useState(localStorage.getItem('sondagem4VRDFlag'));
  const [sondagem4VREFlag, setSondagem4VREFlag] = useState(localStorage.getItem('sondagem4VREFlag'));

  return (
    <div className="Sonsagem4VRMap">
      <TopButtons hideFullScreenButton={true} backUrl={"/sondagem4"} />
      <div className="content Sonsagem4ARMapContent">
        <div className='Sonsagem4ARMapElements'>
          <div className="arMapInstructions">
            <div className="arMapInstructionsTitle">
              Instruções
            </div>
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </div>
          <div className="vrMapContent">
            <img className='mapImage' src={process.env.PUBLIC_URL + "/images/Maps/sondagem4VRMap.jpg"} />
            <Link to={'/sondagem4/rvA'} className="nav-link">
              <button className='mapPoint mapPointAVR4'>
                {(sondagem4VRAFlag == null || sondagem4VRAFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointA.png"} />}
                {(sondagem4VRAFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointAdarker.png"} />}
              </button>
            </Link>
            <Link to={'/sondagem4/rvB'} className="nav-link">
              <button className='mapPoint mapPointBVR4'>
                {(sondagem4VRBFlag == null || sondagem4VRBFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointB.png"} />}
                {(sondagem4VRBFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointBdarker.png"} />}
              </button>
            </Link>
            <Link to={'/sondagem4/rvC'} className="nav-link">
              <button className='mapPoint mapPointCVR4'>
                {(sondagem4VRCFlag == null || sondagem4VRCFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointC.png"} />}
                {(sondagem4VRCFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointCdarker.png"} />}
              </button>
            </Link>
            <Link to={'/sondagem4/rvD'} className="nav-link">
              <button className='mapPoint mapPointDVR4'>
                {(sondagem4VRDFlag == null || sondagem4VRDFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointD.png"} />}
                {(sondagem4VRDFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointDdarker.png"} />}
              </button>
            </Link>
            <Link to={'/sondagem4/rvE'} className="nav-link">
              <button className='mapPoint mapPointEVR4'>
                {(sondagem4VREFlag == null || sondagem4VREFlag == 'false') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointE.png"} />}
                {(sondagem4VREFlag == 'true') && <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/pointEdarker.png"} />}
              </button>
            </Link>
          </div>
        </div>
      </div >
    </div>
  );
}
export default Sondagem4VRMap;