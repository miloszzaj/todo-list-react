import { Wrapper, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleHideDone } from '../tasksSlice';

const Buttons = ({ setAllDone }) => {
	const { tasks, hideDone } = useSelector(selectTasks);
	const dispatch = useDispatch();
	if (tasks.length === 0) {
		return null;
	}
	return (
		<Wrapper>
			<Button onClick={() => dispatch(toggleHideDone)}>
				{hideDone ? 'Pokaż ' : 'Ukryj '}
				ukończone
			</Button>
			<Button onClick={setAllDone} disabled={tasks.every(({ isDone }) => isDone)}>
				Ukończ wszystkie
			</Button>
		</Wrapper>
	);
};

export default Buttons;
