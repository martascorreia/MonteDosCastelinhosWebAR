import "./Map.css"
import "../../index.css"
import { Link } from 'react-router-dom';
import mainMapReversed from '../../resources/images/maps/mainMapReversed.png';
import point1 from '../../resources/images/mapPoints/point1.png';
import point2 from '../../resources/images/mapPoints/point2.png';
import point3 from '../../resources/images/mapPoints/point3.png';
import point4 from '../../resources/images/mapPoints/point4.png';

function StaticMap() {
  return (
    <div className='mainMapMap'>
      <img className='mainMapImage' src={mainMapReversed} />
      <Link to={'/sondagem4/'} className="nav-link">
        <button className='mapPoint mainMapPoint4Reversed'>
          <img className='mapPoints' src={point4} />
        </button>
      </Link>
      <Link to={'/sondagem5/'} className="nav-link">
        <button className='mapPoint mainMapPoint5Reversed'>
          <img className='mapPoints' src={point2} />
        </button>
      </Link>
      <Link to={'/sondagem8/'} className="nav-link">
        <button className='mapPoint mainMapPoint8Reversed'>
          <img className='mapPoints' src={point3} />
        </button>
      </Link>
      <Link to={'/sondagem9/'} className="nav-link">
        <button className='mapPoint mainMapPoint9Reversed'>
          <img className='mapPoints' src={point1} />
        </button>
      </Link>
    </div>
  );
}
export default StaticMap;