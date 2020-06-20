/*jshint esversion: 6 */
import React from 'react';
import './Input.scss';

const Input = ({
  input,
  id,
  label,
  type,
  placeholder,
  meta: {error, touched},
}) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input
        className="input__field"
        {...input}
        id={id}
        placeholder={placeholder}
        type={type}
      />
      {touched && error && <span className="input__error">{error}</span>}
    </div>
  );
};
export default Input;
