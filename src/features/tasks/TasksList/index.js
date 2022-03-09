import { List, Item, Content, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from '../tasksSlice';

const TasksList = () => {
	const tasks = useSelector(selectTasks);
	const hideDone = useSelector(selectHideDone);
	const dispatch = useDispatch();
	return (
		<List>
			{tasks.map(task => (
				<Item key={task.id} hidden={task.isDone && hideDone}>
					<Button onClick={() => dispatch(toggleTaskDone(task.id))}>{task.isDone ? '✓' : ''}</Button>
					<Content done={task.isDone}>{task.content}</Content>
					<Button onClick={() => dispatch(removeTask(task.id))} remove>
						🗑
					</Button>
				</Item>
			))}
		</List>
	);
};

export default TasksList;
