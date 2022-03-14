import { Link, Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TaskPage from './features/tasks/TaskPage';
import TasksPage from './features/tasks/TasksPage';

const App = () => {
	return (
		<HashRouter>
			<nav>
				<ul>
					<li>
						<Link to='/zadania'>Zadania</Link>
					</li>
					<li>
						<Link to='/author'>O autorze</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/zadania/:id'>
						<TaskPage />
					</Route>
					<Route path='/zadania'>
						<TasksPage />
					</Route>
					<Route path='/author'>
						<AuthorPage />
					</Route>
					<Route path='/'>
						<Redirect to='/zadania' />
					</Route>
				</Switch>
			</nav>
		</HashRouter>
	);
};

export default App;
