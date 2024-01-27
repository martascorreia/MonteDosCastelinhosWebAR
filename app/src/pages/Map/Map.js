import TopButtons from "../../components/TopButtons/TopButtons.js"
import "./Map.css"
import "../../index.css"
import { useEffect, useState } from "react";
import { cleanSondagemFlags, getMapBounds } from '../../utils/utils.js';
import labels from '../../resources/images/maps/mainMapLabels.png';
import GoogleMaps from "./GoogleMaps.js";
import StaticMap from "./StaticMap.js";
import { useLoadScript } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD-o5rhMpVLpjZBFyx_pVkE3OPhYCYR4Jk",
  });

  const [cleanUp, setCleanUp] = useState(false);
  const [optionsSet, setOptionsSet] = useState(false);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      var mapBounds = getMapBounds();
      const southwest = new window.google.maps.LatLng(mapBounds.swLat, mapBounds.swLng);
      const northeast = new window.google.maps.LatLng(mapBounds.neLat, mapBounds.neLng);
      const newBounds = new window.google.maps.LatLngBounds(southwest, northeast);
      setOptions({
        mapTypeId: 'satellite',
        disableDefaultUI: true,
        restriction: {
          latLngBounds: newBounds,
          strictBounds: false
        }
      });
      setOptionsSet(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    cleanSondagemFlags();
  });

  return (
    <div className="Map">
      <TopButtons backUrl={"/"} cleanUp={() => setCleanUp(true)}/>
      <div className="content mapContent">
        <div className='mainMapHeader'>
          <div className='sondagemTitle'>Mapa</div>
        </div>
        {isLoaded && optionsSet
          ? <GoogleMaps options={options} cleanUp={cleanUp}/>
          : <StaticMap />
        }
        <div className='mainMapFooter'>
          <img className='mapLabels' src={labels} />
        </div>
      </div >
    </div>
  );
}
export default Map;