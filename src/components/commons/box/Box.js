/*jshint esversion: 6 */
import React from 'react';
import questionIcon from '../../../assets/images/questionIcon.svg';
import './Box.scss';

class Box extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <div>
        <h1 className="box__title">Información del usuario</h1>
        <div className="box__wrapper-box">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <p>Atributos</p>
              <a
                className="box__cursor"
                data-toggle="tooltip"
                data-placement="top"
                title="Huella digital"
              >
                <img src={questionIcon} alt="" width="25" height="25" />
              </a>
            </div>
            <div className="card-body">
              <h3>Audiencias Bluekai</h3>
              {data.bluekaiData &&
                data.bluekaiData.length &&
                Object.values(data.bluekaiData).map((value) => (
                  <p
                    className="box__p"
                    key={value.type}
                  >{`${value.type.toUpperCase()}:  ${value.value}`}</p>
                ))}
              <h3>Categorias Bluekai</h3>
              {data.bluekaiCategories && data.bluekaiCategories.length ? (
                <p>{`${'Top de categorias'}:  ${Object.values(
                  data.bluekaiCategories
                ).map((c) => c.categoryid)}`}</p>
              ) : (
                'No hay datos'
              )}
            </div>
          </div>
          <div className="card bg-light mb-3">
            <div className="card-header">
              <p>Identificadores</p>
              <a
                className="box__cursor"
                data-toggle="tooltip"
                data-placement="top"
                title="Huella digital"
              >
                <img src={questionIcon} alt="" width="25" height="25" />
              </a>
            </div>
            <div className="card-body">
              <div>
                <h3>Primarios</h3>
                {Object.values(data.primaryIdentifier).map((value) => (
                  <p
                    className="box__p"
                    key={value.type}
                  >{`${value.type}:  ${value.value}`}</p>
                ))}
              </div>
              {data && Object.keys(data)[2].length > 0 && (
                <div>
                  <h3>Secundarios</h3>
                  {Object.values(data.secondaryIdentifier).map((value) => (
                    <p
                      className="box__p"
                      className={value.type}
                    >{`${value.type}:  ${value.value}`}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
