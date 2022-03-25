import React, { SyntheticEvent, useState } from 'react';
import { IPlaces } from './../App';

interface IFormProps {
  placeToEdit: IPlaces;
  removePlace: (key: string) => void;
  editPlace: (key: string, name: string, lat: string, log: string) => void;
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

  // setFormInput({
  //   name: props.placeToEdit.name,
  //   lat: props.placeToEdit.lat,
  //   log: props.placeToEdit.log,
  // });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    props.editPlace(
      props.placeToEdit.key,
      formInput.name,
      formInput.lat,
      formInput.log
    );
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

  const divStyle = {
    color: 'red',
  };

  return (
    <section className="Comp-form">
      <form onSubmit={handleSubmit}>
        <h2 style={divStyle}>Edit {props.placeToEdit.name}</h2>

        <label htmlFor="point_name">Name</label>
        <input
          type="text"
          id="point_name"
          autoComplete="off"
          onChange={(e) => handleChange(e, 'name')}
          value={formInput.name}
          placeholder={props.placeToEdit.name}
          required={true}
          name={'name'}
        ></input>

        <label htmlFor="point_lat">Latitude</label>
        <input
          type="text"
          id="point_lat"
          onChange={(e) => handleChange(e, 'lat')}
          value={formInput.lat}
          placeholder={props.placeToEdit.lat}
          required={true}
          name={'lat'}
        ></input>

        <label htmlFor="point_long">Longitude</label>
        <input
          type="text"
          id="point_long"
          onChange={(e) => handleChange(e, 'log')}
          value={formInput.log}
          placeholder={props.placeToEdit.log}
          required={true}
          name={'log'}
        ></input>

        <button type="submit">Edit</button>
        <button
          type="button"
          onClick={() => props.removePlace(props.placeToEdit.key)}
        >
          Delete
        </button>
      </form>
    </section>
  );
}

export default EditForm;
