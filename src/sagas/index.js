/*jshint esversion: 6 */
import {takeLatest} from 'redux-saga/effects';
import {GET_FINGER_SEARCH_REQUEST} from '../types/fingerSearchs';
import {getFingerSaga} from '../sagas/fingerSearchSaga';

export default function* rootSaga() {
  yield takeLatest(GET_FINGER_SEARCH_REQUEST, getFingerSaga);
}
