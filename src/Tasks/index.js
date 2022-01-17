import "./style.css";

const Tasks = props => (
  <ul className="list__tasks">
    {props.tasks.map(task => (
      <li
        key={task.id}
        className={`
        list__item ${
          task.isDone && props.hideDoneTasks ? "list__item--hidden" : ""
        }`}
      >
        <button className="list__itemButton">{task.isDone ? "✓" : ""}</button>
        <span
          className={`list__item--span ${
            task.isDone ? "list__item--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button className="list__itemButton list__itemButton--delete">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
