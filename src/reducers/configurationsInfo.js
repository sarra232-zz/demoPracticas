/*jshint esversion: 6 */
import Immutable from 'seamless-immutable';
import data from '../utils/configurationInfo.json';
import {GET_CONFIGURATION_SUCCESS} from '../types/configuration';

const defaultState = Immutable({
  data,
});

export default function configInfo(state = defaultState, action = {}) {
  switch (action.type) {
    case GET_CONFIGURATION_SUCCESS:
      return state.merge(defaultState);
    default:
      return state;
  }
}
