import { List, Item, Content, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from '../../tasksSlice';
import { Link, useLocation } from 'react-router-dom';
import searchQueryParamName from '../searchQueryParamName';
import { toTask } from '../../../../routes';

const TasksList = () => {
	const location = useLocation();
	console.log(location);
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get(searchQueryParamName);
	console.log(query);

	const tasks = useSelector(state => selectTasksByQuery(state, query));
	const hideDone = useSelector(selectHideDone);
	const dispatch = useDispatch();
	return (
		<List>
			{tasks.map(task => (
				<Item key={task.id} hidden={task.isDone && hideDone}>
					<Button onClick={() => dispatch(toggleTaskDone(task.id))}>{task.isDone ? '✓' : ''}</Button>
					<Content done={task.isDone}>
						<Link to={toTask({ id: task.id })}>{task.content}</Link>
					</Content>
					<Button onClick={() => dispatch(removeTask(task.id))} remove>
						🗑
					</Button>
				</Item>
			))}
		</List>
	);
};

export default TasksList;
