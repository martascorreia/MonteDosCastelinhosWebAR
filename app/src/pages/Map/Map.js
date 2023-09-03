import React, { useMemo, useState } from 'react';
import TopButtons from "../../components/TopButtons/TopButtons.js"
import "./Map.css"
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD-o5rhMpVLpjZBFyx_pVkE3OPhYCYR4Jk",
  });

  const center = useMemo(() => ({ lat: 39.012693, lng: -8.974526 }), []);

  const bounds = {
    southwest: {
      lat: 39.010969,
      lng: -8.979158
    },
    northeast: {
      lat: 39.013578,
      lng: -8.972700,
    },
  };

  const options = {
    mapTypeId: 'satellite',
    disableDefaultUI: true,
    restriction: {
      latLngBounds: bounds,
      strictBounds: true
    },
  };

  return (
    <div className="Map">
      <TopButtons backUrl={"/MonteDosCastelinhosWebAR"} />
      <div className="content">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={18}
            options={options}>
            <Marker position={{ lat: 39.012693, lng: -8.974526 }} />
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