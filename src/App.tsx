import Form from './components/Form';
import ShowMap from './components/Map';
import React from 'react';
import { useState } from 'react';
import './App.css';

interface Props {}

interface State {}

function App(props: Props) {
  const [counter, setCounter] = useState(0);
  const [places, setPlaces] = useState([]);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Points of Interest</h1>
        <p>You have found {counter} intersting places!</p>
      </header>
      <Form count={incrementCounter} />
      <ShowMap />
    </div>
  );
}

export default App;
