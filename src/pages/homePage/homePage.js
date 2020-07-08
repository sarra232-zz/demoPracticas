import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page__div">
        <pageXOffset>
          <div className="home-page__div">
            <h1 className="home-page">Huella dígital</h1>
            <r />
            <a>
              Utilice este buscador para obtener la{' '}
              <strong
                data-toggle="tooltip"
                data-placement="top"
                title="Huella digital son todas las interacciones (Eventos y Paginas
              Vistas) realizadas por un usuario en un periodo de tiempo
              determinado."
              >
                huella digital
              </strong>{' '}
              de un usuario por medio de algún identificador conocido
              <a href="/demo/fingerprint">. ir a huella dígital.</a>
            </a>
          </div>
          <div className="home-page__div">
            {' '}
            <h1 className="home-page">Segmento</h1>
            <r />
            <a>
              Utilice este buscador para obtener información sobre un{' '}
              <strong
                data-toggle="tooltip"
                data-placement="top"
                title="Grupo de usuarios que tienen características similares."
              >
                segmento{' '}
              </strong>
              utilizando los filtros disponibles
              <a href="/demo/segment">. ir a segmento.</a>
            </a>
          </div>
        </pageXOffset>
      </div>
    );
  }
}
export default HomePage;
