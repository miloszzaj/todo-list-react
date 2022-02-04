import { useState, useRef } from 'react';
import { Wrapper, Input, Button } from './styled';

const Form = ({ addNewTask }) => {
	const [newTaskContent, setNewTaskContent] = useState('');

	const onFormSubmit = e => {
		e.preventDefault();
		setNewTaskContent('');
		return newTaskContent.trim() !== '' ? addNewTask(newTaskContent.trim()) : null;
	};

	const inputRef = useRef(null);
	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<Wrapper onSubmit={onFormSubmit}>
			<Input
				value={newTaskContent}
				onChange={({ target }) => setNewTaskContent(target.value)}
				type='text'
				placeholder='Co jest do zrobienia?'
				ref={inputRef}
			/>
			<Button onClick={focusInput}>Dodaj zadanie</Button>
		</Wrapper>
	);
};

export default Form;
