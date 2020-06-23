/*jshint esversion: 6 */

const getIdentifiers = (identifiers) => {
  const id = Object.values(identifiers).map((x) => x.type);
  return id;
};

const platform = (filters) => {
  const platform = Object.keys(filters.filters).map((type) => type);

  return platform;
};

const channelsGoogleAnalytics = (filters) => {
  if (filters.filters.GOOGLEANALYTICS.hasChild === true) {
    const channelsGoogleAnalytics = Object.keys(
      filters.filters.GOOGLEANALYTICS.child
    ).map((type) => type);
    return channelsGoogleAnalytics;
  }
};
const googleAnalyticsWeb = (filters) => {
  if (filters.filters.GOOGLEANALYTICS.child.WEB.hasChild === true) {
    const googleAnalyticsWeb = Object.keys(
      filters.filters.GOOGLEANALYTICS.child.WEB.child
    ).map((type) => type);
    return googleAnalyticsWeb;
  }
};
const channelsAppsFlyer = (filters) => {
  if (filters.filters.APPSFLYER.hasChild === true) {
    const channelsAppsFlyer = Object.keys(filters.filters.APPSFLYER.child).map(
      (type) => type
    );
    return channelsAppsFlyer;
  }
  return channelsAppsFlyer;
};

const calendar = [
  {
    time: 'time',
    value: '1 days',
  },
  {
    time: 'time',
    value: '7 days',
  },
  {
    time: 'time',
    value: '15 days',
  },
  {
    time: 'time',
    value: '30 days',
  },
];

const utilFormSingle = (values, props) => {
  const {
    typeIndentifiers,
    identifier,
    platform,
    appsflyer,
    googleanalytics,
    web,
    time,
  } = values;
  return {
    range: {
      days: '7',
    },
    identifier: {
      scope: 'GLOBAL',
      type: 'LLAVECLIENTE',
      value: '970417100543000',
    },
    filters: {
      portal: [],
      platform: [],
      eventCategory: [],
      eventType: [],
    },
  };
};

const utilFormGroup = (values, props) => {
  const {
    platformGroup,
    appsflyerGroup,
    googleanalyticsGroup,
    webGroup,
    timeGroup,
  } = values;
  return {
    platform: platformGroup,
    googleanalytics: googleanalyticsGroup,
    appsflyer: appsflyerGroup,
    web: webGroup,
    time: timeGroup,
  };
};

export const apiKey = 'nYzZgG77QT98NPRcBu5VV9wQoQzC7Q9433qdxBBc';

// const answerSingerForm = ( typeIndentifiers,
//   identifier,
//   platform,
//   googleanalytics,
//   appsflyer,
//   web,
//   time) => {
//     global: typeIndentifiers,
// }

export {
  getIdentifiers,
  platform,
  channelsGoogleAnalytics,
  googleAnalyticsWeb,
  channelsAppsFlyer,
  calendar,
  utilFormSingle,
  utilFormGroup,
};
