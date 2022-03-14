import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Author from './features/author/Author';
import Tasks from './features/tasks/Tasks';

export default () => (
	<BrowserRouter basename='/todo-list-react/'>
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
					<Tasks />
				</Route>
				<Route path='/author'>
					<Author />
				</Route>
			</Switch>
		</nav>
	</BrowserRouter>
);
