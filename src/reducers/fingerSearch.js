/*jshint esversion: 6 */
import Immutable from 'seamless-immutable';
import {
  GET_FINGER_SEARCH_SUCCESS,
  GET_FINGER_SEARCH_FAILED,
  GET_FINGER_SEARCH_REQUEST,
} from '../types/fingerSearchs';

const fingerSearcModel = Immutable({
  fingerSearch: {},
  error: false,
  fetching: false,
});

export default function fingerSearch(state = fingerSearcModel, action = {}) {
  switch (action.type) {
    case GET_FINGER_SEARCH_SUCCESS:
      console.log('reducer', action.payload);
      return state.merge({
        fingerSearch: action.payload,
        error: false,
        fetching: false,
      });
    case GET_FINGER_SEARCH_FAILED:
      return state.merge({
        error: true,
        fetching: false,
      });
    case GET_FINGER_SEARCH_REQUEST:
      return state.merge({
        error: false,
        fetching: true,
      });
    default:
      return state;
  }
}
