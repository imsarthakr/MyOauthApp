import axios from "axios";
import configurations from "../../assets/configurations";
const accessTokenUrl = configurations.cors_url + configurations.access_token_url;
export default {
  getAccessToken: (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(accessTokenUrl, data, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((result) => {
          if (result.data && result.data.error) reject(result.data.error);
          resolve(result.data.access_token);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
