/*jshint esversion: 6 */
import {
  validateDateTypeId,
  validateDropDownsDate,
  getLastDate,
} from '../../../utils/utilForm';

const validate = (values) => {
  let errors = {};
  if (!values || !values.time) {
    errors.time = 'Seleccione un rango de tiempo';
  }
  if (!values || !values.typeIndentifiers) {
    errors.typeIndentifiers = 'Seleccione una opción';
  } else if (!validateDateTypeId(getLastDate(values.time), values)) {
    errors.typeIndentifiers =
      'La opción no esta disponible para fecha seleccionada';
  }
  if (!values || !values.identifier) {
    errors.identifier = 'Campo requerido';
  }
  if (!values || !values.platform) {
    errors.platform = 'Seleccione un valor';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.platform = 'La opción no esta disponible para fecha seleccionada';
  }
  if (!values || !values.portal) {
    errors.portal = 'Seleccione un valor';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.portal = 'La opción no esta disponible para fecha seleccionada';
  }
  if (!values || !values.category) {
    errors.category = 'Seleccione un valor';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.category = 'La opción no esta disponible para fecha seleccionada';
  }
  if (!values || !values.typeCategory) {
    errors.typeCategory = 'Seleccione un valor';
  } else if (validateDropDownsDate(getLastDate(values.time), values)) {
    errors.typeCategory =
      'La opción no esta disponible para fecha seleccionada';
  }

  return errors;
};

export default validate;
