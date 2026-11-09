import React, { useMemo, useState, useEffect } from 'react';
import "./Map.css"
import "../../index.css"
import { useNavigate } from 'react-router-dom';
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import point1 from '../../resources/images/mapPoints/point1.png';
import point2 from '../../resources/images/mapPoints/point2.png';
import point3 from '../../resources/images/mapPoints/point3.png';
import point4 from '../../resources/images/mapPoints/point4.png';
import { isUserWithinBounds } from '../../utils/utils';

function GoogleMaps({ options, cleanUp }) {
  const navigate = useNavigate();
  const center = useMemo(() => ({ lat: 39.012299, lng: -8.973784 }), []);
  const [userLocation, setUserLocation] = useState(null);
  const [isUserPresent, setIsUserPresent] = useState(false);

  useEffect(() => {
    if (cleanUp || !navigator.geolocation?.watchPosition) return undefined;

    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const location = {
          lat: coords.latitude,
          lng: coords.longitude,
        };
        setUserLocation(location);
        setIsUserPresent(isUserWithinBounds(location));
      },
      () => {
        setUserLocation(null);
        setIsUserPresent(false);
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [cleanUp]);

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
            title="A sua localização"
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 9,
              fillColor: '#1676d2',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3,
            }}
          />}
      </GoogleMap>     
    </div>
  );
}
export default GoogleMaps;