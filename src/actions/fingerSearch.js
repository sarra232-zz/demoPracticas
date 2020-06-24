/*jshint esversion: 6 */
import {
  GET_FINGER_SEARCH_SUCCESS,
  GET_FINGER_SEARCH_FAILED,
  GET_FINGER_SEARCH_REQUEST,
} from '../types/fingerSearchs';

export const getFingerSearchSuccess = (payload) => {
  return {
    type: GET_FINGER_SEARCH_SUCCESS,
    payload,
  };
};

export const getFingerSearchFailed = (payload) => ({
  type: GET_FINGER_SEARCH_FAILED,
  payload,
});

export const getFingerSearchRequest = (payload) => ({
  type: GET_FINGER_SEARCH_REQUEST,
  payload,
});
