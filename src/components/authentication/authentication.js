import configurations from "../../assets/configurations";
import UserAuthService from "../resources/AuthorizationRequest";
const loginUrl = configurations.authorization_url;
const client_id = configurations.client_id;
const client_secret = process.env.VUE_APP_CLIENT_SECRET;
const scope = configurations.scope;
export default {
  login: () => {
    window.location.replace(
      `${loginUrl}?client_id=${client_id}&scope=${scope}`
    );
  },
  logout: () => {
    sessionStorage.clear();
  },
  isLoggedIn: () => {
    return sessionStorage.getItem("token") ? true : false;
  },
  getSessionToken: () => {
    return sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null;
  },
  getAccessToken: async (code) => {
    try {
      let data = {
        client_id,
        client_secret,
        code,
      };
      let response = await UserAuthService.getAccessToken(data);
      sessionStorage.setItem("token", response);
      return response;
    } catch (err) {
      throw TypeError(new Error(err));
    }
  },
};
