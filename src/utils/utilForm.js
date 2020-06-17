/*jshint esversion: 6 */
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
    value: '1 day',
  },
  {
    time: 'time',
    value: '7 day',
  },
  {
    time: 'time',
    value: '15 days',
  },
  {
    time: 'time',
    value: '1 mount',
  },
  {
    time: 'time',
    value: '3 mounts',
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
    typeIndentifiers: typeIndentifiers,
    identifier: identifier,
    platform: platform,
    googleanalytics: googleanalytics,
    appsflyer: appsflyer,
    web: web,
    time: time,
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

export {
  platform,
  channelsGoogleAnalytics,
  googleAnalyticsWeb,
  channelsAppsFlyer,
  calendar,
  utilFormSingle,
  utilFormGroup,
};
