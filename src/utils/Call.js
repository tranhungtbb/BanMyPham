import axios from 'axios';

import * as Config from './../constants/Config';

export default function Call(endpoint, method = 'GET', headers) {
  return axios({
      method: method,
      url: `${Config.API_URL}${endpoint}`,
      headers: headers
  }).then(res => res.data)
  .catch ( err => {
      console.log(err);
  });
};

    