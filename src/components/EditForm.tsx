import React, { SyntheticEvent, useState } from 'react';
import { IPlaces } from './../App';

interface IFormProps {
  placeToEdit: IPlaces;
  removePlace: (key: string) => void;
  editPlace: (key: string, name: string, lat: number, lng: number) => void;
}

interface IFormInput {
  name: string;
  lat: number;
  lng: number;
}

// INIT FORM INPUTS AS INPUT TO CHANGE

let initFormInput = {} as IFormInput;

function EditForm(props: IFormProps) {
  const [formInput, setFormInput] = useState(initFormInput);

  // setFormInput({
  //   name: props.placeToEdit.name,
  //   lat: props.placeToEdit.lat,
  //   lng: props.placeToEdit.lng,
  // });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    props.editPlace(
      props.placeToEdit.key,
      formInput.name,
      formInput.lat,
      formInput.lng
    );
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
          onChange={(e) => handleNameChange(e)}
          value={formInput.name}
          placeholder={props.placeToEdit.name}
          required={true}
          name={'name'}
        ></input>

        <label htmlFor="point_lat">Latitude</label>
        <input
          type="number"
          id="point_lat"
          onChange={(e) => handleLatChange(e)}
          value={formInput.lat}
          required={true}
          name={'lat'}
        ></input>

        <label htmlFor="point_long">Longitude</label>
        <input
          type="number"
          id="point_long"
          onChange={(e) => handleLngChange(e)}
          value={formInput.lng}
          required={true}
          name={'lng'}
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
