import Form from './components/Form';
import Map from './components/Map';
import { useState } from 'react';
import './App.css';

interface IPlaces {
  name: string;
  lat: string;
  log: string;
}

export interface IPlaceState {
  [index: number]: null | IPlaces;
}

let initPlaces = [] as IPlaces[];

function App() {
  const [counter, setCounter] = useState(0);
  const [places, setPlaces] = useState(initPlaces);

  const incrementCounter = () => setCounter(counter + 1);

  const addPlace = (name: string, lat: string, log: string) => {
    const newPlace = places.slice();
    newPlace.push({ name: name, lat: lat, log: log });
    setPlaces(newPlace);
  };

  console.log(places);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Points of Interest</h1>
        <p>You have found {counter} interesting places!</p>
      </header>
      <Form count={incrementCounter} addPlace={addPlace} />
      <Map places={places} />
    </div>
  );
}

export default App;
