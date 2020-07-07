import React from 'react';
import './homePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page__div">
        <pageXOffset>
          <div className="home-page__div">
            <h1 className="home-page">Huella dígital</h1>
            <r />
            {/* <h3>
              Huella digital son todas las interacciones (Eventos y Paginas
              Vistas) realizadas por un usuario en un periodo de tiempo
              determinado.
            </h3> */}
            <a>
              Utilice este buscador para obtener la huella digital de un usuario
              por medio de algún identificador conocido
              <a href="/demo/fingerprint">. ir a huella dígital.</a>
            </a>
          </div>
          <div className="home-page__div">
            {' '}
            <h1 className="home-page">Segmento</h1>
          </div>
        </pageXOffset>
      </div>
    );
  }
}
export default HomePage;
