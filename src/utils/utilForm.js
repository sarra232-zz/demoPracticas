/*jshint esversion: 6 */

const getIdentifiers = identifiers => {
  const id = Object.values (identifiers).map (x => ({
    scope: x.scope,
    type: x.type,
    date: x.lastDate,
  }));
  return id;
};

const platform = filters => {
  const platform = Object.keys (filters.filters).map (type => type);

  return platform;
};

const channelsGoogleAnalytics = filters => {
  if (filters.filters.GOOGLEANALYTICS.hasChild === true) {
    const channelsGoogleAnalytics = Object.keys (
      filters.filters.GOOGLEANALYTICS.child
    ).map (type => type);
    return channelsGoogleAnalytics;
  }
};
const googleAnalyticsWeb = filters => {
  if (filters.filters.GOOGLEANALYTICS.child.WEB.hasChild === true) {
    const googleAnalyticsWeb = Object.keys (
      filters.filters.GOOGLEANALYTICS.child.WEB.child
    ).map (type => type);
    return googleAnalyticsWeb;
  }
};
const googleAnalyticsTypes = filters => {
  if (
    filters.filters.GOOGLEANALYTICS.child.WEB.child.Transacciones.hasChild ===
    true
  ) {
    const googleAnalyticsTypes = Object.keys (
      filters.filters.GOOGLEANALYTICS.child.WEB.child.Transacciones.child
    ).map (type => type);
    return googleAnalyticsTypes;
  }
};
const channelsAppsFlyer = filters => {
  if (filters.filters.APPSFLYER.hasChild === true) {
    const channelsAppsFlyer = Object.keys (
      filters.filters.APPSFLYER.child
    ).map (type => type);
    return channelsAppsFlyer;
  }
  return channelsAppsFlyer;
};
const validateSelect = selected => {
  if (selected[0].value === 'googleanalytics') {
    return 'googleanalytics';
  }
  if (selected[0].value === 'appsflyer') {
    return 'appsflyer';
  }
  if (selected[0].value === 'web') {
    return 'web';
  }
  if (selected[0].value === 'transacciones') {
    return 'transacciones';
  }
  return false;
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

const formatDate = value => {
  if (value === '1 day') return 1;
  if (value === '7 days') return 7;
  if (value === '15 days') return 15;
  if (value === '30 days') return 30;
  return 1;
};

const validateDateForTypeIdentifier = values => {
  const {
    typeIndentifiers,
    platform,
    appsflyer,
    googleanalytics,
    web,
    time,
  } = values;
  const typeIdentifier = typeIndentifiers.split (',');
  var today = new Date ();
  today.setDate (today.getDate () - formatDate (time));
  var lastDate =
    today.getFullYear () +
    '-' +
    ('0' + (today.getMonth () + 1)).slice (-2) +
    '-' +
    ('0' + today.getDate ()).slice (-2);
  if (typeIdentifier[2] >= lastDate) {
    return true;
  }
  return false;
};
const dataTable = data => {
  const respData = Object.values (data).map (x => x);
  const DataFinal = respData.filter ((x, index) => index !== 4);
  return [DataFinal];
};

const dataTableFinal = array => {
  return array.map (x => x)[0];
};
const utilFormSingle = values => {
  const {
    typeIndentifiers,
    identifier,
    platform,
    appsflyer,
    googleanalytics,
    web,
    time,
  } = values;
  const typeIdentifier = typeIndentifiers.split (',');
  return {
    range: {
      days: formatDate (time),
    },
    identifier: {
      scope: typeIdentifier[0],
      type: typeIdentifier[1],
      value: identifier,
    },
    filters: {
      portal: [],
      platform: [],
      eventCategory: [],
      eventType: [],
      // portal: [appsflyer.map((i) => i.value)],
      // platform: [platform.map((i) => i.value)],
      // eventCategory: [web.map((i) => i.value)],
      // eventType: [googleanalytics.map((i) => i.value)],
    },
  };
};

const utilFormGroup = values => {
  const {platform, appsflyer, googleanalytics, web, time} = values;
  return {
    range: {
      days: formatDate (time),
    },
    filters: {
      portal: [],
      platform: [],
      eventCategory: [],
      eventType: [],
      // portal: [appsflyer.map((i) => i.value)],
      // platform: [platform.map((i) => i.value)],
      // eventCategory: [web.map((i) => i.value)],
      // eventType: [googleanalytics.map((i) => i.value)],
    },
  };
};

export const apiKey = 'nYzZgG77QT98NPRcBu5VV9wQoQzC7Q9433qdxBBc';

export {
  getIdentifiers,
  platform,
  channelsGoogleAnalytics,
  googleAnalyticsWeb,
  googleAnalyticsTypes,
  channelsAppsFlyer,
  validateSelect,
  calendar,
  validateDateForTypeIdentifier,
  dataTable,
  dataTableFinal,
  utilFormSingle,
  utilFormGroup,
};
