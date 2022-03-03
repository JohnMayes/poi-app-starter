import { placeArrType } from './../App';

interface FormProps {
  addPlace: (name: string, lat: string, log: string) => void;
  places: placeArrType;
}

function Form(props: FormProps) {
  function handleSubmit(e: any) {
    e.preventDefault();
    props.addPlace('test1', 'test2', 'test3');
  }

  return (
    <section className="Comp-form">
      <form onSubmit={handleSubmit}>
        <h2>Where do you want to go?</h2>
        <label htmlFor="point_name">Name</label>
        <input type="text" id="point_name" autoComplete="off"></input>
        <label htmlFor="point_lat">Latitude</label>
        <input type="text" id="point_lat"></input>
        <label htmlFor="point_long">Longitude</label>
        <input type="text" id="point_long"></input>
        <button type="submit">{`${props.places[0]?.key}`}</button>
      </form>
    </section>
  );
}

export default Form;
