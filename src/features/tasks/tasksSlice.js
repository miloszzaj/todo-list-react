import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: getTasksFromLocalStorage(),
		hideDone: false,
	},
	reducers: {
		addTask: ({ tasks }, { payload }) => {
			tasks.push(payload);
		},
		toggleHideDone: state => {
			state.hideDone = !state.hideDone;
		},
		toggleTaskDone: (state, action) => {
			const index = state.tasks.findIndex(task => task.id === action.payload);
			state.tasks[index].isDone = !state.tasks[index].isDone;
		},
		removeTask: (state, action) => {
			const index = state.tasks.findIndex(task => task.id === action.payload);
			state.tasks.splice(index, 1);
			console.log(state.tasks);
		},
		setAllDone: ({ tasks }) => {
			for (const task of tasks) {
				task.isDone = true;
			}
		},
		fetchExampleTasks: () => {},
		setTasks: (state, { payload: tasks }) => {
			state.tasks = tasks;
		},
	},
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } =
	tasksSlice.actions;
export const selectTasks = state => {
	console.log(state.tasksState);
	return state.tasksState.tasks;
};
export const selectHideDone = state => state.tasksState.hideDone;
export const selectIsEveryTaskDone = state => state.tasksState.tasks.every(({ isDone }) => isDone);
export const selectAreTasksEmpty = state => state.tasksState.tasks.length === 0;

export default tasksSlice.reducer;
