import { useState, useRef } from 'react';
import './style.css';

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
		<form className='adding__paragraph' onSubmit={onFormSubmit}>
			<input
				value={newTaskContent}
				onChange={({ target }) => setNewTaskContent(target.value)}
				className='adding__input'
				type='text'
				placeholder='Co jest do zrobienia?'
				ref={inputRef}
			/>
			<button className='adding__button' onClick={focusInput}>
				Dodaj zadanie
			</button>
		</form>
	);
};

export default Form;
