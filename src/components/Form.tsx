import React, { SyntheticEvent, useState } from 'react';

interface IFormProps {
  addPlace: (name: string, lat: string, lng: string) => void;
}

interface IFormInput {
  name: string;
  lat: string;
  lng: string;
}

let initFormInput = {} as IFormInput;

function Form(props: IFormProps) {
  const [formInput, setFormInput] = useState(initFormInput);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    props.addPlace(formInput.name, formInput.lat, formInput.lng);
    formInput.name = '';
    formInput.lat = '';
    formInput.lng = '';
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
          placeholder="Name"
          required={true}
          name={'name'}
        ></input>

        <label htmlFor="point_lat">Latitude</label>
        <input
          type="text"
          id="point_lat"
          onChange={(e) => handleChange(e, 'lat')}
          value={formInput.lat}
          placeholder="00.0000"
          required={true}
          name={'lat'}
        ></input>

        <label htmlFor="point_long">Longitude</label>
        <input
          type="text"
          id="point_long"
          onChange={(e) => handleChange(e, 'lng')}
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
