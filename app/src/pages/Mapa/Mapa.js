import React, { useMemo } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "./Mapa.css"
import "../../index.css"

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


function Mapa() {
  const mapsAPIKey = "AIzaSyD-o5rhMpVLpjZBFyx_pVkE3OPhYCYR4Jk";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapsAPIKey,
  });

  const [map, setMap] = React.useState(null)


  const center = useMemo(() => ({ lat: 39.012693, lng: -8.974526 }), []);

  return (
    <div className="Mapa" id="mapa">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={20} >
            <Marker position={{ lat: 39.012693, lng: -8.974526 }} />
          </GoogleMap>
        )}
      </div >
    </div>
  );
}
export default Mapa;

