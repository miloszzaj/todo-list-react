import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "test1", isDone: false },
  { id: 2, content: "test2", isDOne: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="todolist">
      <header className="todolist__header">Lista zadań</header>
      <section className="adding">
        <header className="adding__header">Dodaj nowe zadanie</header>
        <Form />
      </section>
      <section className="list">
        <header className="list__header">
          Lista zadań
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />{" "}
        </header>
        <div className="list__paragraph">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />{" "}
        </div>
      </section>
    </main>
  );
}

export default App;
