import "./style.css";

const Buttons = props => {
  if (props.tasks.length === 0) {
    return null;
  }
  return (
    <div className="buttons">
      <button className="buttons__header">
        {props.hideDoneTasks ? "Pokaż " : "Ukryj "}
        ukończone
      </button>
      <button
        className="buttons__header"
        disabled={props.tasks.every(({ isDone }) => isDone)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
