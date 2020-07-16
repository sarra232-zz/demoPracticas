import React, {Component} from 'react';
import {TableHeaderColumn, BootstrapTable} from 'react-bootstrap-table';
import Pagination from 'react-bootstrap/Pagination';
import fecha from 'fecha';
import {dataTable, getEvents} from '../../../utils/utilForm';
import './table.scss';

class TableRepos extends Component {
  render() {
    const options = {
      sizePerPage: 5,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
    };
    const {data, counts} = this.props;
    const dataColumns = data.map((d) => dataTable(d));
    var i = 1;

    const dataForColumns = dataColumns.map((d) => ({
      number: i++,
      portal: d[1],
      platform: d[2],
      sessiondate: d[3].substring(0, 10),
      events: getEvents(d[4]),
    }));
    return (
      <div className="container-flex table table-striped table-bordered">
        <BootstrapTable
          striped
          bordered
          hover
          variant="dark"
          overflow-auto
          keyField="id"
          data={dataForColumns}
          options={options}
          pagination
          search
          searchPlaceholder="Buscar"
          headerStyle={{background: ' #e6e5e5'}}
        >
          <TableHeaderColumn dataField="number" dataSort={true}>
            Sesión
          </TableHeaderColumn>
          <TableHeaderColumn dataField="portal" dataSort={true}>
            Portal
          </TableHeaderColumn>
          <TableHeaderColumn dataField="platform" dataSort={true}>
            Plataforma
          </TableHeaderColumn>
          <TableHeaderColumn dataField="sessiondate" dataSort={true}>
            Fecha
          </TableHeaderColumn>
          <TableHeaderColumn dataField="events" dataSort={true}>
            Evento
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TableRepos;
