import React, { SyntheticEvent, useState } from 'react';
import { placeArrType } from './../App';

interface IFormProps {
  addPlace: (name: string, lat: string, log: string) => void;
  places: placeArrType;
}

interface IFormInput {
  name: string;
  lat: string;
  log: string;
}

let initFormInput = {} as IFormInput;

function Form(props: IFormProps) {
  const [formInput, setFormInput] = useState(initFormInput);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    props.addPlace(formInput.name, formInput.lat, formInput.log);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    const newInput = { ...formInput };
    newInput[inputType as keyof IFormInput] = e.currentTarget.value;
    setFormInput(newInput);
  };

  return (
    <section className="Comp-form">
      <form onSubmit={handleSubmit}>
        <h2>Where do you want to go?</h2>
        <label htmlFor="point_name">Name</label>
        <input
          type="text"
          id="point_name"
          autoComplete="off"
          onChange={(e) => handleChange(e, 'name')}
          value={formInput.name}
          required={true}
          name={'name'}
        ></input>
        <label htmlFor="point_lat">Latitude</label>
        <input
          type="text"
          id="point_lat"
          onChange={(e) => handleChange(e, 'lat')}
          value={formInput.lat}
          required={true}
          name={'lat'}
        ></input>
        <label htmlFor="point_long">Longitude</label>
        <input
          type="text"
          id="point_long"
          onChange={(e) => handleChange(e, 'log')}
          value={formInput.log}
          required={true}
          name={'log'}
        ></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default Form;
