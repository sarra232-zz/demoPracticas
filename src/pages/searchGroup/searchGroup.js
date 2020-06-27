/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import DropDown from '../../components/commons/dropDown/DropDown';
import Button from '../../components/commons/button/Button';
import Select from '../../components/commons/select/Select';
import validate from '../../components/commons/formValidations/formValidations';
import {
  getIdentifiers,
  platform,
  channelsGoogleAnalytics,
  googleAnalyticsWeb,
  channelsAppsFlyer,
  googleAnalyticsTypes,
  validateSelect,
  calendar,
  utilFormGroup,
} from '../../utils/utilForm';
import Table from '../../components/commons/table/table';
import './searchGroup.scss';

class SearchGroup extends React.Component {
  constructor (props) {
    super (props);
    this.state = {advanceSearch: false};
  }

  componentDidMount () {
    getIdentifiers (this.props.configurationInfo.identifiers.primary);
  }

  advanceClick = () => {
    this.setState ();
  };

  render () {
    const {
      configurationInfo,
      handleSubmit,
      platformField,
      portalGoogleAnalytucsField,
      portalAppsFlyerField,
      categoryField,
    } = this.props;
    return (
      <div className="search-group">
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
                    label={'Select range of time'}
                    component={Select}
                  >
                    <option value="">Select a date</option>
                    {calendar.map (cal => (
                      <option key={cal.value} value={cal.value}>
                        {cal.value}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="search-group__column">
                  <Field
                    id="time"
                    name="time"
                    label={'Select type consult'}
                    component={Select}
                  >
                    <option value="">Select option</option>
                    <option>{'Identifier'}</option>
                    <option>{'Platform'}</option>
                  </Field>
                </div>
                <div className="search-group__column">
                  <Field
                    id="platform"
                    name="platform"
                    label={'Platform'}
                    placeholder={'Select plataforms'}
                    isMulti={true}
                    multi
                    props
                    field
                    options={[
                      {
                        label: platform (
                          configurationInfo
                        )[0].toLocaleLowerCase (),
                        value: platform (
                          configurationInfo
                        )[0].toLocaleLowerCase (),
                      },
                      {
                        label: platform (
                          configurationInfo
                        )[1].toLocaleLowerCase (),
                        value: platform (
                          configurationInfo
                        )[1].toLocaleLowerCase (),
                      },
                    ]}
                    component={DropDown}
                  />
                </div>
                {platformField &&
                  platformField.length === 1 &&
                  validateSelect (platformField) === 'appsflyer' &&
                  <div className="search-group__column">
                    <Field
                      id="appsflyer"
                      name="appsflyer"
                      label={'Select portal'}
                      placeholder={'Select channel'}
                      isMulti={true}
                      multi
                      props
                      options={[
                        {
                          label: channelsAppsFlyer (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                          value: channelsAppsFlyer (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                        },
                        {
                          label: channelsAppsFlyer (
                            configurationInfo
                          )[1].toLocaleLowerCase (),
                          value: channelsAppsFlyer (
                            configurationInfo
                          )[1].toLocaleLowerCase (),
                        },
                        {
                          key: channelsAppsFlyer (
                            configurationInfo
                          )[2].toLocaleLowerCase (),
                          value: channelsAppsFlyer (
                            configurationInfo
                          )[2].toLocaleLowerCase (),
                        },
                      ]}
                      component={DropDown}
                    />
                  </div>}
                {platformField &&
                  platformField.length === 1 &&
                  validateSelect (platformField) === 'googleanalytics' &&
                  <div className="search-group__column">
                    <Field
                      id="googleanalytics"
                      name="googleanalytics"
                      label={'Select portal'}
                      placeholder={'Select plataforms'}
                      isMulti={true}
                      multi
                      props
                      options={[
                        {
                          label: channelsGoogleAnalytics (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                          value: channelsGoogleAnalytics (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                        },
                      ]}
                      component={DropDown}
                    />
                  </div>}
                {portalGoogleAnalytucsField &&
                  portalGoogleAnalytucsField.length === 1 &&
                  validateSelect (portalGoogleAnalytucsField) === 'web' &&
                  <div className="ssearch-group__column">
                    <Field
                      id="web"
                      name="web"
                      label={'Select category'}
                      placeholder={'select a option'}
                      isMulti={true}
                      multi
                      props
                      options={[
                        {
                          label: googleAnalyticsWeb (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                          value: googleAnalyticsWeb (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                        },
                        {
                          label: googleAnalyticsWeb (
                            configurationInfo
                          )[1].toLocaleLowerCase (),
                          value: googleAnalyticsWeb (
                            configurationInfo
                          )[1].toLocaleLowerCase (),
                        },
                        {
                          label: googleAnalyticsWeb (
                            configurationInfo
                          )[2].toLocaleLowerCase (),
                          value: googleAnalyticsWeb (
                            configurationInfo
                          )[2].toLocaleLowerCase (),
                        },
                        {
                          label: googleAnalyticsWeb (
                            configurationInfo
                          )[3].toLocaleLowerCase (),
                          value: googleAnalyticsWeb (
                            configurationInfo
                          )[3].toLocaleLowerCase (),
                        },
                        {
                          label: googleAnalyticsWeb (
                            configurationInfo
                          )[4].toLocaleLowerCase (),
                          value: googleAnalyticsWeb (
                            configurationInfo
                          )[4].toLocaleLowerCase (),
                        },
                      ]}
                      component={DropDown}
                    />
                  </div>}
                {categoryField &&
                  categoryField.length === 1 &&
                  validateSelect (categoryField) === 'transacciones' &&
                  <div className="search-group__column">
                    <Field
                      id="transacciones"
                      name="transacciones"
                      label={'Select type of category'}
                      placeholder={'select a option'}
                      isMulti={true}
                      multi
                      props
                      options={[
                        {
                          label: googleAnalyticsTypes (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                          value: googleAnalyticsTypes (
                            configurationInfo
                          )[0].toLocaleLowerCase (),
                        },
                        {
                          label: googleAnalyticsTypes (
                            configurationInfo
                          )[1].toLocaleLowerCase (),
                          value: googleAnalyticsTypes (
                            configurationInfo
                          )[1].toLocaleLowerCase (),
                        },
                        {
                          label: googleAnalyticsTypes (
                            configurationInfo
                          )[2].toLocaleLowerCase (),
                          value: googleAnalyticsTypes (
                            configurationInfo
                          )[2].toLocaleLowerCase (),
                        },
                        {
                          label: googleAnalyticsTypes (
                            configurationInfo
                          )[3].toLocaleLowerCase (),
                          value: googleAnalyticsTypes (
                            configurationInfo
                          )[3].toLocaleLowerCase (),
                        },
                      ]}
                      component={DropDown}
                    />
                  </div>}
              </div>
              <div className="search-group__wrapper-button">
                <Button children={'Seach'} />
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

const EnhanceGrouptForm = reduxForm ({
  form: 'searchGroupForm',
  validate,
  onSubmit: (values, props) => {
    const request = utilFormGroup (values, props);
  },
});

const mapStateToProps = (state, ownProps) => {
  const selector = formValueSelector ('searchGroupForm');
  const platformField = selector (state, 'platform');
  const portalGoogleAnalytucsField = selector (state, 'googleanalytics');
  const portalAppsFlyerField = selector (state, 'appsflyer');
  const categoryField = selector (state, 'web');
  // const typeField = selector (state, '');
  return {
    platformField,
    portalGoogleAnalytucsField,
    portalAppsFlyerField,
    categoryField,
    configurationInfo: state.configInfo.data,
    // fingerSearch: state.fingerSearchs.fingerSearch,
  };
};
const mapDispatchToProps = {};

const connectEnhace = connect (mapStateToProps, mapDispatchToProps);

export default compose (connectEnhace, EnhanceGrouptForm) (SearchGroup);
