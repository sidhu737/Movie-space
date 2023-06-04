import { apiEndpoint } from "./constants";

const fetchUtil = (() => {
  const request = (url, additionalurl) => {
    const finalURL = `${apiEndpoint.url}${url}?${additionalurl}${apiEndpoint.apiKey}`;
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
    get: (url, additionalurl = "") => {
      return request(url, additionalurl);
    },
  };
})();
export default fetchUtil;
