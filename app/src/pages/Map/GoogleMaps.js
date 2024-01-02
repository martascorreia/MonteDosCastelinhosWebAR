import React, { useMemo, useState, useEffect } from 'react';
import "./Map.css"
import "../../index.css"
import { useNavigate } from 'react-router-dom';
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import point1 from '../../resources/images/mapPoints/point1.png';
import point2 from '../../resources/images/mapPoints/point2.png';
import point3 from '../../resources/images/mapPoints/point3.png';
import point4 from '../../resources/images/mapPoints/point4.png';
import { getUserLocation, isUserWithinBounds } from '../../utils/utils.js';

function GoogleMaps({ options, cleanUp }) {
  const navigate = useNavigate();
  const center = useMemo(() => ({ lat: 39.012299, lng: -8.973784 }), []);
  const [userInterval, setUserInterval] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isUserPresent, setIsUserPresent] = useState(false);

  useEffect(() => {
    const updateLocation = () => {
      var userLocation = getUserLocation();
      setUserLocation(userLocation);
      setIsUserPresent(isUserWithinBounds(userLocation));
    };

    updateLocation();
    setUserInterval(setInterval(updateLocation, 5000));
  }, []);

  useEffect(() => {
    if (cleanUp) {
      clearInterval(userInterval);
    }
  }, []);

  return (
    <div className='mainMapMap'>
      <GoogleMap
        mapContainerClassName="mapContainer"
        center={center}
        zoom={18}
        options={options}>
        <MarkerF
          position={{ lat: 39.011574, lng: -8.973439 }}
          icon={{
            url: point1,
            scaledSize: new window.google.maps.Size(64, 64),
          }}
          onClick={() => navigate('/sondagem9')}
        />
        <MarkerF
          position={{ lat: 39.011755, lng: -8.973840 }}
          icon={{
            url: point2,
            scaledSize: new window.google.maps.Size(64, 64),
          }}
          onClick={() => navigate('/sondagem5')}
        />
        <MarkerF
          position={{ lat: 39.011974, lng: -8.974278 }}
          icon={{
            url: point3,
            scaledSize: new window.google.maps.Size(64, 64),
          }}
          onClick={() => navigate('/sondagem8')}
        />
        <MarkerF
          position={{ lat: 39.012666, lng: -8.974542 }}
          icon={{
            url: point4,
            scaledSize: new window.google.maps.Size(64, 64),
          }}
          onClick={() => navigate('/sondagem4')}
        />
        {isUserPresent && userLocation &&
          <MarkerF
            position={{ lat: userLocation.lat, lng: userLocation.lng }}
          />}
      </GoogleMap>     
    </div>
  );
}
export default GoogleMaps;