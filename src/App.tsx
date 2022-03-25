import Form from './components/Form';
import EditForm from './components/EditForm';
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

const initEdit: IPlaces = {
  name: '',
  lat: '',
  log: '',
  key: '',
};

function generateID() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function App() {
  const [places, setPlaces] = useState(initPlaces);
  const [isEditing, setIsEditing] = useState(false);
  const [placeToEdit, setPlaceToEdit] = useState(initEdit);

  const addPlace = (name: string, lat: string, log: string) => {
    setIsEditing(false);
    const newPlace = places.slice();
    newPlace.push({ name: name, lat: lat, log: log, key: generateID() });
    setPlaces(newPlace);
  };

  const removePlace = (key: string) => {
    const remainingPlaces = places.filter((place) => key !== place.key);
    setPlaces(remainingPlaces);
    setIsEditing(!isEditing);
  };

  const loadPlaceToEdit = (key: string) => {
    setIsEditing(true);
    const edit = places.find((place) => key === place.key);
    if (edit !== undefined) {
      setPlaceToEdit(edit);
    }
  };

  const editPlace = (key: string, name: string, lat: string, log: string) => {
    const newPlaces = places.map((place) => ({
      ...place,
      name: place.key === key ? name : place.name,
      lat: place.key === key ? lat : place.lat,
      log: place.key === key ? log : place.log,
    }));
    setPlaces(newPlaces);
    setIsEditing(!isEditing);
  };

  const latRegex =
    /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  const longRegex =
    /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Points of Interest</h1>
        <p>
          You have found {places.length} interesting place
          {places.length === 1 ? '' : 's'}!
        </p>
      </header>
      {isEditing ? (
        <EditForm
          placeToEdit={placeToEdit}
          removePlace={removePlace}
          editPlace={editPlace}
        />
      ) : (
        <Form addPlace={addPlace} />
      )}

      <Map places={places} loadPlaceToEdit={loadPlaceToEdit} />
    </div>
  );
}

export default App;
