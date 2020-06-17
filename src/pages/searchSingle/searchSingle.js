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
} from '../../utils/utilForm';
import './searchSingle.scss';

class SearchSingle extends React.Component {
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
              <div className="search-single__wrapper-colums">
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
                        {type.type}
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
                <div className="search-single__column">
                  <Field
                    id="platform"
                    name="platform"
                    label={'Platform'}
                    placeholder={'Select plataforms'}
                    component={DropDown}
                    options={[
                      {
                        label: platform(filtersSearch)[0].toLocaleLowerCase(),
                        value: platform(filtersSearch)[0],
                      },
                      {
                        label: platform(filtersSearch)[1],
                        value: platform(filtersSearch)[1],
                      },
                    ]}
                  />
                </div>

                <div className="search-single__column">
                  {console.log(channelsAppsFlyer(filtersSearch)[0])}
                  <Field
                    id="appsflyer"
                    name="appsflyer"
                    label={'Appsflyer'}
                    placeholder={'Select plataforms'}
                    component={DropDown}
                    options={[
                      {
                        label: channelsAppsFlyer(filtersSearch)[0],
                        value: channelsAppsFlyer(filtersSearch)[0],
                      },
                      {
                        label: channelsAppsFlyer(filtersSearch)[1],
                        value: channelsAppsFlyer(filtersSearch)[1],
                      },
                      {
                        label: channelsAppsFlyer(filtersSearch)[2],
                        value: channelsAppsFlyer(filtersSearch)[2],
                      },
                    ]}
                  />
                </div>
                <div className="search-single__column">
                  <Field
                    id="googleanalytics"
                    name="googleanalytics"
                    label={'Google Analytics'}
                    placeholder={'Select plataforms'}
                    component={DropDown}
                    options={[
                      {
                        label: channelsGoogleAnalytics(filtersSearch)[0],
                        value: channelsGoogleAnalytics(filtersSearch)[0],
                      },
                    ]}
                  />
                </div>
                <div className="search-single__column">
                  <Field
                    id="web"
                    name="web"
                    label={'web'}
                    placeholder={'select a option'}
                    component={DropDown}
                    options={[
                      {
                        label: googleAnalyticsWeb(filtersSearch)[0],
                        value: googleAnalyticsWeb(filtersSearch)[0],
                      },
                      {
                        label: googleAnalyticsWeb(filtersSearch)[1],
                        value: googleAnalyticsWeb(filtersSearch)[1],
                      },
                      {
                        label: googleAnalyticsWeb(filtersSearch)[2],
                        value: googleAnalyticsWeb(filtersSearch)[2],
                      },
                      {
                        label: googleAnalyticsWeb(filtersSearch)[3],
                        value: googleAnalyticsWeb(filtersSearch)[3],
                      },
                      {
                        label: googleAnalyticsWeb(filtersSearch)[4],
                        value: googleAnalyticsWeb(filtersSearch)[4],
                      },
                    ]}
                  />
                </div>
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
              </div>
              <div className="search-single__wrapper-button">
                <Button children={'Seach'}></Button>
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

const mapDispatchToProps = {};

const connectEnhace = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectEnhace, EnhanceSingletForm)(SearchSingle);
