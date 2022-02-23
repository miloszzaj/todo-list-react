import { List, Item, Content, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTaskDone } from '../tasksSlice';

const TasksList = ({ removeTask }) => {
	const { tasks, hideDone } = useSelector(selectTasks);
	const dispatch = useDispatch();
	return (
		<List>
			{tasks.map(task => (
				<Item key={task.id} hidden={task.isDone && hideDone}>
					<Button onClick={() => dispatch(toggleTaskDone(task.id))}>{task.isDone ? '✓' : ''}</Button>
					<Content done={task.isDone}>{task.content}</Content>
					<Button onClick={() => removeTask(task.id)} remove>
						🗑
					</Button>
				</Item>
			))}
		</List>
	);
};

export default TasksList;
