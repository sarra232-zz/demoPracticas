/*jshint esversion: 6 */
import validator from 'validator';

const validate = (values) => {
  let errors = {};
  if (!values || !values.identifier) {
    errors.identifier = 'required a data';
  } else if (!values || !values.typeIndentifiers) {
    errors.typeIndentifiers = 'required a data';
  } else if (!values || !values.platform) {
    errors.platform = 'Select a value';
  } else if (!values || !values.googleanalytics) {
    errors.googleanalytics = 'Select a value';
  } else if (!values || !values.appsflyer) {
    errors.appsflyer = 'Select a value';
  } else if (!values || !values.web) {
    errors.web = 'Select a value';
  } else if (!values || !values.time) {
    errors.time = 'select a range of time';
  }
  return errors;
};

export default validate;
