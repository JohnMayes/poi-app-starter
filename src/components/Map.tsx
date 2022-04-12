import { placeArrType } from './../App';
import { useRef, useCallback, useState } from 'react';
import MapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import GeocoderControl from './geocoder-control';

interface IMapProps {
  places: placeArrType;
  loadPlaceToEdit: (key: string) => void;
}

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoiam1heWVzbWFwYm94IiwiYSI6ImNsMWNuOHFvODA1NmUza25zc29hMDc2NmMifQ.u23fMCsFVGbpYGon-Z1_Bw';

function DisplayMap(props: IMapProps) {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef(null);
  const geocoderContainerRef = useRef(null);

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <div className="map-container" ref={mapContainerRef}>
      <MapGL
        ref={mapRef}
        {...viewport}
        onMove={handleViewportChange}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="bottom-right" />
        <GeolocateControl />
        <GeocoderControl mapboxAccessToken={MAPBOX_TOKEN} position="top-left" />
      </MapGL>
    </div>
  );
}

export default DisplayMap;
