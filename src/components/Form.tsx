import React, { SyntheticEvent, useState } from 'react';

interface IFormProps {
  addPlace: (name: string, lat: number, lng: number) => void;
}

interface IFormInput {
  name: string;
  lat: number;
  lng: number;
}

let initFormInput: IFormInput = { name: 'blank', lat: 0, lng: 0 };

function Form(props: IFormProps) {
  const [formInput, setFormInput] = useState(initFormInput);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    props.addPlace(formInput.name, formInput.lat, formInput.lng);
    formInput.name = '';
    formInput.lat = 0;
    formInput.lng = 0;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = { ...formInput };
    newInput.name = e.currentTarget.value;
    setFormInput(newInput);
  };

  const handleLatChange = (e: any) => {
    const newInput = { ...formInput };
    newInput.lat = e.currentTarget.value;
    setFormInput(newInput);
  };

  const handleLngChange = (e: any) => {
    const newInput = { ...formInput };
    newInput.lng = e.currentTarget.value;
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
          onChange={(e) => handleNameChange(e)}
          value={formInput.name}
          placeholder="Name"
          required={true}
          name={'name'}
        ></input>

        <label htmlFor="point_lat">Latitude</label>
        <input
          type="number"
          id="point_lat"
          onInput={(e) => handleLatChange(e)}
          value={formInput.lat}
          placeholder="00.0000"
          required={true}
          name={'lat'}
        ></input>

        <label htmlFor="point_long">Longitude</label>
        <input
          type="number"
          id="point_long"
          onChange={(e) => handleLngChange(e)}
          value={formInput.lng}
          placeholder="00.0000"
          required={true}
          name={'lng'}
        ></input>

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default Form;
