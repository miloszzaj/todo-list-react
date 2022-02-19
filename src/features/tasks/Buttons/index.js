import { Wrapper, Button } from './styled';

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
	if (tasks.length === 0) {
		return null;
	}
	return (
		<Wrapper>
			<Button onClick={toggleHideDone}>
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
