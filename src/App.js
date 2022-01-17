import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "test1", isDone: false },
  { id: 2, content: "test2", isDOne: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="todolist">
      <header className="todolist__header">Lista zadań</header>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}></Tasks>}
        headerContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
}

export default App;
