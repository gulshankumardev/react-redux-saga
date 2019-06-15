import { takeEvery, put } from "redux-saga/effects";
import { fetchTodosApi } from "../api";

// Worker saga
function* requestTodos() {
  const todos = yield fetchTodosApi();
  yield put({ type: "GET_TODOS", data: todos });
}

// Watcher saga
function* todosSaga() {
  yield takeEvery("REQUEST_TODOS", requestTodos);
}

export default todosSaga;
