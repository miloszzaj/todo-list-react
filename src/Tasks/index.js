import './style.css';

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<ul className='list__tasks'>
		{tasks.map(task => (
			<li key={task.id} className={`list__item ${task.isDone && hideDone ? 'list__item--hidden' : ''}`}>
				<button onClick={() => toggleTaskDone(task.id)} className='list__itemButton'>
					{task.isDone ? '✓' : ''}
				</button>
				<span className={`list__item--span ${task.isDone ? 'list__item--done' : ''}`}>{task.content}</span>
				<button onClick={() => removeTask(task.id)} className='list__itemButton list__itemButton--delete'>
					🗑
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;
