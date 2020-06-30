/*jshint esversion: 6 */
import {
  validateDateTypeId,
  validateDropDownsDate,
  getLastDate,
} from '../../../utils/utilForm';

const validate = (values) => {
  let errors = {};
  if (!values || !values.time) {
    errors.time = 'select a range of time';
  }
  if (!values || !values.typeIndentifiers) {
    errors.typeIndentifiers = 'Select an option';
  } else if (!validateDateTypeId(getLastDate(values.time), values)) {
    errors.typeIndentifiers = 'The option is no aviable for date selected';
  }
  if (!values || !values.identifier) {
    errors.identifier = 'Field required';
  }
  if (!values || !values.platform) {
    errors.platform = 'Select a value';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.platform = 'The option is no aviable for platform selected';
  }
  if (!values || !values.portal) {
    errors.portal = 'Select a value';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.portal = 'The option is no aviable for portal selected';
  }
  if (!values || !values.category) {
    errors.category = 'Select a value';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.category = 'The option is no aviable for category selected';
  }
  if (!values || !values.typeCategory) {
    errors.typeCategory = 'Select a value';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.typeCategory = 'The option is no aviable for typeCategory selected';
  }

  return errors;
};

export default validate;
