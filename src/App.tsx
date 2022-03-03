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
  const [counter, setCounter] = useState(0);
  const [places, setPlaces] = useState(initPlaces);

  const incrementCounter = () => setCounter(counter + 1);

  const addPlace = (name: string, lat: string, log: string) => {
    const newPlace = places.slice();
    newPlace.push({ name: name, lat: lat, log: log, key: generateID() });
    setPlaces(newPlace);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Points of Interest</h1>
        <p>You have found {counter} interesting places!</p>
      </header>
      <Form count={incrementCounter} addPlace={addPlace} places={places} />
      <Map places={places} />
    </div>
  );
}

export default App;
