import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {reduxForm, Field} from 'redux-form';
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
  utilFormGroup,
} from '../../utils/utilForm';
import './searchGroup.scss';

class SearchGroup extends React.Component {
  render() {
    const {filtersSearch, handleSubmit} = this.props;
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
                    id="platformGroup"
                    name="platformGroup"
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

                <div className="search-group__column">
                  <Field
                    id="appsflyerGroup"
                    name="appsflyerGroup"
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
                <div className="search-group__column">
                  <Field
                    id="googleanalyticsGroup"
                    name="googleanalyticsGroup"
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
                <div className="search-group__column">
                  <Field
                    id="webGroup"
                    name="webGroup"
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
                <div className="search-group__column">
                  <Field
                    id="timeGroup"
                    name="timeGroup"
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
              <div className="search-group__wrapper-button">
                <Button children={'Seach'}></Button>
              </div>
            </div>
          </form>
        </article>
        <article>
          <table className="search-group__table">
            <tr className="search-group__table-header">
              <th className="search-group__table-column">Identifier</th>
              <th className="search-group__table-column">Devise</th>
              <th className="search-group__table-column">System</th>
              <th className="search-group__table-column">Channel</th>
              <th className="search-group__table-column">View</th>
              <th className="search-group__table-column">More</th>
            </tr>
          </table>
        </article>
      </div>
    );
  }
}

const EnhanceSingletForm = reduxForm({
  form: 'searchGroupForm',
  validate,
  onSubmit: (values, props) => {
    const request = utilFormGroup(values, props);
  },
});

const mapStateToProps = (state) => ({
  filtersSearch: state.filterSearchs,
});

const mapDispatchToProps = {};

const connectEnhace = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectEnhace, EnhanceSingletForm)(SearchGroup);
