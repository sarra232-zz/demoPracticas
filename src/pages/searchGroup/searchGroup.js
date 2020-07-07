/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import DropDown from '../../components/commons/dropDown/DropDown';
import Button from '../../components/commons/button/Button';
import Select from '../../components/commons/select/Select';
import Spinner from '../../components/commons/spinner/spinner';
import Input from '../../components/commons/input/Input';
import validate from '../../components/commons/formValidations/formValidations';
import {
  getIdentifiers,
  calendar,
  utilFormGroup,
  getDropDownValue,
  getChilds,
} from '../../utils/utilFormGroup';
import Table from '../../components/commons/table/table';
import './searchGroup.scss';

class SearchGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advanceSearch: false,
      showSeccionId: false,
      showSeccionPlatform: false,
      addGroup: 1,
    };
  }
  advanceClick = () => {
    this.setState({advanceSearch: !this.state.advanceSearch});
  };

  increment = () => {
    this.setState({addGroup: this.state.addGroup + 1});
  };

  decrement = () => {
    this.setState({addGroup: this.state.addGroup - 1});
  };

  changeSeccion = (typeConsult) => {
    if (typeConsult === 'Identifier' && !this.state.showSeccionId) {
      this.setState({showSeccionId: true});
      this.setState({showSeccionPlatform: false});
    }
    if (typeConsult === 'Platform' && !this.state.showSeccionPlatform) {
      this.setState({showSeccionId: false});
      this.setState({showSeccionPlatform: true});
    }
  };

  changeSeccion1 = (typeConsult1) => {
    if (typeConsult1 === 'Identifier' && !this.state.showSeccionId1) {
      this.setState({showSeccionId1: true});
      this.setState({showSeccionPlatform1: false});
    }
    if (typeConsult1 === 'Platform' && !this.state.showSeccionPlatform1) {
      this.setState({showSeccionId1: false});
      this.setState({showSeccionPlatform1: true});
    }
  };

  changeSeccion2 = (typeConsult2) => {
    if (typeConsult2 === 'Identifier' && !this.state.showSeccionId2) {
      this.setState({showSeccionId2: true});
      this.setState({showSeccionPlatform2: false});
    }
    if (typeConsult2 === 'Platform' && !this.state.showSeccionPlatform2) {
      this.setState({showSeccionId2: false});
      this.setState({showSeccionPlatform2: true});
    }
  };

  componentDidMount() {
    getIdentifiers(this.props.configurationInfo.identifiers.primary);
  }

  componentDidUpdate() {
    const {typeConsult} = this.props;
    const {typeConsult1} = this.props;
    const {typeConsult2} = this.props;
    if (typeConsult) this.changeSeccion(typeConsult);
    if (typeConsult1) this.changeSeccion1(typeConsult1);
    if (typeConsult2) this.changeSeccion2(typeConsult2);
  }

  render() {
    const {
      configurationInfo,
      handleSubmit,
      typeConsult,
      typeIdentifier,
      primaryIndentifier,
      secondaryIdentifier,
      deviceIdentifier,
      identifier,
      platformField,
      portalGroup,
      categoryGroup,

      typeConsult1,
      typeIdentifier1,
      primaryIndentifier1,
      secondaryIdentifier1,
      deviceIdentifier1,
      identifier1,
      platformField1,
      portalGroup1,
      categoryGroup1,

      typeConsult2,
      typeIdentifier2,
      primaryIndentifier2,
      secondaryIdentifier2,
      deviceIdentifier2,
      identifier2,
      platformField2,
      portalGroup2,
      categoryGroup2,

      fetching,
    } = this.props;
    const showPlatforms = () => {
      return getDropDownValue(configurationInfo.filters);
    };
    const showPortals = () => {
      if (platformField && platformField.length) {
        return getDropDownValue(
          getChilds(showPlatforms(), platformField[0].value)
        );
      }
      if (platformField1 && platformField1.length) {
        return getDropDownValue(
          getChilds(showPlatforms(), platformField1[0].value)
        );
      }
      if (platformField2 && platformField2.length) {
        return getDropDownValue(
          getChilds(showPlatforms(), platformField2[0].value)
        );
      }
      return null;
    };

    const activeAll = false;

    return (
      <div className="search-group">
        {fetching && <Spinner></Spinner>}
        <article>
          <form
            className="search-group__form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="search-group__form--container">
              <div className="search-group__wrapper-colums">
                <div className="search-group__column">
                  <Field
                    id="time"
                    name="time"
                    label={'Seleccione un rango de tiempo'}
                    component={Select}
                  >
                    <option value="">Seleccione tiempo</option>
                    {calendar.map((cal) => (
                      <option key={cal.value} value={cal.value}>
                        {cal.value}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="search-group__column">
                  <Field
                    id="typeConsult"
                    name="typeConsult"
                    label={'Seleccione tipo de consulta'}
                    component={Select}
                  >
                    <option value="">Seleccione una opción</option>
                    <option key={'Identifier'} value={'Identifier'}>
                      Identificador
                    </option>
                    <option key={'Platform'} value={'Platform'}>
                      Plataforma
                    </option>
                  </Field>
                </div>
                {this.state.showSeccionId && (
                  <div>
                    <div className="search-group__column">
                      <Field
                        id="typeIdentifier"
                        name="typeIdentifier"
                        label={'Seleccione tipo de identificador'}
                        component={Select}
                      >
                        <option value="">Seleccione una opción</option>
                        {Object.keys(configurationInfo.identifiers).map(
                          (i) => i !== 'primary' && <option>{i}</option>
                        )}
                      </Field>
                    </div>
                  </div>
                )}
                {this.state.showSeccionId &&
                  typeIdentifier &&
                  typeIdentifier === 'primary' && (
                    <div className="search-group__column">
                      <Field
                        id="primaryIndentifiers"
                        name="primaryIndentifiers"
                        label={'Primary Indentifiers'}
                        placeholder={'seleccione un identicador'}
                        component={Select}
                      >
                        <option value="">Seleccione una opción</option>
                        {Object.values(
                          getIdentifiers(configurationInfo.identifiers.primary)
                        ).map((i) => (
                          <option
                            key={i.type}
                            value={[i.scope, i.type, i.date]}
                          >
                            {i.type.toLocaleLowerCase()}
                          </option>
                        ))}
                      </Field>
                    </div>
                  )}
                {this.state.showSeccionId && typeIdentifier === 'secondary' && (
                  <div className="search-group__column">
                    <Field
                      id="secondaryIdentifiers"
                      name="secondaryIdentifiers"
                      label={'Identificador secundario'}
                      placeholder={'seleccione una opción'}
                      component={Select}
                    >
                      <option value="">Seleccine una opción</option>
                      {Object.values(
                        getIdentifiers(configurationInfo.identifiers.secondary)
                      ).map((i) => (
                        <option key={i.type} value={[i.scope, i.type, i.date]}>
                          {i.type.toLocaleLowerCase()}
                        </option>
                      ))}
                    </Field>
                  </div>
                )}
                {this.state.showSeccionId &&
                  typeIdentifier &&
                  typeIdentifier === 'device' && (
                    <div className="search-group__column">
                      <Field
                        id="deviceIdentifiers"
                        name="deviceIdentifiers"
                        label={'Identificador de dispositivo'}
                        placeholder={'seleccione una opción'}
                        component={Select}
                      >
                        <option value="">Seleccione una opción</option>
                        {Object.values(
                          getIdentifiers(configurationInfo.identifiers.device)
                        ).map((i) => (
                          <option
                            key={i.type}
                            value={[i.scope, i.type, i.date]}
                          >
                            {i.type.toLocaleLowerCase()}
                          </option>
                        ))}
                      </Field>
                    </div>
                  )}
                {console.log('276', typeConsult)}
                {this.state.showSeccionId &&
                  typeConsult === 'Identifier' &&
                  (primaryIndentifier ||
                    secondaryIdentifier ||
                    deviceIdentifier) && (
                    <div className="search-group__column">
                      <Field
                        id="identifier"
                        name="identifier"
                        label={'Identificador'}
                        type="text"
                        placeholder={'Ingrese identificador'}
                        component={Input}
                      />
                    </div>
                  )}

                {this.state.showSeccionPlatform &&
                  typeConsult !== 'Identifier' && (
                    <div>
                      <div className="search-group__column">
                        <Field
                          id="platform"
                          name="platform"
                          label={'Plataforma'}
                          placeholder={'Seleccione plataforma'}
                          isMulti={true}
                          multi
                          props
                          field
                          options={showPlatforms().map((p) => ({
                            label: p.key.toLocaleLowerCase(),
                            value: {
                              key: p.key,
                              value: {
                                lastDate: p.values.lastDate,
                                hasChild: p.values.hasChild,
                              },
                            },
                          }))}
                          component={DropDown}
                        />
                      </div>
                    </div>
                  )}
                {platformField &&
                  platformField.length === 1 &&
                  Object.values(platformField[0].value)[1].hasChild &&
                  typeConsult !== 'Identifier' && (
                    <div className="search-group__column">
                      <Field
                        id="portalGroup"
                        name="portalGroup"
                        label={'Portal'}
                        placeholder={'Seleccione una opción'}
                        isMulti={true}
                        multi
                        props
                        options={showPortals().map((p) => ({
                          label: p.key.toLocaleLowerCase(),
                          value: {
                            key: p.key,
                            value: {
                              lastDate: p.values.lastDate,
                              hasChild: p.values.hasChild,
                            },
                          },
                        }))}
                        component={DropDown}
                      />
                    </div>
                  )}
              </div>
              {this.state.addGroup >= 2 && this.state.addGroup <= 3 && (
                <div className="search-group__wrapper-colums search-group__wrapper-colums--new">
                  <div className="search-group__column">
                    <Field
                      id="time1"
                      name="time1"
                      label={'Seleccione un rango de tiempo'}
                      component={Select}
                    >
                      <option value="">Seleccione tiempo</option>
                      {calendar.map((cal) => (
                        <option key={cal.value} value={cal.value}>
                          {cal.value}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="search-group__column">
                    <Field
                      id="typeConsult1"
                      name="typeConsult1"
                      label={'Seleccione tipo de consulta'}
                      component={Select}
                    >
                      <option value="">Seleccione una opción</option>
                      <option key={'Identifier'} value={'Identifier'}>
                        Identificador
                      </option>
                      <option key={'Platform'} value={'Platform'}>
                        Plataforma
                      </option>
                    </Field>
                  </div>
                  {this.state.showSeccionId1 && (
                    <div>
                      <div className="search-group__column">
                        <Field
                          id="typeIdentifier1"
                          name="typeIdentifier1"
                          label={'Seleccione tipo de identificador'}
                          component={Select}
                        >
                          <option value="">Seleccione una opción</option>
                          {Object.keys(configurationInfo.identifiers).map(
                            (i) => (
                              <option>{i}</option>
                            )
                          )}
                        </Field>
                      </div>
                    </div>
                  )}
                  {this.state.showSeccionId1 &&
                    typeIdentifier1 &&
                    typeIdentifier1 === 'primary' && (
                      <div className="search-group__column">
                        <Field
                          id="primaryIndentifiers1"
                          name="primaryIndentifiers1"
                          label={'Primary Indentifiers'}
                          placeholder={'seleccione un identicador'}
                          component={Select}
                        >
                          <option value="">Seleccione una opción</option>
                          {Object.values(
                            getIdentifiers(
                              configurationInfo.identifiers.primary
                            )
                          ).map((i) => (
                            <option
                              key={i.type}
                              value={[i.scope, i.type, i.date]}
                            >
                              {i.type.toLocaleLowerCase()}
                            </option>
                          ))}
                        </Field>
                      </div>
                    )}
                  {this.state.showSeccionId1 &&
                    typeIdentifier1 === 'secondary' && (
                      <div className="search-group__column">
                        <Field
                          id="secondaryIdentifiers1"
                          name="secondaryIdentifiers1"
                          label={'Identificador secundario'}
                          placeholder={'seleccione una opción'}
                          component={Select}
                        >
                          <option value="">Seleccine una opción</option>
                          {Object.values(
                            getIdentifiers(
                              configurationInfo.identifiers.secondary
                            )
                          ).map((i) => (
                            <option
                              key={i.type}
                              value={[i.scope, i.type, i.date]}
                            >
                              {i.type.toLocaleLowerCase()}
                            </option>
                          ))}
                        </Field>
                      </div>
                    )}
                  {this.state.showSeccionId1 &&
                    typeIdentifier1 &&
                    typeIdentifier1 === 'device' && (
                      <div className="search-group__column">
                        <Field
                          id="deviceIdentifiers1"
                          name="deviceIdentifiers1"
                          label={'Identificador de dispositivo'}
                          placeholder={'seleccione una opción'}
                          component={Select}
                        >
                          <option value="">Seleccione una opción</option>
                          {Object.values(
                            getIdentifiers(configurationInfo.identifiers.device)
                          ).map((i) => (
                            <option
                              key={i.type}
                              value={[i.scope, i.type, i.date]}
                            >
                              {i.type.toLocaleLowerCase()}
                            </option>
                          ))}
                        </Field>
                      </div>
                    )}
                  {this.state.showSeccionId1 &&
                    (primaryIndentifier1 ||
                      secondaryIdentifier1 ||
                      deviceIdentifier1) && (
                      <div className="search-group__column">
                        <Field
                          id="identifier1"
                          name="identifier1"
                          label={'Identificador'}
                          type="text"
                          placeholder={'Ingrese identificador'}
                          component={Input}
                        />
                      </div>
                    )}

                  {this.state.showSeccionPlatform1 &&
                    typeConsult1 !== 'Identifier' && (
                      <div>
                        <div className="search-group__column">
                          <Field
                            id="platform1"
                            name="platform1"
                            label={'Plataforma'}
                            placeholder={'Seleccione plataforma'}
                            isMulti={true}
                            multi
                            props
                            field
                            options={showPlatforms().map((p) => ({
                              label: p.key.toLocaleLowerCase(),
                              value: {
                                key: p.key,
                                value: {
                                  lastDate: p.values.lastDate,
                                  hasChild: p.values.hasChild,
                                },
                              },
                            }))}
                            component={DropDown}
                          />
                        </div>
                      </div>
                    )}
                  {platformField1 &&
                    platformField1.length === 1 &&
                    typeConsult1 !== 'Identifier' &&
                    Object.values(platformField1[0].value)[1].hasChild && (
                      <div className="search-group__column">
                        <Field
                          id="portalGroup1"
                          name="portalGroup1"
                          label={'Portal'}
                          placeholder={'Seleccione una opción'}
                          isMulti={true}
                          multi
                          props
                          options={showPortals().map((p) => ({
                            label: p.key.toLocaleLowerCase(),
                            value: {
                              key: p.key,
                              value: {
                                lastDate: p.values.lastDate,
                                hasChild: p.values.hasChild,
                              },
                            },
                          }))}
                          component={DropDown}
                        />
                      </div>
                    )}
                </div>
              )}
              {this.state.addGroup === 3 && (
                <div className="search-group__wrapper-colums search-group__wrapper-colums--new">
                  <div className="search-group__column">
                    <Field
                      id="time2"
                      name="time2"
                      label={'Seleccione un rango de tiempo'}
                      component={Select}
                    >
                      <option value="">Seleccione tiempo</option>
                      {calendar.map((cal) => (
                        <option key={cal.value} value={cal.value}>
                          {cal.value}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="search-group__column">
                    <Field
                      id="typeConsult2"
                      name="typeConsult2"
                      label={'Seleccione tipo de consulta'}
                      component={Select}
                    >
                      <option value="">Seleccione una opción</option>
                      <option key={'Identifier'} value={'Identifier'}>
                        Identificador
                      </option>
                      <option key={'Platform'} value={'Platform'}>
                        Plataforma
                      </option>
                    </Field>
                  </div>
                  {this.state.showSeccionId2 && (
                    <div>
                      <div className="search-group__column">
                        <Field
                          id="typeIdentifier2"
                          name="typeIdentifier2"
                          label={'Seleccione tipo de identificador'}
                          component={Select}
                        >
                          <option value="">Seleccione una opción</option>
                          {Object.keys(configurationInfo.identifiers).map(
                            (i) => (
                              <option>{i}</option>
                            )
                          )}
                        </Field>
                      </div>
                    </div>
                  )}
                  {this.state.showSeccionId2 &&
                    typeIdentifier2 &&
                    typeIdentifier2 === 'primary' && (
                      <div className="search-group__column">
                        <Field
                          id="primaryIndentifiers2"
                          name="primaryIndentifiers2"
                          label={'Primary Indentifiers'}
                          placeholder={'seleccione un identicador'}
                          component={Select}
                        >
                          <option value="">Seleccione una opción</option>
                          {Object.values(
                            getIdentifiers(
                              configurationInfo.identifiers.primary
                            )
                          ).map((i) => (
                            <option
                              key={i.type}
                              value={[i.scope, i.type, i.date]}
                            >
                              {i.type.toLocaleLowerCase()}
                            </option>
                          ))}
                        </Field>
                      </div>
                    )}
                  {this.state.showSeccionId2 &&
                    typeIdentifier2 === 'secondary' && (
                      <div className="search-group__column">
                        <Field
                          id="secondaryIdentifiers2"
                          name="secondaryIdentifiers2"
                          label={'Identificador secundario'}
                          placeholder={'seleccione una opción'}
                          component={Select}
                        >
                          <option value="">Seleccine una opción</option>
                          {Object.values(
                            getIdentifiers(
                              configurationInfo.identifiers.secondary
                            )
                          ).map((i) => (
                            <option
                              key={i.type}
                              value={[i.scope, i.type, i.date]}
                            >
                              {i.type.toLocaleLowerCase()}
                            </option>
                          ))}
                        </Field>
                      </div>
                    )}
                  {this.state.showSeccionId2 &&
                    typeIdentifier2 &&
                    typeIdentifier2 === 'device' && (
                      <div className="search-group__column">
                        <Field
                          id="deviceIdentifiers2"
                          name="deviceIdentifiers2"
                          label={'Identificador de dispositivo'}
                          placeholder={'seleccione una opción'}
                          component={Select}
                        >
                          <option value="">Seleccione una opción</option>
                          {Object.values(
                            getIdentifiers(configurationInfo.identifiers.device)
                          ).map((i) => (
                            <option
                              key={i.type}
                              value={[i.scope, i.type, i.date]}
                            >
                              {i.type.toLocaleLowerCase()}
                            </option>
                          ))}
                        </Field>
                      </div>
                    )}
                  {this.state.showSeccionId2 &&
                    (primaryIndentifier2 ||
                      secondaryIdentifier2 ||
                      deviceIdentifier2) && (
                      <div className="search-group__column">
                        <Field
                          id="identifier2"
                          name="identifier2"
                          label={'Identificador'}
                          type="text"
                          placeholder={'Ingrese identificador'}
                          component={Input}
                        />
                      </div>
                    )}

                  {this.state.showSeccionPlatform2 &&
                    typeConsult2 !== 'Identifier' && (
                      <div>
                        <div className="search-group__column">
                          <Field
                            id="platform2"
                            name="platform2"
                            label={'Plataforma'}
                            placeholder={'Seleccione plataforma'}
                            isMulti={true}
                            multi
                            props
                            field
                            options={showPlatforms().map((p) => ({
                              label: p.key.toLocaleLowerCase(),
                              value: {
                                key: p.key,
                                value: {
                                  lastDate: p.values.lastDate,
                                  hasChild: p.values.hasChild,
                                },
                              },
                            }))}
                            component={DropDown}
                          />
                        </div>
                      </div>
                    )}
                  {platformField2 &&
                    platformField2.length === 1 &&
                    typeConsult2 !== 'Identifier' &&
                    Object.values(platformField2[0].value)[1].hasChild && (
                      <div className="search-group__column">
                        <Field
                          id="portalGroup2"
                          name="portalGroup2"
                          label={'Portal'}
                          placeholder={'Seleccione una opción'}
                          isMulti={true}
                          multi
                          props
                          options={showPortals().map((p) => ({
                            label: p.key.toLocaleLowerCase(),
                            value: {
                              key: p.key,
                              value: {
                                lastDate: p.values.lastDate,
                                hasChild: p.values.hasChild,
                              },
                            },
                          }))}
                          component={DropDown}
                        />
                      </div>
                    )}
                </div>
              )}
              <div className="search-group__wrapper-button">
                <Button children={'Buscar'} onclick={this.advanceClick} />
                {this.state.addGroup < 3 && (
                  <Button
                    className="inc"
                    children={'Adiccionar filtro'}
                    onclick={this.increment}
                  />
                )}
                {this.state.addGroup > 1 && this.state.addGroup < 4 && (
                  <Button
                    className="dec"
                    children={'Quitar filtro'}
                    onclick={this.decrement}
                  />
                )}
              </div>
            </div>
          </form>
        </article>
        <article>
          {/* <Table
            headers={Object.keys (Object.values (fingerSearch.finger)[0])}
            data={Object.values (Object.values (fingerSearch.finger))}
          /> */}
        </article>
      </div>
    );
  }
}

const EnhanceGrouptForm = reduxForm({
  form: 'utilFormGroup',
  validate,
  onSubmit: (values, props) => {
    const request = utilFormGroup(values, props);
    console.log('791 requesSearchGroup', request);
  },
});

const mapStateToProps = (state, ownProps) => {
  const selector = formValueSelector('utilFormGroup');
  // Form 0
  const typeConsult = selector(state, 'typeConsult');
  const typeIdentifier = selector(state, 'typeIdentifier');
  const primaryIndentifier = selector(state, 'primaryIndentifiers');
  const secondaryIdentifier = selector(state, 'secondaryIdentifiers');
  const deviceIdentifier = selector(state, 'deviceIdentifiers');
  const identifier = selector(state, 'identifier');
  const platformField = selector(state, 'platform');
  const portalGroup = selector(state, 'portalGroup');
  const categoryGroup = selector(state, 'categoryGroup');
  const typeCategory = selector(state, 'typeCategory');
  // Form 1
  const typeConsult1 = selector(state, 'typeConsult1');
  const typeIdentifier1 = selector(state, 'typeIdentifier1');
  const primaryIndentifier1 = selector(state, 'primaryIndentifiers1');
  const secondaryIdentifier1 = selector(state, 'secondaryIdentifiers1');
  const deviceIdentifier1 = selector(state, 'deviceIdentifiers1');
  const identifier1 = selector(state, 'identifier1');
  const platformField1 = selector(state, 'platform1');
  const portalGroup1 = selector(state, 'portalGroup1');
  const categoryGroup1 = selector(state, 'categoryGroup1');
  const typeCategory1 = selector(state, 'typeCategory1');
  // Form 2
  const typeConsult2 = selector(state, 'typeConsult2');
  const typeIdentifier2 = selector(state, 'typeIdentifier2');
  const primaryIndentifier2 = selector(state, 'primaryIndentifiers2');
  const secondaryIdentifier2 = selector(state, 'secondaryIdentifiers2');
  const deviceIdentifier2 = selector(state, 'deviceIdentifiers2');
  const identifier2 = selector(state, 'identifier2');
  const platformField2 = selector(state, 'platform2');
  const portalGroup2 = selector(state, 'portalGroup2');
  const categoryGroup2 = selector(state, 'categoryGroup2');
  const typeCategory2 = selector(state, 'typeCategory2');

  return {
    //Form 0
    typeConsult,
    typeIdentifier,
    primaryIndentifier,
    secondaryIdentifier,
    deviceIdentifier,
    platformField,
    portalGroup,
    categoryGroup,
    typeCategory,
    // Form 1
    typeConsult1,
    typeIdentifier1,
    primaryIndentifier1,
    secondaryIdentifier1,
    deviceIdentifier1,
    platformField1,
    portalGroup1,
    categoryGroup1,
    typeCategory1,
    //Form 2
    typeConsult2,
    typeIdentifier2,
    primaryIndentifier2,
    secondaryIdentifier2,
    deviceIdentifier2,
    platformField2,
    portalGroup2,
    categoryGroup2,
    typeCategory2,

    configurationInfo: state.configInfo.data,
    //Recordar cambiar el configInfo por  segmentSearchs
    fetching: state.configInfo.fetching,
    // fingerSearch: state.fingerSearchs.fingerSearch,
  };
};
const mapDispatchToProps = {};

const connectEnhace = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectEnhace, EnhanceGrouptForm)(SearchGroup);
