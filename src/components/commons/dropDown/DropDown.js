/*jshint esversion: 6 */
import React, {useState} from 'react';
import MultiSelect from 'react-multi-select-component';
import './DropDown.scss';

export default function DropDown({id, label, options}) {
  const [selected, setSelected] = useState([]);

  return (
    <div className="drop-down">
      <label>{label}</label>
      <MultiSelect
        id={id}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={'Select plataforms'}
        disableSearch
      />
    </div>
  );
}
