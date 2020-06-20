/*jshint esversion: 6 */
import React from 'react';
import Select from 'react-select';
import './DropDown.scss';

export default function DropDown({
  isMulti,
  label,
  input,
  id,
  options,
  props,
  meta: {error, touched},
}) {
  const {onChange, onBlur} = input;

  const handleBlur = ({value}) => {
    onBlur (value);
  };
  return (
    <div className="drop-down">
      <label className="drop-down__label">{label}</label>

      <Select
        {...props}
        isMulti={isMulti}
        id={id}
        classNamePrefix="select"
        defaultValue={'Select all'}
        options={options}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {touched && error && <span className="drop-down__error">{error}</span>}
    </div>
  );
}
