import "./style.css";

const Tasks = props => (
  <ul className="list__tasks">
    {props.tasks.map(task => (
      <li
        className={`
        list__item ${
          task.isDone && props.hideDoneTasks ? "list__item--hidden" : ""
        }`}
      >
        <button className="ist__itemButton">
          ${task.isDone ? "&#10003" : ""}
        </button>
        <span
          className={`"list__item--span ${
            task.isDone ? "list__item--done" : ""
          }"`}
        >
          {task.content}
        </span>
        <button className="list__itemButton list__itemButton--delete">
          &#128465
        </button>{" "}
      </li>
    ))}
  </ul>
);

export default Tasks;

// key={props.task.id}
