/*jshint esversion: 6 */
import React from 'react';
import './Box.scss';

class Box extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <div>
        <h1 className="box__title">Información del usuario</h1>
        <div className="box__wrapper-box">
          <div className="box__box">
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
              <p>{`${'TOP CATEGORIES'}:  ${Object.values(
                data.bluekaiCategories
              ).map((c) => c.categoryid)}`}</p>
            ) : (
              "There aren't Metadata"
            )}
          </div>
          <div className="box__box">
            <h1>Identificadores</h1>
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
    );
  }
}

export default Box;
