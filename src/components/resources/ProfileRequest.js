import axios from "axios";
import configurations from "../../assets/configurations";
import authentication from "../authentication/authentication";
const userInfoUrl = configurations.profile_url;
export default {
  getProfile: () => {
    let token = authentication.getSessionToken();
    return new Promise((resolve, reject) => {
      axios
        .get(userInfoUrl, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((result) => {
          if (result.data) resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
