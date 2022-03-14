import { takeLatest, call, put, delay, select, takeEvery } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { saveTasksInLocalStorage } from './tasksLocalStorage';
import { fetchExampleTasks, selectTasks, setTasks } from './tasksSlice';

function* fetchExampleTasksHandler() {
	try {
		const tasks = yield select(selectTasks);
		console.log(tasks);
		yield delay(1000);
		const exampleTasks = yield call(getExampleTasks);
		yield put(setTasks(exampleTasks));
	} catch (error) {
		yield call(alert, 'coś nie tak!');
	}
}

function* saveTasksInLocalStorageHandler() {
	const tasks = yield select(selectTasks);
	yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
	console.log('działa saga');
	yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
	yield takeEvery('*', saveTasksInLocalStorageHandler);
}
