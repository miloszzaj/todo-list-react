import { nanoid } from '@reduxjs/toolkit';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../tasksSlice';
import { Wrapper, Input, Button } from './styled';

const Form = () => {
	const dispatch = useDispatch();
	const [newTaskContent, setNewTaskContent] = useState('');
	const inputRef = useRef(null);
	const focusInput = () => {
		inputRef.current.focus();
	};

	const onFormSubmit = event => {
		event.preventDefault();
		setNewTaskContent('');
		const trimmedNewTaskContent = newTaskContent.trim();
		if (trimmedNewTaskContent === '') {
			return;
		}

		dispatch(
			addTask({
				content: trimmedNewTaskContent,
				isDone: false,
				id: nanoid(),
			})
		);
	};

	return (
		<Wrapper onSubmit={onFormSubmit}>
			<Input
				value={newTaskContent}
				onChange={({ target }) => setNewTaskContent(target.value)}
				type='text'
				placeholder='Co jest do zrobienia?'
				ref={inputRef}
				autoFocus
			/>
			<Button onClick={focusInput}>Dodaj zadanie</Button>
		</Wrapper>
	);
};

export default Form;
