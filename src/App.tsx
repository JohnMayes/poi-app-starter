import Form from './components/Form';
import ShowMap from './components/Map';
import React from 'react';
import { useState } from 'react';
import './App.css';

interface Props {}

interface State {}

function App(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Points of Interest</h1>
        <p>You have found intersting places!</p>
      </header>
      <Form />
      <ShowMap />
    </div>
  );
}

export default App;
