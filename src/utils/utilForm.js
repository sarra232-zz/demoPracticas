/*jshint esversion: 6 */

const getIdentifiers = (identifiers) => {
  const id = Object.values(identifiers).map((x) => ({
    scope: x.scope,
    type: x.type,
    date: x.lastDate,
  }));
  return id;
};

const getDropDownValue = (data) => {
  let result = [];
  if (data) {
    result.length = Object.keys(data).length;
    for (let i = 0; i < Object.keys(data).length; i++) {
      const key = Object.keys(data)[i];
      const values = data[Object.values(Object.keys(data))[i]];
      result[i] = {key, values};
    }
    return result;
  }
  return null;
};

const getChilds = (data, value) => {
  if (data && value) {
    const valueKey = Object.values(value)[0];
    const validateHasChild = data.filter((x) => x.key === valueKey);
    if (validateHasChild && validateHasChild[0].values.hasChild)
      return validateHasChild[0].values.child;
    return null;
  }
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

const validateDateForTypeIdentifier = (values) => {
  const {
    typeIndentifiers,
    platform,
    appsflyer,
    googleanalytics,
    web,
    time,
  } = values;
  const typeIdentifier = typeIndentifiers.split(',');
  var today = new Date();
  today.setDate(today.getDate() - formatDate(time));
  var lastDate =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2);
  if (typeIdentifier[2] >= lastDate) {
    return true;
  }
  return false;
};
const dataTable = (data) => {
  const respData = Object.values(data).map((x) => x);
  const DataFinal = respData.filter((x, index) => index !== 4);
  return [DataFinal];
};

const dataTableFinal = (array) => {
  return array.map((x) => x)[0];
};
const utilFormSingle = (values) => {
  const {
    typeIndentifiers,
    identifier,
    platform,
    appsflyer,
    googleanalytics,
    web,
    time,
  } = values;
  const typeIdentifier = typeIndentifiers.split(',');
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

const utilFormGroup = (values) => {
  const {platform, appsflyer, googleanalytics, web, time} = values;
  return {
    range: {
      days: formatDate(time),
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
  calendar,
  validateDateForTypeIdentifier,
  dataTable,
  dataTableFinal,
  utilFormSingle,
  utilFormGroup,
  getDropDownValue,
  getChilds,
};
