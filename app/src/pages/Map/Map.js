import React, { useMemo, useState, useEffect } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "./Map.css"
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD-o5rhMpVLpjZBFyx_pVkE3OPhYCYR4Jk",
  });
  const navigate = useNavigate();
  const center = useMemo(() => ({ lat: 39.012666, lng: -8.974542 }), []);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      const southwest = new window.google.maps.LatLng(39.010969, -8.979158);
      const northeast = new window.google.maps.LatLng(39.013578, -8.972700);
      const newBounds = new window.google.maps.LatLngBounds(southwest, northeast);
      setOptions({
        mapTypeId: 'satellite',
        disableDefaultUI: true,
        restriction: {
          latLngBounds: newBounds,
          strictBounds: false
        }
      });
    } else {
      setOptions({
        mapTypeId: 'satellite',
        disableDefaultUI: true,
      });
    }
  }, [isLoaded]);

  return (
    <div className="Map">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="mapContainer"
            center={center}
            zoom={19}
            options={options}>
            <MarkerF
              position={{ lat: 39.012666, lng: -8.974542 }}
              icon={{
                url: (process.env.PUBLIC_URL + "/images/MapPoints/point4.png"),
                scaledSize: new window.google.maps.Size(64, 64),
              }}
              onClick={() => navigate('/MonteDosCastelinhosWebAR/sondagem4')}
            />
            <MarkerF
              position={{ lat: 39.011755, lng: -8.973840 }}
              icon={{
                url: (process.env.PUBLIC_URL + "/images/MapPoints/point5.png"),
                scaledSize: new window.google.maps.Size(64, 64),
              }}
              onClick={() => navigate('/MonteDosCastelinhosWebAR/sondagem5')}
            />
          </GoogleMap>
        )}
      </div >
      <button className="locationBtn roundBtn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}
export default Map;