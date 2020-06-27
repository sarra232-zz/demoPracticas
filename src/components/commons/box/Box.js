/*jshint esversion: 6 */
import React, {Children} from 'react';
import {dataTable, dataTableFinal} from '../../../utils/utilForm';
import './Box.scss';

class Box extends React.Component {
  render () {
    const {headers, data} = this.props;

    return (
      <div className="box__wrapper-box">
        <div className="box__box">
          {data.cii}
        </div>
        <div className="box__box box__box--customer">
          <div>
            <h1>{Object.keys (data)[1]}</h1>
            <p>
              {`${Object.values (data.primaryIdentifier).map (value => value.type)[0]}: ${Object.values (data.primaryIdentifier).map (value => value.value)[0]}`}
            </p>
            {`${Object.values (data.primaryIdentifier).map (value => value.type)[1]}: ${Object.values (data.primaryIdentifier).map (value => value.value)[1]}`}
            <p />
          </div>
          {data &&
            Object.keys (data)[2].length > 0 &&
            <div> <h1>{Object.keys (data)[2]}</h1></div>}

        </div>
      </div>
    );
  }
}

export default Box;
