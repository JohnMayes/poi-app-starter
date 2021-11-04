import { useState } from 'react';

interface Props {}

function Form(props: Props) {
  const [num, setNum] = useState(0);

  function handleSubmit(e: any) {
    e.preventDefault();
    setNum(num + 1);
    console.log(num);
  }
  return (
    <section className="Comp-form">
      <form onSubmit={handleSubmit}>
        <h2>Where do you want to go?</h2>
        <label htmlFor="point_name">Name</label>
        <input
          type="text"
          id="point_name"
          autoComplete="off"
          value={num}
        ></input>
        <label htmlFor="point_lat">Latitude</label>
        <input type="text" id="point_lat"></input>
        <label htmlFor="point_long">Longitude</label>
        <input type="text" id="point_long"></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default Form;
