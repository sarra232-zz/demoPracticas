/*jshint esversion: 6 */
import axios from 'axios';

export default {
  getconfig: {
    getConfig: (key) =>
      axios
        .post(
          'https://qxfbha764l.execute-api.us-east-1.amazonaws.com/v01/getconfig',
          {
            headers: {
              'x-api-key': key,
            },
          }
        )
        .then((res) => res.data),
  },
  getfinger: {
    getFinger: (key, payload) =>
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
};
