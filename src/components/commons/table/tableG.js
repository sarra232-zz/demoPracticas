import React, {Component} from 'react';
import {dataTable, dataTableFinal} from '../../../utils/utilFormGroup';
import './table.scss';

class TableG extends Component {
  render() {
    const {data, counts} = this.props;
    const dataColumns = data.map((d) => dataTable(d));
    var i = 1;
    const count = data.length;

    return (
      <div className="table__table-wrapper table table-striped table-bordered">
        <strong className="table__title">
          <h1>Segmento de usuarios</h1>
          <p>Resultados mostrados en la consulta: {count}</p>
        </strong>
        <p>Tamaño de segmento: {counts}</p>
        <table className="table">
          <thead className="thead-dark">
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

export default TableG;
