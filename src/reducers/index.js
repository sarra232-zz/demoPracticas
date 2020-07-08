/*jshint esversion: 6 */
import {combineReducers} from 'redux';
import fingerSearchs from './fingerSearch';
import configInfo from '../reducers/configurationsInfo';
import searchGroup from '../reducers/searchGroup';
import {reducer as formReducer} from 'redux-form';
import validate from '../components/commons/formValidations/formValidations';

export default combineReducers({
  fingerSearchs,
  searchGroup,
  configInfo,
  form: formReducer,
  validate,
});
