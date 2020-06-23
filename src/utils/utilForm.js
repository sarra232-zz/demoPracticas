/*jshint esversion: 6 */

const getIdentifiers = (identifiers) => {
  const id = Object.values(identifiers).map((x) => ({
    scope: x.scope,
    type: x.type,
    date: x.lastDate,
  }));
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
    value: '1 day',
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

const formatDate = (value) => {
  if (value === '1 day') return 1;
  if (value === '7 days') return 7;
  if (value === '15 days') return 15;
  if (value === '30 days') return 30;
  return 1;
};

const validateDataForTypeIdentifier = (values) => {
  const {typeIndentifiers, time} = values;
  console.log('Prueba desde el cielo:', values);
  const typeIdentifier = typeIndentifiers.split(',');

  var d = new Date();
  d.setDate(d.getDate() - formatDate(time));
  var lastDate =
    d.getFullYear() +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + d.getDate()).slice(-2);
  console.log('Desde el cielo 2:', lastDate);
  if (
    typeIdentifier[1] === typeIdentifier[1] &&
    typeIdentifier[2] >= lastDate
  ) {
    return true;
  }
  return false;
};

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
  const validatetime = validateDataForTypeIdentifier(values);
  const typeIdentifier = typeIndentifiers.split(',');
  console.log('Prueba desde la tierra', validatetime);
  return {
    range: {
      days: formatDate(time),
    },
    identifier: {
      scope: typeIdentifier[0],
      type: typeIdentifier[1],
      value: identifier,
    },
    filters: {
      portal: [appsflyer.map((i) => i.value)],
      platform: [platform.map((i) => i.value)],
      eventCategory: [web.map((i) => i.value)],
      eventType: [googleanalytics.map((i) => i.value)],
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
