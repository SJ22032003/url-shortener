import { takeLatest } from "redux-saga/effects";
import { GET_DATA } from "../ActionType";
import { handleShorturl } from "./urlSaga";

export function* watchSaga() {
  yield takeLatest(GET_DATA, handleShorturl);
}
