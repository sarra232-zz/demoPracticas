/*jshint esversion: 6 */
import {
  GET_CONFIGURATION_SUCCESS,
  GET_CONFIGURATION_FAILED,
  GET_CONFIGURATION_REQUEST,
} from '../types/configuration';

export const getConfigurationInfoSuccess = (info) => ({
  type: GET_CONFIGURATION_SUCCESS,
  payload: info,
});

export const getConfigurationInfoFailed = (error) => ({
  type: GET_CONFIGURATION_FAILED,
  payload: error,
});

export const getConfigurationInfoRequest = (payload) => ({
  type: GET_CONFIGURATION_REQUEST,
  payload,
});
