import { call, put } from "redux-saga/effects";
import { getURLShortener } from "../../components/api/api";
import { GET_DATA_SUCCESS } from "../ActionType";

export function* handleShorturl(action) {
  try {
    const response = yield call(getURLShortener, action);
    if (response) {
      yield put({
        type: GET_DATA_SUCCESS,
        payload: response,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
