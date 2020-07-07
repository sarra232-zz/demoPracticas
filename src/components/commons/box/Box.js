/*jshint esversion: 6 */
import React from 'react';
import './Box.scss';

class Box extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <div className="box__wrapper-box">
        <div className="box__box">
          <h1>Metadata</h1>
          {data.bluekaiCategories && data.bluekaiCategories.length ? (
            <p>{`${'TOP CATEGORIES'}:  ${Object.values(
              data.bluekaiCategories
            ).map((c) => c.categoryid)}`}</p>
          ) : (
            "There aren't Metadata"
          )}
          <h1>Datos Bluekai</h1>
          {data.bluekaiData &&
            data.bluekaiData.length &&
            Object.values(data.bluekaiData).map((value) => (
              <p
                className="box__p"
                key={value.type}
              >{`${value.type.toUpperCase()}:  ${value.value}`}</p>
            ))}
        </div>
        <div className="box__box">
          <div>
            <h1>Identificadores primarios</h1>
            {Object.values(data.primaryIdentifier).map((value) => (
              <p
                className="box__p"
                key={value.type}
              >{`${value.type}:  ${value.value}`}</p>
            ))}
          </div>
          {data && Object.keys(data)[2].length > 0 && (
            <div>
              <h1>Identificadores secundarios</h1>
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
    );
  }
}

export default Box;
