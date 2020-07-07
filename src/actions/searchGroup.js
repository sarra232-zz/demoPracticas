/*jshint esversion: 6 */
import {
  GET_SEARCH_GROUP_SUCCESS,
  GET_SEARCH_GROUP_FAILED,
  GET_SEARCH_GROUP_REQUEST,
} from '../types/searchGroup';

export const getSearchGroupSuccess = (payload) => {
  return {
    type: GET_SEARCH_GROUP_SUCCESS,
    payload,
  };
};

export const getSearchGroupFailed = (payload) => ({
  type: GET_SEARCH_GROUP_FAILED,
  payload,
});

export const getSearchGroupRequest = (payload) => ({
  type: GET_SEARCH_GROUP_REQUEST,
  payload,
});
