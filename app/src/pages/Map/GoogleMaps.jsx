import React, { useMemo, useState, useEffect, useRef } from 'react';
import "./Map.css"
import "../../index.css"
import { useNavigate } from 'react-router-dom';
import { GoogleMap, MarkerF, PolylineF } from "@react-google-maps/api";
import point1 from '../../resources/images/mapPoints/point1.png';
import point2 from '../../resources/images/mapPoints/point2.png';
import point3 from '../../resources/images/mapPoints/point3.png';
import point4 from '../../resources/images/mapPoints/point4.png';
import { isUserWithinBounds } from '../../utils/utils';

const mapPoints = [
  { id: 'muralha', name: 'Muralha · Sondagem 9', position: { lat: 39.011574, lng: -8.973439 }, icon: point1, route: '/sondagem9' },
  { id: 'habitacao-b', name: 'Habitação B · Sondagem 5', position: { lat: 39.011755, lng: -8.973840 }, icon: point2, route: '/sondagem5' },
  { id: 'oficinas', name: 'Habitações e Oficinas · Sondagem 8', position: { lat: 39.011974, lng: -8.974278 }, icon: point3, route: '/sondagem8' },
  { id: 'habitacao-a', name: 'Habitação A · Sondagem 4', position: { lat: 39.012666, lng: -8.974542 }, icon: point4, route: '/sondagem4' },
];

const getDistanceMeters = (origin, destination) => {
  const toRadians = (degrees) => degrees * Math.PI / 180;
  const latitudeDelta = toRadians(destination.lat - origin.lat);
  const longitudeDelta = toRadians(destination.lng - origin.lng);
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(toRadians(origin.lat)) * Math.cos(toRadians(destination.lat))
    * Math.sin(longitudeDelta / 2) ** 2;

  return 6371000 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
};

const formatDistance = (distance) => distance >= 1000
  ? `${(distance / 1000).toFixed(1)} km`
  : `${Math.round(distance)} m`;

function GoogleMaps({ options, cleanUp }) {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const center = useMemo(() => ({ lat: 39.012299, lng: -8.973784 }), []);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [selectedPointId, setSelectedPointId] = useState(null);
  const isUserPresent = isUserWithinBounds(userLocation);
  const nearbyPoints = useMemo(() => userLocation
    ? mapPoints
      .map((point) => ({ ...point, distance: getDistanceMeters(userLocation, point.position) }))
      .sort((first, second) => first.distance - second.distance)
    : [], [userLocation]);
  const selectedPoint = mapPoints.find((point) => point.id === selectedPointId);

  useEffect(() => {
    if (isUserPresent && !selectedPointId && nearbyPoints.length) {
      setSelectedPointId(nearbyPoints[0].id);
    }
  }, [isUserPresent, nearbyPoints, selectedPointId]);

  useEffect(() => {
    if (cleanUp) return undefined;
    if (!navigator.geolocation) {
      setLocationError('unsupported');
      return undefined;
    }

    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        setUserLocation({
          lat: coords.latitude,
          lng: coords.longitude,
          accuracy: coords.accuracy,
        });
        setLocationError(null);
      },
      (error) => {
        setLocationError(error.code === 1 ? 'denied' : 'error');
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
        options={options}
        onLoad={(map) => { mapRef.current = map; }}
        onUnmount={() => { mapRef.current = null; }}>
        {mapPoints.map((point) => (
          <MarkerF
            key={point.id}
            position={point.position}
            icon={{
              url: point.icon,
              scaledSize: new window.google.maps.Size(64, 64),
            }}
            onClick={() => setSelectedPointId(point.id)}
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
        {isUserPresent && userLocation && selectedPoint &&
          <PolylineF
            path={[userLocation, selectedPoint.position]}
            options={{
              strokeColor: '#1676d2',
              strokeOpacity: 0.9,
              strokeWeight: 4,
              geodesic: true,
            }}
          />}
      </GoogleMap>
      {isUserPresent && userLocation
        ? <section className="navigationPanel" aria-label="Navegação para os pontos">
          <h2>Pontos próximos</h2>
          <p className="navigationHint">Distâncias em linha reta</p>
          <div className="navigationPointList">
            {nearbyPoints.map((point) => (
              <button
                key={point.id}
                type="button"
                className={`navigationPointButton${point.id === selectedPointId ? ' isSelected' : ''}`}
                aria-pressed={point.id === selectedPointId}
                onClick={() => {
                  setSelectedPointId(point.id);
                  mapRef.current?.panTo(point.position);
                }}>
                <span>{point.name}</span>
                <strong>{formatDistance(point.distance)}</strong>
              </button>
            ))}
          </div>
          {selectedPoint && <div className="navigationActions">
            <a
              className="walkingDirectionsLink"
              href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${selectedPoint.position.lat},${selectedPoint.position.lng}&travelmode=walking`}
              target="_blank"
              rel="noreferrer">
              Abrir direções a pé
            </a>
            <button type="button" className="siteDetailsButton" onClick={() => navigate(selectedPoint.route)}>
              Ver local
            </button>
          </div>}
        </section>
        : <div className="locationStatus" role="status">
          {locationError === 'denied'
            ? 'Permita a localização no navegador para ativar a navegação.'
            : locationError
              ? 'Não foi possível obter a localização deste dispositivo.'
              : userLocation
                ? 'A navegação fica disponível dentro dos limites do mapa.'
                : 'A obter localização…'}
        </div>}
    </div>
  );
}
export default GoogleMaps;