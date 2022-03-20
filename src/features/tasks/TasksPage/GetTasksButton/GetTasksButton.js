import { fetchExampleTasks, selectLoading } from '../../tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../StyledButtons/styledButtons';

const GetTasksButton = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	console.log(loading);

	return (
		<Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
			{loading ? 'Ładowanie zadań...' : 'Pobierz przykładowe zadanie'}
		</Button>
	);
};

export default GetTasksButton;
