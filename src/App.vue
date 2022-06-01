<template>
  <div id="app" style="overflow:hidden">
    <div>
      <div id="nav">
        <img alt="Github logo" id="imgLogo" height="30px" src="./assets/logo.png" />
        <router-link to="/" class="navLink">Home</router-link>
        <router-link to="/repositories" class="navLink">Repositories</router-link>
        <router-link to="/profile" class="navLink">Profile</router-link>
        <router-link to="/followers" class="navLink">Followers</router-link>
        <router-link to="/following" class="navLink">Following</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import authentication from "./components/authentication/authentication";
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    this.isLoggedIn = authentication.isLoggedIn();
  },
  methods: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#app {
  text-align: center;
  overflow-y: hidden;
  margin: 0%;
  padding: 0%;
}

::-webkit-scrollbar {
  display: none;
  overflow-y: hidden;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2em;
  font-family: 'Lato', sans-serif;
  font-size: 18px;

}

.navLink {
  text-decoration: none;
  color: black;
  letter-spacing: 1px;
}

.navLink:hover {
  color: rgb(75, 75, 244);
}

#imgLogo {
  border: 1px solid white;
  border-radius: 10px;
}
</style>
