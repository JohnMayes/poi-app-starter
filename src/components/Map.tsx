import daMap from './daMap.png';
import { IPlaceState } from './../App';

interface IMapProps {
  places: IPlaceState;
}

function Map(props: IMapProps) {
  return (
    <section className="Comp-map">
      <figure>
        <img src={daMap} alt="its da Map" />
        <figcaption>Its da Map!</figcaption>
      </figure>
    </section>
  );
}

export default Map;
