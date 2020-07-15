/*jshint esversion: 6 */
import {
  validateDateTypeId,
  validateDropDownsDate,
  getLastDate,
} from '../../../utils/utilFormGroup';

const validate = values => {
  let errors = {};
  if (!values || !values.time) {
    errors.time = 'Seleccione un rango de tiempo';
  }
  if (!values || !values.typeIndentifiers) {
    errors.typeIndentifiers = 'Seleccione un identificador';
  } else if (!validateDateTypeId (getLastDate (values.time), values)) {
    errors.typeIndentifiers =
      'La opción no esta disponible para la fecha seleccionada';
  }
  if (!values || !values.identifier) {
    errors.identifier = 'Campo requerido';
  }
  if (validateDropDownsDate (getLastDate (values.time), values)) {
    errors.platform = 'La opción no esta disponible para la fecha seleccionada';
  }
  if (validateDropDownsDate (getLastDate (values.time), values)) {
    errors.portal = 'La opción no esta disponible para fecha la seleccionada';
  }
  return errors;
};

export default validate;
