import axios from "axios";
import configurations from "../../assets/configurations";
import authentication from "../authentication/authentication";
const followingUrl = configurations.following_url;
export default {
    getFollowing: () => {
        let token = authentication.getSessionToken();
        return new Promise((resolve, reject) => {
            axios
                .get(followingUrl, {
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
