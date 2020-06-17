/*jshint esversion: 6 */
import validator from 'validator';

const validate = (values) => {
  let errors = {};
  if (!values || !values.identifier) {
    errors.identifier = 'required a data';
  }
  return errors;
};

export default validate;
