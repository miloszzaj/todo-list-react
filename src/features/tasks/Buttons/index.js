import { Wrapper, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleHideDone, setAllDone, selectHideDone, selectAreAllTasksDone } from '../tasksSlice';

const Buttons = () => {
	const { tasks } = useSelector(selectTasks);
	const { hideDone } = useSelector(selectHideDone);
	const { areAllTasksDone } = useSelector(selectAreAllTasksDone);

	const dispatch = useDispatch();
	return (
		<Wrapper>
			{!areAllTasksDone && (
				<>
					<Button onClick={() => dispatch(toggleHideDone())}>
						{hideDone ? 'Pokaż ' : 'Ukryj '}
						ukończone
					</Button>
					<Button onClick={() => dispatch(setAllDone())} disabled={tasks.every(({ isDone }) => isDone)}>
						Ukończ wszystkie
					</Button>
				</>
			)}
		</Wrapper>
	);
};

export default Buttons;
