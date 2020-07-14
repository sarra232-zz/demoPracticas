import React, {Component} from 'react';
import {TableHeaderColumn, BootstrapTable} from 'react-bootstrap-table';
import Pagination from 'react-bootstrap/Pagination';
import fecha from 'fecha';
import {dataTable, getEvents} from '../../../utils/utilForm';
import './table.scss';

// class TableRepos extends Component {
//   render() {
//     const {headers, data} = this.props;
//     const dataColumns = data.map((d) => dataTable(d));
//     var i = 1;
//     const lengthPaginator = Math.round(data.length / 5);
//     let active = 2;
//     let items = [];
//     for (let number = 1; number <= lengthPaginator; number++) {
//       items.push(
//         <Pagination.Item key={number} active={number === active}>
//           <a href="#">{number}</a>
//         </Pagination.Item>
//       );
//     }

//     return (
//       <div className="table__table-wrapper table table-striped table-bordered">
//         <strong className="table__title">
//           <h1>Sesiones</h1>
//         </strong>
//         <table className="table">
//           <thead className="thead-dark">
//             <tr>
//               <th>Sesión</th>
//               <th>Portal</th>
//               <th>Plataforma</th>
//               <th>Fecha</th>
//               <th>Evento</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dataColumns.map((d, index) => (
//               <tr key={d}>
//                 <td className="table__session-id">{i++}</td>
//                 <td className="table__portal">{d[1]}</td>
//                 <td className="table__platform">{d[2]}</td>
//                 <td className="table__session-date">{d[3]}</td>
//                 <td className="table__session-date">
//                   {
//                     <div>
//                       <p>{`Id: ${Object.values(d[4])[0].id}`}</p>
//                       <p>{`Event Date: ${Object.values(d[4])[0].eventdate}`}</p>
//                       <p>{`Description: ${
//                         Object.values(d[4])[0].description
//                       }`}</p>
//                       <p>{`Type: ${Object.values(d[4])[0].type}`}</p>
//                     </div>
//                   }
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div>
//           <Pagination>{items}</Pagination>
//           <br />
//         </div>
//       </div>
//     );
//   }
// }

// export default TableRepos;

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

    console.log('table data', dataForColumns);

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
