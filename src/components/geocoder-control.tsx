// @ts-nocheck
import { useState } from 'react';
import { useControl, Marker, ControlPosition } from 'react-map-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Pin from './Pin';

type GeocoderControlProps = {
  mapboxAccessToken: string;
  origin?: string;
  zoom?: number;
  flyTo?: boolean | object;
  placeholder?: string;
  proximity?: {
    longitude: number;
    latitude: number;
  };
  trackProximity?: boolean;
  collapsed?: boolean;
  clearAndBlurOnEsc?: boolean;
  clearOnBlur?: boolean;
  box?: [number, number, number, number];
  countries?: string;
  types?: string;
  minLength?: number;
  limit?: number;
  language?: string;
  filter?: (feature: object) => boolean;
  localGeocoder?: Function;
  externalGeocoder?: Function;
  reverseMode?: 'distance' | 'score';
  reverseGeocode?: boolean;
  enableEventLogging?: boolean;
  marker?: boolean | object;
  render?: (feature: object) => string;
  getItemValue?: (feature: object) => string;
  mode?: 'mapbox.places' | 'mapbox.places-permanent';
  localGeocoderOnly?: boolean;
  autocomplete?: boolean;
  fuzzyMatch?: boolean;
  routing?: boolean;
  worldview?: string;

  position: ControlPosition;

  onLoading?: (e: object) => void;
  onResults?: (e: object) => void;
  onResult?: (e: object) => void;
  onError?: (e: object) => void;

  setTemp: (obj: { name: string; center: number[] }) => void;
};

/* eslint-disable complexity,max-statements */
export default function GeocoderControl(props: GeocoderControlProps) {
  const [marker, setMarker] = useState(null);

  const coordinatesGeocoder = function (query) {
    // Match anything which looks like
    // decimal degrees coordinate pair.
    const matches = query.match(
      /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
      return null;
    }

    function coordinateFeature(lng, lat) {
      return {
        center: [lng, lat],
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
        place_name: 'Lat: ' + lat + ' Lng: ' + lng,
        place_type: ['coordinate'],
        properties: {},
        type: 'Feature',
      };
    }

    const coord1 = Number(matches[1]);
    const coord2 = Number(matches[2]);
    const geocodes = [];

    if (coord1 < -90 || coord1 > 90) {
      // must be lng, lat
      geocodes.push(coordinateFeature(coord1, coord2));
    }

    if (coord2 < -90 || coord2 > 90) {
      // must be lat, lng
      geocodes.push(coordinateFeature(coord2, coord1));
    }

    if (geocodes.length === 0) {
      // else could be either lng, lat or lat, lng
      geocodes.push(coordinateFeature(coord1, coord2));
      geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
  };

  const geocoder = useControl<MapboxGeocoder>(
    () => {
      const ctrl = new MapboxGeocoder({
        ...props,
        accessToken: props.mapboxAccessToken,
        localGeocoder: coordinatesGeocoder,
        placeholder: 'Try: -40, 170',
        reverseGeocode: true,
      });
      ctrl.on('loading', props.onLoading);
      ctrl.on('results', props.onResults);
      ctrl.on('result', (evt) => {
        props.onResult(evt);

        const { result } = evt;
        props.setTemp({ name: result.place_name, center: result.center });
        const location =
          result &&
          (result.center ||
            (result.geometry?.type === 'Point' && result.geometry.coordinates));
        if (location) {
          setMarker(
            <Marker
              {...props.marker}
              longitude={location[0]}
              latitude={location[1]}
              anchor="bottom"
            >
              <Pin opacity="0.3" color="blue" />
            </Marker>
          );
        } else {
          setMarker(null);
        }
      });
      ctrl.on('error', props.onError);
      return ctrl;
    },
    {
      position: props.position,
    }
  );

  if (geocoder._map) {
    if (
      geocoder.getProximity() !== props.proximity &&
      props.proximity !== undefined
    ) {
      geocoder.setProximity(props.proximity);
    }
    if (
      geocoder.getRenderFunction() !== props.render &&
      props.render !== undefined
    ) {
      geocoder.setRenderFunction(props.render);
    }
    if (
      geocoder.getLanguage() !== props.language &&
      props.language !== undefined
    ) {
      geocoder.setLanguage(props.language);
    }
    if (geocoder.getZoom() !== props.zoom && props.zoom !== undefined) {
      geocoder.setZoom(props.zoom);
    }
    if (geocoder.getFlyTo() !== props.flyTo && props.flyTo !== undefined) {
      geocoder.setFlyTo(props.zoom);
    }
    if (
      geocoder.getPlaceholder() !== props.placeholder &&
      props.placeholder !== undefined
    ) {
      geocoder.setPlaceholder(props.zoom);
    }
    if (
      geocoder.getCountries() !== props.countries &&
      props.countries !== undefined
    ) {
      geocoder.setCountries(props.zoom);
    }
    if (geocoder.getTypes() !== props.types && props.types !== undefined) {
      geocoder.setTypes(props.zoom);
    }
    if (
      geocoder.getMinLength() !== props.minLength &&
      props.minLength !== undefined
    ) {
      geocoder.setMinLength(props.zoom);
    }
    if (geocoder.getLimit() !== props.limit && props.limit !== undefined) {
      geocoder.setLimit(props.zoom);
    }
    if (geocoder.getFilter() !== props.filter && props.filter !== undefined) {
      geocoder.setFilter(props.zoom);
    }
    if (geocoder.getOrigin() !== props.origin && props.origin !== undefined) {
      geocoder.setOrigin(props.zoom);
    }
    if (
      geocoder.getAutocomplete() !== props.autocomplete &&
      props.autocomplete !== undefined
    ) {
      geocoder.setAutocomplete(props.zoom);
    }
    if (
      geocoder.getFuzzyMatch() !== props.fuzzyMatch &&
      props.fuzzyMatch !== undefined
    ) {
      geocoder.setFuzzyMatch(props.zoom);
    }
    if (
      geocoder.getRouting() !== props.routing &&
      props.routing !== undefined
    ) {
      geocoder.setRouting(props.zoom);
    }
    if (
      geocoder.getWorldview() !== props.worldview &&
      props.worldview !== undefined
    ) {
      geocoder.setWorldview(props.zoom);
    }
  }
  return marker;
}

const noop = () => {};

GeocoderControl.defaultProps = {
  onLoading: noop,
  onResults: noop,
  onResult: noop,
  onError: noop,
};
