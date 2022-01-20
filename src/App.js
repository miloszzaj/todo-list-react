import { useState } from "react";

import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "test 1",
      isDone: false,
    },
  ]);

  const removeTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = id => {
    setTasks(tasks =>
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      })
    );
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, isDone: true })));
  };

  const addNewTask = newTaskContent => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        isDone: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        headerContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
