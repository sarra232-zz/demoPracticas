/*jshint esversion: 6 */
import axios from 'axios';

export default {
  getfinger: {
    getFinger: ({key, payload}) =>
      axios
        .post(
          'https://qxfbha764l.execute-api.us-east-1.amazonaws.com/v01/getfinger',
          payload,
          {
            headers: {
              'x-api-key': key,
            },
          }
        )
        .then((res) => res.data),
  },
  getgroup: {
    getGroup: ({key, payload}) =>
      axios
        .post(
          'https://qxfbha764l.execute-api.us-east-1.amazonaws.com/v01/getcustomers',
          payload,
          {
            headers: {
              'x-api-key': key,
            },
          }
        )
        .then((res) => res.data),
  },
};
