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
    this.state = {showSeccionId: false, showSeccionPlatform: false};
  }

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

  componentDidMount() {
    getIdentifiers(this.props.configurationInfo.identifiers.primary);
  }

  componentDidUpdate() {
    const {typeConsult} = this.props;
    if (typeConsult) this.changeSeccion(typeConsult);
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
      platformField,
      portalGroup,
      categoryGroup,
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
      return null;
    };
    const showCategories = () => {
      console.log('search-group 74', portalGroup);
      if (portalGroup && portalGroup.length) {
        return getDropDownValue(getChilds(showPortals(), portalGroup[0].value));
      }
    };

    const showTypeCategories = () => {
      if (categoryGroup && categoryGroup.length) {
        return getDropDownValue(
          getChilds(showCategories(), categoryGroup[0].value)
        );
      }
    };

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
                        {Object.keys(configurationInfo.identifiers).map((i) => (
                          <option>{i}</option>
                        ))}
                      </Field>
                    </div>
                  </div>
                )}
                {typeIdentifier && typeIdentifier === 'primary' && (
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
                        <option key={i.type} value={[i.scope, i.type, i.date]}>
                          {i.type.toLocaleLowerCase()}
                        </option>
                      ))}
                    </Field>
                  </div>
                )}
                {typeIdentifier === 'secondary' && (
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
                {typeIdentifier && typeIdentifier === 'device' && (
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
                        <option key={i.type} value={[i.scope, i.type, i.date]}>
                          {i.type.toLocaleLowerCase()}
                        </option>
                      ))}
                    </Field>
                  </div>
                )}
                {(primaryIndentifier ||
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

                {this.state.showSeccionPlatform && (
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
                  Object.values(platformField[0].value)[1].hasChild && (
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
                {platformField &&
                  platformField.length === 1 &&
                  Object.values(platformField[0].value)[1].hasChild &&
                  portalGroup &&
                  portalGroup.length === 1 &&
                  Object.values(portalGroup[0].value)[1].hasChild && (
                    <div className="search-group__column">
                      <Field
                        id="categoryGroup"
                        name="categoryGroup"
                        label={'Categoria'}
                        placeholder={'Seleccione una opción'}
                        isMulti={true}
                        multi
                        props
                        options={showCategories().map((p) => ({
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
                {platformField &&
                  platformField.length === 1 &&
                  Object.values(platformField[0].value)[1].hasChild &&
                  portalGroup &&
                  portalGroup.length === 1 &&
                  Object.values(portalGroup[0].value)[1].hasChild &&
                  categoryGroup &&
                  categoryGroup.length === 1 &&
                  Object.values(categoryGroup[0].value)[1].hasChild && (
                    <div className="ssearch-group__column">
                      <Field
                        id="typeCategory"
                        name="typeCategory"
                        label={'Tipo de categoria'}
                        placeholder={'Seleccione una opción'}
                        isMulti={true}
                        multi
                        props
                        options={showTypeCategories().map((p) => ({
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
              <div className="search-group__wrapper-button">
                <Button children={'Buscar'} />
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
  },
});

const mapStateToProps = (state, ownProps) => {
  const selector = formValueSelector('utilFormGroup');
  const typeConsult = selector(state, 'typeConsult');
  const typeIdentifier = selector(state, 'typeIdentifier');
  const primaryIndentifier = selector(state, 'primaryIndentifiers');
  const secondaryIdentifier = selector(state, 'secondaryIdentifiers');
  const deviceIdentifier = selector(state, 'deviceIdentifiers');
  const platformField = selector(state, 'platform');
  const portalGroup = selector(state, 'portalGroup');
  const categoryGroup = selector(state, 'categoryGroup');
  const typeCategory = selector(state, 'typeCategory');
  return {
    typeConsult,
    typeIdentifier,
    primaryIndentifier,
    secondaryIdentifier,
    deviceIdentifier,
    platformField,
    portalGroup,
    categoryGroup,
    typeCategory,
    configurationInfo: state.configInfo.data,
    //Recordar cambiar el configInfo por  segmentSearchs
    fetching: state.configInfo.fetching,
    // fingerSearch: state.fingerSearchs.fingerSearch,
  };
};
const mapDispatchToProps = {};

const connectEnhace = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectEnhace, EnhanceGrouptForm)(SearchGroup);
