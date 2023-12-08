import TopButtons from "../../components/TopButtons/TopButtons.js"
import "./Map.css"
import "../../index.css"
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { cleanSondagemFlags } from '../../utils/utils.js';

function Map() {
  useEffect(() => {
    cleanSondagemFlags();
  });

  return (
    <div className="Map">
      <TopButtons backUrl={"/"} />
      <div className="content mapContent">
        <div className='mainMapHeader'>
          <div className='sondagemTitle'>Mapa</div>
        </div>
        <div className='mainMapMap'>
          <img className='mainMapImage' src={process.env.PUBLIC_URL + "/images/Maps/mainMapReversed.png"} />
          <Link to={'/sondagem4/'} className="nav-link">
            <button className='mapPoint mainMapPoint4Reversed'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point4.png"} />
            </button>
          </Link>
          <Link to={'/sondagem5/'} className="nav-link">
            <button className='mapPoint mainMapPoint5Reversed'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point2.png"} />
            </button>
          </Link>
          <Link to={'/sondagem8/'} className="nav-link">
            <button className='mapPoint mainMapPoint8Reversed'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point3.png"} />
            </button>
          </Link>
          <Link to={'/sondagem9/'} className="nav-link">
            <button className='mapPoint mainMapPoint9Reversed'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point1.png"} />
            </button>
          </Link>
        </div>
        <div className='mainMapFooter'>
          <img className='mapLabels' src={process.env.PUBLIC_URL + "/images/Maps/labels.png"} />
        </div>
      </div >
    </div>
  );
}
export default Map;