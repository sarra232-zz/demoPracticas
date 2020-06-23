/*jshint esversion: 6 */
import {takeLatest} from 'redux-saga/effects';
import {GET_CONFIGURATION_REQUEST} from '../types/configuration';
import {GET_FINGER_SEARCH_REQUEST} from '../types/fingerSearchs';
import {getConfigurationSaga} from '../sagas/configurationSaga';
import {getFingerSaga} from '../sagas/fingerSearchSaga';

export default function* rootSaga() {
  yield takeLatest(GET_CONFIGURATION_REQUEST, getConfigurationSaga);
  yield takeLatest(GET_FINGER_SEARCH_REQUEST, getFingerSaga);
}
