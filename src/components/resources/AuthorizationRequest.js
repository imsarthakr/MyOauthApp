import axios from "axios";
import configurations from "../../assets/configurations";
const accessUrl = configurations.access_token_url;
const corsUrl = configurations.cors_url;
export default {
  getAccessToken: (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${corsUrl}${accessUrl}`, data, {
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
