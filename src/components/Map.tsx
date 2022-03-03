import daMap from './daMap.png';
import { placeArrType } from './../App';

interface IMapProps {
  places: placeArrType;
}

function Map(props: IMapProps) {
  return (
    <section className="Comp-map">
      {/* <figure>
        <img src={daMap} alt="its da Map" />
        <figcaption>Its da Map!</figcaption>
      </figure> */}
      <h1>Places:</h1>
      <hr></hr>
      <div className="capturedPieces">
        {props.places.map((i) => {
          return <button type="button">{i.name.toString()}</button>;
        })}
      </div>
    </section>
  );
}

export default Map;
