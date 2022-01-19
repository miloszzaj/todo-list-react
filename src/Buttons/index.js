import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="buttons">
      <button className="buttons__header">
        {hideDone ? "Pokaż " : "Ukryj "}
        ukończone
      </button>
      <button
        className="buttons__header"
        disabled={tasks.every(({ isDone }) => isDone)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
