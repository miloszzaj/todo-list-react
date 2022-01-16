import "../Tasks/style.css";

const Buttons = props => {
  if (props.tasks.length === 0) {
    return null;
  }
  return (
    <div className="list__buttonsWrapper">
      <button className="list__headerButton">
        {props.hideDoneTasks ? "Pokaż " : "Ukryj "}
        ukończone
      </button>
      <button
        className="list__headerButton"
        disabled={props.tasks.every(({ isDone }) => isDone)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
