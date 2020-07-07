/*jshint esversion: 6 */
import {call, put} from 'redux-saga/effects';
import Api from '../api/api';
import {apiKey} from '../utils/utilForm';
import {
  getSearchGroupSuccess,
  getSearchGroupFailed,
} from '../actions/searchGroup';

export function* getGroupSaga({payload}) {
  try {
    const response = yield call(Api.getgroup.getGroup, {
      key: apiKey,
      payload,
    });
    yield put(getSearchGroupSuccess(response));
  } catch (error) {
    yield put(getSearchGroupFailed(error));
  }
}
