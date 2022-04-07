import { placeArrType } from './../App';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

interface IMapProps {
  places: placeArrType;
  loadPlaceToEdit: (key: string) => void;
}

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string;

function Map(props: IMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // BEGIN USE EFFECT: initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as string | HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-96, 37.8],
      zoom: 3,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
      })
    );

    props.places.map((place) => {
      const lngLat: [number, number] = [place.lng, place.lat];
      new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
    });

    // clean up on unmount
    return () => map.remove();
  }, [props.places]); // END USE EFFECT

  return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;
