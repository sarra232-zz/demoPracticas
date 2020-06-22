/*jshint esversion: 6 */
import {call, put} from 'redux-saga/effects';
import Api from '../api/api';
import {
  getConfigurationInfoSuccess,
  getConfigurationInfoFailed,
} from '../actions/configurationInfo';

export function* getConfigurationSaga({payload}) {
  try {
    const configInfo = yield call(Api.getconfig.getConfig, payload);
    yield put(getConfigurationInfoSuccess(configInfo));
  } catch (error) {
    yield put(getConfigurationInfoFailed(error));
  }
}
