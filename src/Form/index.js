import "./style.css";

const Form = () => (
  <form className="adding__paragraph">
    <input
      className="adding__input"
      type="text"
      placeholder="Co jest do zrobienia?"
      autoFocus
    />
    <button className="adding__button">Dodaj zadanie</button>
  </form>
);

export default Form;
