import { placeArrType } from './../App';
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

interface IMapProps {
  places: placeArrType;
  loadPlaceToEdit: (key: string) => void;
}

const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;

mapboxgl.accessToken = accessToken;

function Map(props: IMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // BEGIN USE EFFECT: initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as string | HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // END USE EFFECT

  return (
    <div className="map-container" ref={mapContainerRef} />
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
