import { all } from "redux-saga/effects";
import { authSaga } from "./AuthSaga";

export function* rootSaga() {
  yield all([authSaga()]);
}
