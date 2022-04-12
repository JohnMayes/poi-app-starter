import { placeArrType } from './../App';
import { useEffect, useRef } from 'react';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface IMapProps {
  places: placeArrType;
  loadPlaceToEdit: (key: string) => void;
}

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoiam1heWVzbWFwYm94IiwiYSI6ImNsMWNuOHFvODA1NmUza25zc29hMDc2NmMifQ.u23fMCsFVGbpYGon-Z1_Bw';

function DisplayMap(props: IMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="map-container" ref={mapContainerRef}>
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />

        <NavigationControl position="bottom-right" />
        <GeolocateControl />
      </Map>
    </div>
  );
}

export default DisplayMap;
