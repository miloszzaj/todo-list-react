import { Wrapper, Button } from '../StyledButtons/styledButtons';
import { useSelector, useDispatch } from 'react-redux';
import {
	toggleHideDone,
	setAllDone,
	selectHideDone,
	selectIsEveryTaskDone,
	selectAreTasksEmpty,
	selectSomeIsDone,
} from '../../tasksSlice';

const TasksListButtons = () => {
	const hideDone = useSelector(selectHideDone);
	const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
	const areTasksEmpty = useSelector(selectAreTasksEmpty);
	const someIsDone = useSelector(selectSomeIsDone);

	const dispatch = useDispatch();

	return (
		<Wrapper>
			{!areTasksEmpty && (
				<>
					<Button disabled={!someIsDone} onClick={() => dispatch(toggleHideDone())}>
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

export default TasksListButtons;
