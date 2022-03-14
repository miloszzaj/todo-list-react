import { fetchExampleTasks } from '../../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';
import { Button } from '../StyledButton/styledButtons';

const GetTasksButton = () => {
	const dispatch = useDispatch();

	return <Button onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadanie</Button>;
};

export default GetTasksButton;
