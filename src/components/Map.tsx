import { placeArrType } from './../App';
import { useRef, useState } from 'react';
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
  const [popup, setPopup] = useState(false);

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
          return (
            <Marker
              longitude={place.lng}
              latitude={place.lat}
              anchor="bottom"
              onClick={() => setPopup(true)}
            >
              <div>
                <Pin
                // onClick={() => {
                //   setPopup(true);
                // }}
                />
              </div>
            </Marker>
          );
        })}
        {popup && (
          <Popup
            anchor="top"
            longitude={0}
            latitude={0}
            closeOnClick={false}
            onClose={() => setPopup(false)}
          >
            <div>
              <a target="_new" href={`http://en.wikipedia.org/`}>
                Wikipedia
              </a>
            </div>
          </Popup>
        )}
      </MapGL>
    </div>
  );
}

export default DisplayMap;
