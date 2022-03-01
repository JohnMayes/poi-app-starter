import { useState } from 'react';

interface FormProps {
  count: () => void;
}

function Form({ count }: FormProps) {
  function handleSubmit(e: any) {
    e.preventDefault();
    count();
  }

  return (
    <section className="Comp-form">
      <form>
        <h2>Where do you want to go?</h2>
        <label htmlFor="point_name">Name</label>
        <input type="text" id="point_name" autoComplete="off"></input>
        <label htmlFor="point_lat">Latitude</label>
        <input type="text" id="point_lat"></input>
        <label htmlFor="point_long">Longitude</label>
        <input type="text" id="point_long"></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </section>
  );
}

export default Form;
