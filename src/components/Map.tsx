// import daMap from './daMap.png';
import { placeArrType } from './../App';
import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

interface IMapProps {
  places: placeArrType;
  loadPlaceToEdit: (key: string) => void;
}

function Map(props: IMapProps) {
  const [viewBox, setViewBox] = useState({
    longitude: -122.4,
    latitude: 37.8,
    width: 600,
    height: 400,
    zoom: 14,
  });

  return (
    <div>
      <ReactMapGL
        {...viewBox}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        anything here?
      </ReactMapGL>
    </div>
    // <section className="Comp-map">
    //   <h1>Places:</h1>
    //   <div className="placeButtons">
    //     {props.places.map((i) => {
    //       return (
    //         <button type="button" onClick={() => props.loadPlaceToEdit(i.key)}>
    //           {i.name.toString()}
    //         </button>
    //       );
    //     })}
    //   </div>
    // </section>
  );
}

export default Map;
