import { useState, useEffect } from 'react';

export const useTasks = () => {
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	// const removeTask = id => {
	// 	setTasks(tasks => tasks.filter(task => task.id !== id));
	// };

	// const toggleTaskDone = id => {
	// 	setTasks(task => task.map(task => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
	// };

	const setAllDone = () => {
		setTasks(tasks => tasks.map(task => ({ ...task, isDone: true })));
	};

	return {
		setAllDone,
	};
};
