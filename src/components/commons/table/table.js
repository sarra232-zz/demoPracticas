import React, {Component} from 'react';
import {dataTable, dataTableFinal} from '../../../utils/utilForm';
import './table.scss';

class Table extends Component {
  render () {
    const {headers, data} = this.props;
    const dataColumns = data.map (d => dataTable (d));
    const dataFinal = dataColumns.map (f => dataTableFinal (f));
    return (
      <div>
        <di>TITULO DE LA TABLA</di>
        <table className="table">
          <thead>
            <tr>
              {headers.map (h => <th key={h}>{h.toUpperCase ()}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataFinal.map ((d, index) => (
              <tr key={d}>
                <td>{d[0]}</td>
                <td>{d[1]}</td>
                <td>{d[2]}</td>
                <td>{d[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
