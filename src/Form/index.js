import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="adding__paragraph" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="adding__input"
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
      />
      <button className="adding__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
