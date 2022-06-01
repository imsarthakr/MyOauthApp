import axios from "axios";
import configurations from "../../assets/configurations";
import authentication from "../authentication/authentication";
const followersUrl = configurations.followers_url;
export default {
    getFollowers: () => {
        let token = authentication.getSessionToken();
        return new Promise((resolve, reject) => {
            axios
                .get(followersUrl, {
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
