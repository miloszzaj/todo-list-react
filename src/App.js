import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "test1", isDone: false },
  { id: 2, content: "test2", isDOne: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <body className="body">
      <main className="todolist">
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}></Tasks>}
          headerContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
        />
      </main>
    </body>
  );
}

export default App;
