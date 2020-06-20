/*jshint esversion: 6 */
import React from 'react';
import './Select.scss';

const Select = ({
  id,
  label,
  required,
  input,
  meta: {error, touched},
  children,
}) => {
  return (
    <div className="selected">
      <label className="selected__label" htmlFor={id}>{label}</label>
      <select className="selected__field" {...input} id={id}>
        {children}
      </select>
      {touched && error && <span className="selected__error">{error}</span>}
    </div>
  );
};
export default Select;
