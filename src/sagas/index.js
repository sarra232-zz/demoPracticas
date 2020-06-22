/*jshint esversion: 6 */
import {takeLatest} from 'redux-saga/effects';
import {GET_CONFIGURATION_REQUEST} from '../types/configuration';
import {getConfigurationSaga} from '../sagas/configurationSaga';

export default function* rootSaga() {
  yield takeLatest(GET_CONFIGURATION_REQUEST, getConfigurationSaga);
}
