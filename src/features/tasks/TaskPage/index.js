import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import { useParams } from 'react-router-dom';

const TaskPage = () => {
	const params = useParams();
	return (
		<Container>
			<Header title='Szczegóły' />
			<Section title={params.id} body={<>cos</>} />
		</Container>
	);
};

export default TaskPage;
