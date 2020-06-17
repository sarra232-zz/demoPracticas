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
    <div className="select">
      <label htmlFor={id}>{label}</label>
      <select className="select__field" {...input} id={id}>
        {children}
      </select>
      <span>{error}</span>
    </div>
  );
};
export default Select;
