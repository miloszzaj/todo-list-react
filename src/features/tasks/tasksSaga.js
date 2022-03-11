import { takeEvery, call, put } from 'redux-saga';
import { getExampleTasks } from './getExampleTasks';
import { fetchExampleTasks, setTasks } from './tasksSlice';

function* fetchExampleTasksHandler() {
	try {
		const exampleTasks = yield call(getExampleTasks);
		yield put(setTasks(exampleTasks));
	} catch (error) {
		yield call(alert, 'coś nie tak!');
	}
}

function* watchFetchExampleTasks() {
	yield takeEvery(fetchExampleTasks.type);
}
