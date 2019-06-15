import { takeLatest, put } from "redux-saga/effects";
import { userLoginApi } from "../api/index";

function filterData({ results, info }) {
  const name = results[0].name;
  delete results[0].name;

  Object.assign(results[0], { userName: name }, { info });
  return results[0];
}

// worker saga
function* requestLogin(action) {
  const { query } = action;

  const user = yield userLoginApi(query);
  const filteredData = yield filterData(user);
  yield put({ type: "GET_USER", data: filteredData });
}

// watcher saga
function* loginSaga(action) {
  yield takeLatest("REQUEST_LOGIN", requestLogin);
}

export default loginSaga;
