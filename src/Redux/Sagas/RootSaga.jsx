import { all, fork } from "redux-saga/effects";
import authSaga from "./Auth";

function* rootSaga() {
  yield all([fork(authSaga)]);
}

export default rootSaga;