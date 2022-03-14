import { takeLatest, call, put, delay, select } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
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

export function* watchFetchExampleTasks() {
	console.log('działa saga');
	yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
