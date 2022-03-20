import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TaskPage from './features/tasks/TaskPage';
import TasksPage from './features/tasks/TasksPage';
import { toAuthor, toTask, toTasks } from './routes';

const App = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path={toTask()}>
					<TaskPage />
				</Route>
				<Route path={toTasks()}>
					<TasksPage />
				</Route>
				<Route path={toAuthor()}>
					<AuthorPage />
				</Route>
				<Route>
					<Redirect to={toTasks()} />
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default App;
