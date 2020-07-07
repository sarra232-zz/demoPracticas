/*jshint esversion: 6 */
import {takeLatest} from 'redux-saga/effects';
import {GET_FINGER_SEARCH_REQUEST} from '../types/fingerSearchs';
import {GET_SEARCH_GROUP_REQUEST} from '../types/searchGroup';
import {getFingerSaga} from '../sagas/fingerSearchSaga';
import {getGroupSaga} from '../sagas/searchGroupSaga';

export default function* rootSaga() {
  yield takeLatest(GET_FINGER_SEARCH_REQUEST, getFingerSaga);
  yield takeLatest(GET_SEARCH_GROUP_REQUEST, getGroupSaga);
}
