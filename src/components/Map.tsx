import React from 'react';
import daMap from './daMap.png';

interface Props {}

function ShowMap(props: Props) {
  return (
    <section className="Comp-map">
      <figure>
        <img src={daMap} alt="its da Map" />
        <figcaption>Its da Map!</figcaption>
      </figure>
    </section>
  );
}

export default ShowMap;
