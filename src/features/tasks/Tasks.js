import Form from './Form';
import TasksList from './TasksList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import { Container } from './styled';
import { useTasks } from '../../useTasks';

function Tasks() {
	const { removeTask } = useTasks();

	return (
		<Container>
			<Header title='Lista zadań' />
			<Section title='Dodaj nowe zadanie' body={<Form />} />
			<Section title='Lista zadań' body={<TasksList removeTask={removeTask} />} headerContent={<Buttons />} />
		</Container>
	);
}

export default Tasks;
