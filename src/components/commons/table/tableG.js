import React, {Component} from 'react';
import {TableHeaderColumn, BootstrapTable} from 'react-bootstrap-table';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import {dataTableFinal} from '../../../utils/utilFormGroup';
import './table.scss';

class TableG extends Component {
  render() {
    const options = {
      sizePerPage: 10,
      hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
    };
    const {data, counts} = this.props;
    const dataColumns = data;

    return (
      <div className="container-flex table table-striped table-bordered">
        <BootstrapTable
          striped
          bordered
          hover
          variant="dark"
          overflow-auto
          keyField="id"
          data={dataColumns}
          options={options}
          pagination
          search
          searchPlaceholder="Buscar"
          headerStyle={{background: ' #e6e5e5'}}
        >
          <TableHeaderColumn dataField="omnisageid" dataSort={true}>
            Omnisage ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="description" dataSort={true}>
            Descripción
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TableG;
