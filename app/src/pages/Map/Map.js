import TopButtons from "../../components/TopButtons/TopButtons.js"
import "./Map.css"
import "../../index.css"
import { Link } from 'react-router-dom';

function Map() {

  return (
    <div className="Map">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content mapContent">
        <div className='mainMapHeader'>
          <div className='sondagemTitle'>Mapa</div>
        </div>
        <div className='mainMapMap'>
          <img className='mainMapImage' src={process.env.PUBLIC_URL + "/images/Maps/map_smaller.jpg"} />
          <Link to={'/MonteDosCastelinhosWebAR/sondagem4/'} className="nav-link">
            <button className='mapPoint mainMapPoint4'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point4.png"} />
            </button>
          </Link>
          <Link to={'/MonteDosCastelinhosWebAR/sondagem5/'} className="nav-link">
            <button className='mapPoint mainMapPoint5'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point5.png"} />
            </button>
          </Link>
          <Link to={'/MonteDosCastelinhosWebAR/sondagem8/'} className="nav-link">
            <button className='mapPoint mainMapPoint8'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point8.png"} />
            </button>
          </Link>
          <Link to={'/MonteDosCastelinhosWebAR/sondagem9/'} className="nav-link">
            <button className='mapPoint mainMapPoint9'>
              <img className='mapPoints' src={process.env.PUBLIC_URL + "/images/MapPoints/point9.png"} />
            </button>
          </Link>
        </div>
        <div className='mainMapFooter'>
        </div>
      </div >
    </div>
  );
}
export default Map;