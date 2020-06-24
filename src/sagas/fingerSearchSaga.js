/*jshint esversion: 6 */
import {call, put} from 'redux-saga/effects';
import Api from '../api/api';
import {
  getFingerSearchSuccess,
  getFingerSearchFailed,
} from '../actions/fingerSearch';
import {apiKey} from '../utils/utilForm';

export function* getFingerSaga({payload}) {
  try {
    const response = yield call(Api.getfinger.getFinger, {
      key: apiKey,
      payload,
    });
    yield put(getFingerSearchSuccess(response));
  } catch (error) {
    yield put(getFingerSearchFailed(error));
  }
}
