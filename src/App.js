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
        <form className="adding__paragraph">
          <input
            className="adding__input js-addingInput"
            type="text"
            placeholder="Co jest do zrobienia?"
            autofocus
          />
          <button className="adding__button js-addButton">Dodaj zadanie</button>
        </form>
      </section>
      <section className="list">
        <header className="list__header">
          Lista zadań
          <div className="list__buttonsWrapper js-buttonsWrapper"></div>
        </header>
        <div className="list__paragraph">
          <ul className="list__tasks js-list__tasks"></ul>
        </div>
      </section>
    </main>
  );
}

export default App;
