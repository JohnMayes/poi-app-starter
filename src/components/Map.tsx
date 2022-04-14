import { placeArrType } from './../App';
import { useRef, useState } from 'react';
import MapGL, {
  GeolocateControl,
  NavigationControl,
  Marker,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import GeocoderControl from './geocoder-control';

interface IMapProps {
  places: placeArrType;
  loadPlaceToEdit: (key: string) => void;
  setTemp: (obj: { name: string; center: number[] }) => void;
}

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoiam1heWVzbWFwYm94IiwiYSI6ImNsMWNuOHFvODA1NmUza25zc29hMDc2NmMifQ.u23fMCsFVGbpYGon-Z1_Bw';

function DisplayMap(props: IMapProps) {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef(null);

  return (
    <div className="map-container" ref={mapContainerRef}>
      <MapGL
        ref={mapRef}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="bottom-right" />
        <GeolocateControl />
        <GeocoderControl
          mapboxAccessToken={MAPBOX_TOKEN}
          position="top-left"
          setTemp={props.setTemp}
        />
        {props.places.map((place) => {
          return <Marker longitude={place.lng} latitude={place.lat}></Marker>;
        })}
      </MapGL>
    </div>
  );
}

export default DisplayMap;
