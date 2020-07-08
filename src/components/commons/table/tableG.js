import React, {Component} from 'react';
import {dataTable, dataTableFinal} from '../../../utils/utilFormGroup';
import './table.scss';

class Table extends Component {
  render() {
    const {headers, data} = this.props;
    const dataColumns = data.map((d) => dataTable(d));
    var i = 1;
    return (
      <div className="table__table-wrapper">
        <strong className="table__title">
          <h1>Name table: </h1>
        </strong>
        <table className="table">
          <thead>
            <tr>
              <th>OmnisageID</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {dataColumns.map((d, index) => (
              <tr key={d}>
                <td className="table__session-id">{d[0]}</td>
                <td className="table__portal">{d[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
