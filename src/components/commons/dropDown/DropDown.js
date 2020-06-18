/*jshint esversion: 6 */
import React, {useState} from 'react';
import Select from 'react-select';
import './DropDown.scss';

export default function DropDown({
  isMulti,
  label,
  input,
  field,
  id,
  options,
  props,
  meta: {error, touched},
}) {
  const {onChange, onBlur} = input;

  const handleChange = ({value}) => {
    onChange(value);
  };
  const handleBlur = ({value}) => {
    onBlur(value);
  };
  return (
    <div className="drop-down">
      <label>{label}</label>

      <Select
        {...props}
        className="select"
        isMulti={isMulti}
        id={id}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={'Select all'}
        options={options}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
}
