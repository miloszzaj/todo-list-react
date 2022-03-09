import { Wrapper, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHideDone, setAllDone, selectHideDone, selectIsEveryTaskDone, selectAreTasksEmpty } from '../tasksSlice';

const Buttons = () => {
	const hideDone = useSelector(selectHideDone);
	const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
	console.log(isEveryTaskDone);
	const areTasksEmpty = useSelector(selectAreTasksEmpty);

	const dispatch = useDispatch();

	return (
		<Wrapper>
			{!areTasksEmpty && (
				<>
					<Button onClick={() => dispatch(toggleHideDone())}>
						{hideDone ? 'Pokaż ' : 'Ukryj '}
						ukończone
					</Button>
					<Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
						Ukończ wszystkie
					</Button>
				</>
			)}
		</Wrapper>
	);
};

export default Buttons;
