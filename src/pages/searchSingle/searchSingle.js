/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {reduxForm, Field} from 'redux-form';
import Input from '../../components/commons/input/Input';
import Select from '../../components/commons/select/Select';
import DropDown from '../../components/commons/dropDown/DropDown';
import Button from '../../components/commons/button/Button';
import validate from '../../components/commons/formValidations/formValidations';
import {
  platform,
  channelsGoogleAnalytics,
  googleAnalyticsWeb,
  channelsAppsFlyer,
  calendar,
  utilFormSingle,
  apiKey,
} from '../../utils/utilForm';
import {getConfigurationInfoRequest} from '../../actions/configurationInfo';
import './searchSingle.scss';

class SearchSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {advanceSearch: false};
  }

  componentDidMount() {
    this.props.configInfo(apiKey);
  }

  advanceClick = () => {
    this.setState({advanceSearch: !this.state.advanceSearch});
  };

  render() {
    const {filtersSearch, handleSubmit} = this.props;
    return (
      <div className="search-single">
        <article>
          <form
            className="search-single__form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="search-single__form--container">
              <div>
                <div className="search-single__wrapper-colums-standard">
                  <div className="search-single__column">
                    <Field
                      id="time"
                      name="time"
                      label={'Select range of time'}
                      component={Select}
                    >
                      <option value="">Select a date</option>
                      {calendar.map((cal) => (
                        <option key={cal.time} value={cal.value}>
                          {cal.value}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="search-single__column">
                    <Field
                      id="typeIndentifiers"
                      name="typeIndentifiers"
                      label={'Type Indentifiers'}
                      placeholder={'select a option'}
                      component={Select}
                    >
                      <option value="">Select a option</option>
                      {filtersSearch.identifiers.primary.map((type) => (
                        <option key={type.type} value={type.type}>
                          {type.type.toLocaleLowerCase()}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="search-single__column">
                    <Field
                      id="identifier"
                      name="identifier"
                      label={'identifier'}
                      type="text"
                      placeholder={'Enter a identifier'}
                      component={Input}
                    />
                  </div>
                </div>
                {this.state.advanceSearch && (
                  <div className="search-single__wrapper-colums-standard">
                    <div className="search-single__column">
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
                            label: platform(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                            value: platform(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                          },
                          {
                            label: platform(
                              filtersSearch
                            )[1].toLocaleLowerCase(),
                            value: platform(
                              filtersSearch
                            )[1].toLocaleLowerCase(),
                          },
                        ]}
                        component={DropDown}
                      />
                    </div>

                    <div className="search-single__column">
                      <Field
                        id="appsflyer"
                        name="appsflyer"
                        label={'Appsflyer'}
                        placeholder={'Select channel'}
                        isMulti={true}
                        multi
                        props
                        options={[
                          {
                            label: channelsAppsFlyer(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                            value: channelsAppsFlyer(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                          },
                          {
                            label: channelsAppsFlyer(
                              filtersSearch
                            )[1].toLocaleLowerCase(),
                            value: channelsAppsFlyer(
                              filtersSearch
                            )[1].toLocaleLowerCase(),
                          },
                          {
                            key: channelsAppsFlyer(
                              filtersSearch
                            )[2].toLocaleLowerCase(),
                            value: channelsAppsFlyer(
                              filtersSearch
                            )[2].toLocaleLowerCase(),
                          },
                        ]}
                        component={DropDown}
                      />
                    </div>
                    <div className="search-single__column">
                      <Field
                        id="googleanalytics"
                        name="googleanalytics"
                        label={'Google Analytics'}
                        placeholder={'Select plataforms'}
                        isMulti={true}
                        multi
                        props
                        options={[
                          {
                            label: channelsGoogleAnalytics(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                            value: channelsGoogleAnalytics(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                          },
                        ]}
                        component={DropDown}
                      />
                    </div>
                    <div className="search-single__column">
                      <Field
                        id="web"
                        name="web"
                        label={'web'}
                        placeholder={'select a option'}
                        isMulti={true}
                        multi
                        props
                        options={[
                          {
                            label: googleAnalyticsWeb(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                            value: googleAnalyticsWeb(
                              filtersSearch
                            )[0].toLocaleLowerCase(),
                          },
                          {
                            label: googleAnalyticsWeb(
                              filtersSearch
                            )[1].toLocaleLowerCase(),
                            value: googleAnalyticsWeb(
                              filtersSearch
                            )[1].toLocaleLowerCase(),
                          },
                          {
                            label: googleAnalyticsWeb(
                              filtersSearch
                            )[2].toLocaleLowerCase(),
                            value: googleAnalyticsWeb(
                              filtersSearch
                            )[2].toLocaleLowerCase(),
                          },
                          {
                            label: googleAnalyticsWeb(
                              filtersSearch
                            )[3].toLocaleLowerCase(),
                            value: googleAnalyticsWeb(
                              filtersSearch
                            )[3].toLocaleLowerCase(),
                          },
                          {
                            label: googleAnalyticsWeb(
                              filtersSearch
                            )[4].toLocaleLowerCase(),
                            value: googleAnalyticsWeb(
                              filtersSearch
                            )[4].toLocaleLowerCase(),
                          },
                        ]}
                        component={DropDown}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="search-single__wrapper-button">
                <Button children={'Seach'} />
                <Button
                  children={`Advanced search ${
                    this.state.advanceSearch ? '-' : '+'
                  }`}
                  onclick={this.advanceClick}
                />
              </div>
            </div>
          </form>
        </article>
        <article>
          <table className="search-single__table">
            <tr className="search-single__table-header">
              <th className="search-single__table-column">Session</th>
              <th className="search-single__table-column">Devise</th>
              <th className="search-single__table-column">System</th>
              <th className="search-single__table-column">Portal</th>
              <th className="search-single__table-column">Channel</th>
              <th className="search-single__table-column">Colum6</th>
              <th className="search-single__table-column">Colum7</th>
              <th className="search-single__table-column">Colum8</th>
              <th className="search-single__table-column">Colum9</th>
              <th className="search-single__table-column">Colum10</th>
              <th className="search-single__table-column">Colum11</th>
              <th className="search-single__table-column">ColumN</th>
            </tr>
          </table>
        </article>
      </div>
    );
  }
}

const EnhanceSingletForm = reduxForm({
  form: 'searchSingleForm',
  validate,
  onSubmit: (values, props) => {
    const request = utilFormSingle(values, props);
    console.log(request);
  },
});

const mapStateToProps = (state) => ({
  filtersSearch: state.filterSearchs,
});

const mapDispatchToProps = {
  configInfo: getConfigurationInfoRequest,
};

const connectEnhace = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectEnhace, EnhanceSingletForm)(SearchSingle);
