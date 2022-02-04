import { List, Item, Content, Button } from './styled';

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<List>
		{tasks.map(task => (
			<Item key={task.id} hidden={task.isDone && hideDone}>
				<Button onClick={() => toggleTaskDone(task.id)}>{task.isDone ? '✓' : ''}</Button>
				<Content done={task.isDone}>{task.content}</Content>
				<Button onClick={() => removeTask(task.id)} remove>
					🗑
				</Button>
			</Item>
		))}
	</List>
);

export default Tasks;
