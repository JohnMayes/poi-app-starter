import Form from './components/Form';
import Map from './components/Map';
import { useState } from 'react';
import './App.css';

export interface IPlaces {
  name: string;
  lat: string;
  log: string;
  key: string;
}

export type placeArrType = IPlaces[];

let initPlaces = [] as placeArrType;

function generateID() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function App() {
  const [places, setPlaces] = useState(initPlaces);

  const addPlace = (name: string, lat: string, log: string) => {
    const newPlace = places.slice();
    newPlace.push({ name: name, lat: lat, log: log, key: generateID() });
    setPlaces(newPlace);
  };

  const removePlace = (key: string) => {
    const newPlaces = places.slice();
    const removedIndex = newPlaces.findIndex((obj) => obj.key === key);
    if (removedIndex > -1) {
      newPlaces.splice(removedIndex, 1);
    }
    setPlaces(newPlaces);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Points of Interest</h1>
        <p>You have found {places.length} interesting places!</p>
      </header>
      <Form addPlace={addPlace} places={places} />
      <Map places={places} removePlace={removePlace} />
    </div>
  );
}

export default App;
