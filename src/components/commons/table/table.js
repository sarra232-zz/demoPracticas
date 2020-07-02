import React, {Component} from 'react';
import {dataTable, dataTableFinal} from '../../../utils/utilForm';
import './table.scss';

class Table extends Component {
  render() {
    const {headers, data} = this.props;
    const dataColumns = data.map((d) => dataTable(d));
    var i = 1;
    return (
      <div className="table__table-wrapper">
        <strong className="table__title">TITULO DE LA TABLA</strong>
        <table className="table">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataColumns.map((d, index) => (
              <tr key={d}>
                <td className="table__session-id">{i++}</td>
                <td className="table__portal">{d[1]}</td>
                <td className="table__platform">{d[2]}</td>
                <td className="table__session-date">{d[3]}</td>
                <td className="table__session-date">
                  {
                    <div>
                      <p>{`Id: ${Object.values(d[4])[0].id}`}</p>
                      <p>{`Event Date: ${Object.values(d[4])[0].eventdate}`}</p>
                      <p>{`Description: ${
                        Object.values(d[4])[0].description
                      }`}</p>
                      <p>{`Type: ${Object.values(d[4])[0].type}`}</p>
                    </div>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
