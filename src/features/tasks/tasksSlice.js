import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: [],
		hideDone: false,
		// isDone: false,
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
		},

		setAllDone: ({ tasks }) => {
			for (const task of tasks) {
				task.isDone = true;
			}
		},
	},
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
