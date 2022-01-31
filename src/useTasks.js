import { useState, useEffect } from 'react';

const getInitialTasks = () => {
	const storedTasks = localStorage.getItem('tasks');
	return storedTasks !== null ? JSON.parse(storedTasks) : [];
};

export const useTasks = () => {
	const [tasks, setTasks] = useState(getInitialTasks);
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);
	const removeTask = id => {
		setTasks(tasks => tasks.filter(task => task.id !== id));
	};

	const toggleTaskDone = id => {
		setTasks(task => task.map(task => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
	};

	const setAllDone = () => {
		setTasks(tasks => tasks.map(task => ({ ...task, isDone: true })));
	};

	const addNewTask = newTaskContent => {
		setTasks(tasks => [
			...tasks,
			{
				content: newTaskContent,
				isDone: false,
				id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
			},
		]);
	};
	return {
		tasks,
		removeTask,
		toggleTaskDone,
		setAllDone,
		addNewTask,
	};
};
