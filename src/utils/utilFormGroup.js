/*jshint esversion: 6 */
import {validation} from '../components/commons/formValidations/formValidationsGroup';

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
    value: '1 día',
  },
  {
    time: 'time',
    value: '7 días',
  },
  {
    time: 'time',
    value: '15 días',
  },
  {
    time: 'time',
    value: '30 días',
  },
];

const formatDate = (value) => {
  if (value === '1 día') return 1;
  if (value === '7 días') return 7;
  if (value === '15 días') return 15;
  if (value === '30 días') return 30;
  return 1;
};

const getDropDownOptionSelected = (infoSelected) => {
  if (infoSelected) return infoSelected.map((i) => Object.values(i)[1].key);
  return [];
};

const validateDateTypeId = (lastDate, values) => {
  const {typeIndentifiers} = values;
  const typeIdentifier = typeIndentifiers.split(',');
  if (typeIdentifier[2] >= lastDate) {
    return true;
  }
  return false;
};

const validateDropDownsDate = (lastDate, values) => {
  const {platform, portalGroup, portalGroup1, platform1} = values;
  if (platform && typeof platform === 'object') {
    return (
      platform.map((i) => Object.values(i)[1].value.lastDate)[0] <= lastDate
    );
  }
  if (portalGroup && typeof portalGroup === 'object') {
    return (
      portalGroup.map((i) => Object.values(i)[1].value.lastDate)[0] <= lastDate
    );
  }
  if (platform1 && typeof platform1 === 'object') {
    return (
      platform1.map((i) => Object.values(i)[1].value.lastDate)[0] <= lastDate
    );
  }
  if (portalGroup1 && typeof portalGroup1 === 'object') {
    return (
      portalGroup1.map((i) => Object.values(i)[1].value.lastDate)[0] <= lastDate
    );
  }

  return false;
};

const getLastDate = (time) => {
  var today = new Date();
  today.setDate(today.getDate() - formatDate(time));
  var lastDate =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2);
  return lastDate;
};

const dataTableFinal = (array) => {
  return array.map((x) => x)[0];
};

const utilFormGroup = (values, props) => {
  const {
    secondaryIdentifiers,
    deviceIdentifiers,
    bluekaiIdentifiers,
    identifier,
    platform,
    portalGroup,
    time,

    secondaryIdentifiers1,
    deviceIdentifiers1,
    bluekaiIdentifiers1,
    identifier1,
    platform1,
    portalGroup1,
    time1,
  } = values;

  const secondaryIndentifier =
    secondaryIdentifiers && secondaryIdentifiers.split(',');
  const deviceIndentifier = deviceIdentifiers && deviceIdentifiers.split(',');
  const bluekaiIndentifier =
    bluekaiIdentifiers && bluekaiIdentifiers.split(',');

  const secondaryIndentifier1 =
    secondaryIdentifiers1 && secondaryIdentifiers1.split(',');
  const deviceIndentifier1 =
    deviceIdentifiers1 && deviceIdentifiers1.split(',');
  const bluekaiIndentifier1 =
    bluekaiIdentifiers1 && bluekaiIdentifiers1.split(',');

  return {
    and: [
      {
        identifiers: {
          secundario: {
            type: secondaryIndentifier ? secondaryIndentifier[1] : '',
            value: secondaryIndentifier ? identifier : '',
          },
          dispositivo: {
            type: deviceIdentifiers ? deviceIndentifier[1] : '',
            value: deviceIdentifiers ? identifier : '',
          },
          bluekai: {
            type: bluekaiIdentifiers ? bluekaiIndentifier[1] : '',
            value: bluekaiIdentifiers ? identifier : '',
          },
        },
        filters: {
          portal: getDropDownOptionSelected(portalGroup),
          platform: getDropDownOptionSelected(platform),
        },
        range: {
          days: formatDate(time),
        },
      },
      {
        identifiers: {
          secundario: {
            type: secondaryIndentifier1 ? secondaryIndentifier1[1] : '',
            value: secondaryIndentifier1 ? identifier1 : '',
          },
          dispositivo: {
            type: deviceIdentifiers1 ? deviceIndentifier1[1] : '',
            value: deviceIdentifiers1 ? identifier1 : '',
          },
          bluekai: {
            type: bluekaiIdentifiers1 ? bluekaiIndentifier1[1] : '',
            value: bluekaiIdentifiers1 ? identifier1 : '',
          },
        },
        filters: {
          portal: getDropDownOptionSelected(portalGroup1),
          platform: getDropDownOptionSelected(platform1),
        },
        range: {
          days: formatDate(time1),
        },
      },
    ],
  };
};

export const apiKey = 'nYzZgG77QT98NPRcBu5VV9wQoQzC7Q9433qdxBBc';

export {
  getIdentifiers,
  calendar,
  dataTableFinal,
  utilFormGroup,
  getDropDownValue,
  getChilds,
  getLastDate,
  validateDateTypeId,
  validateDropDownsDate,
};
