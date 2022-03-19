import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

const TaskPage = () => {
	const { id } = useParams();
	const task = useSelector(state => getTaskById(state, id));
	console.log(task);
	return (
		<Container>
			<Header title='Szczegóły' />
			<Section
				title={task ? task.content : 'Nie znaleziono zadania'}
				body={
					<>
						<strong>Ukończono:</strong>
						{task.isDone ? ' tak' : ' nie'}{' '}
					</>
				}
			/>
		</Container>
	);
};

export default TaskPage;
