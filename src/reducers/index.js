/*jshint esversion: 6 */
import {combineReducers} from 'redux';
import demo from '../reducers/demo';
import filterSearchs from '../reducers/filtersSearch';
import {reducer as formReducer} from 'redux-form';
import validate from '../components/commons/formValidations/formValidations';

export default combineReducers({
  demo,
  filterSearchs,
  form: formReducer,
  validate,
});
