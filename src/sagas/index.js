import { all } from "redux-saga/effects";
import todosSaga from "./todosSaga";
import loginSaga from "./userSaga";

export default function*() {
  yield all([todosSaga(), loginSaga()]);
}
