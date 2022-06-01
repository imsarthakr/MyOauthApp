<template>
  <div>
    <div id="mainHome">
      <div></div>
      <div id="home">
        <div style="font-size:16px; color:rgb(75, 75, 244); margin-top: 10px; letter-spacing: 1px;">Meet Github OAuth
        </div>
        <div style="font-size: 50px; margin-top: 20px;  letter-spacing: 1px;">One place for everything you Code.</div>
        <div v-if="!this.isLoggedIn">
          <button type="button" @click="Login()" class="button">Login with One Click</button>
        </div>
        <div v-else>
          <button type="button" @click="Logout()" class="button">Logout</button>
        </div>

      </div>
      <div></div>

    </div>
    <img alt="Vue logo" height="30%" width="100%" src="../assets/homeback.png" />
  </div>
</template>

<script>
import authentication from "./authentication/authentication";

export default {
  name: "home-component",
  data() {
    return {
      isLoggedIn: authentication.isLoggedIn(),
    };
  },
  created() { },
  methods: {
    Login() {
      authentication.login();
    },
    Logout() {
      authentication.logout();
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#mainHome {
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  overflow: hidden;
}

#home {
  /* height: 80%; */
  margin: 4.8em 0%;
  width: 60%;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
}

.button {
  margin-top: 40px;
  padding: 10px 40px;
  font-family: 'Lato', sans-serif;
  color: white;
  font-size: 14px;
  background-color: rgb(75, 75, 244);
  border: 1px solid rgb(75, 75, 244);
  word-spacing: 2px;
  letter-spacing: 1px;
}
</style>
