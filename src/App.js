import { Link, Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import Author from './features/author/Author';
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
					<Route path='/zadania'>
						<TasksPage />
					</Route>
					<Route path='/author'>
						<Author />
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
