import { IPlaces, placeArrType } from './../App';
import { useRef, useState, useMemo } from 'react';
import MapGL, {
  GeolocateControl,
  NavigationControl,
  Marker,
  Popup,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import GeocoderControl from './geocoder-control';
import Pin from './Pin';

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
  const [popup, setPopup] = useState<null | IPlaces>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef(null);

  const pins = useMemo(
    () =>
      props.places.map((place) => (
        <Marker
          key={`marker-${place.key}`}
          longitude={place.lng}
          latitude={place.lat}
          anchor="bottom"
          onClick={() => setPopup(place)}
        >
          <Pin color="#610000" opacity="1" />
        </Marker>
      )),
    [props.places]
  );

  return (
    <div className="map-container" ref={mapContainerRef}>
      <MapGL
        ref={mapRef}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        // style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="bottom-right" />
        <GeolocateControl position="bottom-right" />
        <GeocoderControl
          mapboxAccessToken={MAPBOX_TOKEN}
          position="top-left"
          setTemp={props.setTemp}
        />

        {pins}

        {popup && (
          <Popup
            anchor="top"
            longitude={popup.lng}
            latitude={popup.lat}
            closeOnClick={false}
            onClose={() => setPopup(null)}
          >
            <div>{popup.name}</div>
            <button onClick={() => props.loadPlaceToEdit(popup.key)}>
              Edit
            </button>
          </Popup>
        )}
      </MapGL>
    </div>
  );
}

export default DisplayMap;
