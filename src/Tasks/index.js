import './style.css';
import { List, Item, Content } from './styled';

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<List>
		{tasks.map(task => (
			<Item key={task.id} hidden={task.isDone && hideDone}>
				<button onClick={() => toggleTaskDone(task.id)} className='list__itemButton'>
					{task.isDone ? '✓' : ''}
				</button>
				<Content done={task.isDone}>{task.content}</Content>
				<button onClick={() => removeTask(task.id)} className='list__itemButton list__itemButton--delete'>
					🗑
				</button>
			</Item>
		))}
	</List>
);

export default Tasks;
