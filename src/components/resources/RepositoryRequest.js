import axios from "axios";
import configurations from "../../assets/configurations";
import authentication from "../authentication/authentication";
const repoUrl = configurations.repo_url;
export default {
  getRepositories: (visibility, sort) => {
    let token = authentication.getSessionToken();
    return new Promise((resolve, reject) => {
      axios
        .get(repoUrl, {
          headers: {
            Authorization: `token ${token}`,
          },
          params: {
            visibility,
            sort,
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
