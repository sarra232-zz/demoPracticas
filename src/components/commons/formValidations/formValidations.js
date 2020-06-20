/*jshint esversion: 6 */
import validator from 'validator';

const validate = values => {
  let errors = {};
  if (!values || !values.time) {
    errors.time = 'select a range of time';
  }
  if (!values || !values.typeIndentifiers) {
    errors.typeIndentifiers = 'Select an option';
  }
  if (!values || !values.identifier) {
    errors.identifier = 'Field required';
  }
  if (!values || !values.platform) {
    errors.platform = 'Select a value';
  }
  if (!values || !values.appsflyer) {
    errors.appsflyer = 'Select a value';
  }
  if (!values || !values.googleanalytics) {
    errors.googleanalytics = 'Select a value';
  }
  if (!values || !values.web) {
    errors.web = 'Select a value';
  }
  return errors;
};

export default validate;
