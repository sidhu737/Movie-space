import { apiEndpoint } from "./constants";

const fetchUtil = (() => {
  const request = (url) => {
    const finalURL = `${apiEndpoint.url}${url}?${apiEndpoint.apiKey}`;
    console.log(finalURL);
    return new Promise((resolve, reject) => {
      fetch(finalURL)
        .then((response) => {
          return response.json();
        })
        .then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  };
  return {
    post: (url) => {
      return request(url);
    },
    get: (url, dataName = {}) => {
      return request(url, dataName);
    },
  };
})();
export default fetchUtil;
