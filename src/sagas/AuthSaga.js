import { takeEvery, put } from "redux-saga/effects";

import firebase from "../utils/firebase";
import { customToast } from "../components";
import { loginUser, loginSuccess, loginFailure } from "../slices";

export function* loginSaga(action) {
  try {
    const result = yield firebase
      .auth()
      .signInWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      );
    const token = yield result?.user?.getIdToken();
    if (token) {
      localStorage.setItem("accessToken", token);
      yield put(loginSuccess(token));
      customToast("Success Login!", "success");
    }
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "The email you entered doesn't exist";
        break;
      case "auth/wrong-password":
        errorMessage = "Sorry, that password isnt right";
        break;
      default:
        errorMessage = "An error occurred, please try again later";
    }
    yield put(loginFailure(errorMessage));
    customToast(errorMessage, "danger");
    console.error(error);
  }
}

export function* authSaga() {
  yield takeEvery(loginUser.type, loginSaga);
}
