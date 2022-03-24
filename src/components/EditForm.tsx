import React, { SyntheticEvent, useState } from 'react';
import { placeArrType, IPlaces } from './../App';

interface IFormProps {
  addPlace: (name: string, lat: string, log: string) => void;
  places: placeArrType;
  edit: boolean;
  placeToEdit: IPlaces;
}

interface IFormInput {
  name: string;
  lat: string;
  log: string;
}

// INIT FORM INPUTS AS INPUT TO CHANGE

let initFormInput = {} as IFormInput;

function EditForm(props: IFormProps) {
  const [formInput, setFormInput] = useState(initFormInput);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    props.addPlace(formInput.name, formInput.lat, formInput.log);
    formInput.name = '';
    formInput.lat = '';
    formInput.log = '';
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
        <h2>Edit Place</h2>

        <label htmlFor="point_name">Name</label>
        <input
          type="text"
          id="point_name"
          autoComplete="off"
          onChange={(e) => handleChange(e, 'name')}
          value={props.edit ? props.placeToEdit.name : formInput.name}
          required={true}
          name={'name'}
        ></input>

        <label htmlFor="point_lat">Latitude</label>
        <input
          type="text"
          id="point_lat"
          onChange={(e) => handleChange(e, 'lat')}
          value={props.edit ? props.placeToEdit.lat : formInput.lat}
          required={true}
          name={'lat'}
        ></input>

        <label htmlFor="point_long">Longitude</label>
        <input
          type="text"
          id="point_long"
          onChange={(e) => handleChange(e, 'log')}
          value={props.edit ? props.placeToEdit.log : formInput.log}
          required={true}
          name={'log'}
        ></input>

        <button type="submit">{props.edit ? 'Edit' : 'Add'}</button>
      </form>
    </section>
  );
}

export default EditForm;
