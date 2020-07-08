import React, {Component} from 'react';
import {dataTable, dataTableFinal} from '../../../utils/utilFormGroup';
import './table.scss';

class TableG extends Component {
  render () {
    const {data, counts} = this.props;
    const dataColumns = data.map (d => dataTable (d));
    var i = 1;
    console.log ('counts', counts);
    return (
      <div className="table__table-wrapper table table-striped table-bordered">
        <strong className="table__title">
          <h1>Name table</h1>
          <p>Resultados de búsqueda: {counts}</p>
        </strong>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>OmnisageID</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {dataColumns.map ((d, index) => (
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
