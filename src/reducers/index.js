/*jshint esversion: 6 */
import {combineReducers} from 'redux';
import demo from '../reducers/demo';
import fingerSearchs from './fingerSearch';
import configInfo from '../reducers/configurationsInfo';
import {reducer as formReducer} from 'redux-form';
import validate from '../components/commons/formValidations/formValidations';

export default combineReducers({
  demo,
  fingerSearchs,
  configInfo,
  form: formReducer,
  validate,
});
