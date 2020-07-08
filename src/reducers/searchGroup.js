/*jshint esversion: 6 */
import Immutable from 'seamless-immutable';
import {
  GET_SEARCH_GROUP_SUCCESS,
  GET_SEARCH_GROUP_FAILED,
  GET_SEARCH_GROUP_REQUEST,
} from '../types/searchGroup';

const groupSearcModel = Immutable({
  searchGroup: {},
  error: false,
  fetching: false,
});

export default function searchGroup(state = groupSearcModel, action = {}) {
  switch (action.type) {
    case GET_SEARCH_GROUP_SUCCESS:
      return state.merge({
        searchGroup: action.payload,
        error: false,
        fetching: false,
      });
    case GET_SEARCH_GROUP_FAILED:
      return state.merge({
        error: true,
        fetching: false,
      });
    case GET_SEARCH_GROUP_REQUEST:
      return state.merge({
        error: false,
        fetching: true,
      });
    default:
      return state;
  }
}
