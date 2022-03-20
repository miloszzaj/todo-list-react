import Form from './Form';
import TasksList from './TasksList';
import TasksListButtons from './TasksListButtons';
import GetTasksButton from '../../../common/GetTasksButton/GetTasksButton';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import Search from './Search';

const TasksPage = () => {
	return (
		<Container>
			<Header title='Lista zadań' />
			<Section title='Wyszukiwarka' body={<Form />} headerContent={<GetTasksButton />} />
			<Section title='Dodaj nowe zadanie' body={<Search />} />
			<Section title='Lista zadań' body={<TasksList />} headerContent={<TasksListButtons />} />
		</Container>
	);
};

export default TasksPage;
