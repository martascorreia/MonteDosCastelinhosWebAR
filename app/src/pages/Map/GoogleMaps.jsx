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

const mapPoints = [
  { id: 'muralha', position: { lat: 39.011574, lng: -8.973439 }, icon: point1, route: '/sondagem9' },
  { id: 'habitacao-b', position: { lat: 39.011755, lng: -8.973840 }, icon: point2, route: '/sondagem5' },
  { id: 'oficinas', position: { lat: 39.011974, lng: -8.974278 }, icon: point3, route: '/sondagem8' },
  { id: 'habitacao-a', position: { lat: 39.012666, lng: -8.974542 }, icon: point4, route: '/sondagem4' },
];

function GoogleMaps({ options, cleanUp }) {
  const navigate = useNavigate();
  const center = useMemo(() => ({ lat: 39.012299, lng: -8.973784 }), []);
  const [userLocation, setUserLocation] = useState(null);
  const isUserPresent = isUserWithinBounds(userLocation);

  useEffect(() => {
    if (cleanUp) return undefined;
    if (!navigator.geolocation) return undefined;

    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        setUserLocation({
          lat: coords.latitude,
          lng: coords.longitude,
          accuracy: coords.accuracy,
        });
      },
      undefined,
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
        {mapPoints.map((point) => (
          <MarkerF
            key={point.id}
            position={point.position}
            icon={{
              url: point.icon,
              scaledSize: new window.google.maps.Size(64, 64),
            }}
            onClick={() => navigate(point.route)}
          />
        ))}
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