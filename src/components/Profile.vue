<template>
  <div id="profile">
    <div id="profileName">Hi {{ profile.name }}! Welcome to your Github Profile</div>
    <div id="profileDetails">
      <!-- <table id="profileTable">
        <tr class="profileTableRow" v-for="(key, value, i) in profile" :key="i">
          <td>{{ value }}</td>
          <td>{{ key }}</td>
        </tr >
      </table> -->

      <table id="profileTable">
        <tr class="profileTableRow">
          <td>Username</td>
          <td>{{ profile.login }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Unique Id</td>
          <td>{{ profile.id }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Email</td>
          <td>{{ profile.email }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Bio</td>
          <td>{{ profile.bio }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Twitter</td>
          <td>{{ profile.twitter_username }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>LinkedIn</td>
          <td>{{ profile.blog }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Location</td>
          <td>{{ profile.location }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Number of Public Repositories</td>
          <td>{{ profile.public_repos }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Number of Followers</td>
          <td>{{ profile.followers }}</td>
        </tr>
        <tr class="profileTableRow">
          <td>Number of Following</td>
          <td>{{ profile.following }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import profile from "../components/resources/ProfileRequest";

export default {
  name: "profileComponent",
  data() {
    return {
      profile: {},
    };
  },
  async created() {
    await this.getProfile();
  },
  methods: {
    async getProfile() {
      try {
        this.profile = await profile.getProfile();
      } catch (error) {
        alert(`OOPS! Something went wrong`);
        this.$router.push("/");
        throw TypeError(new Error(error));
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#profile {
  margin: 5em 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: 'Lato', sans-serif;
}

#profileName {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  color: rgba(50, 50, 50, 0.6);
  letter-spacing: 1px;
  word-spacing: 2px;
}

#profileDetails {
  margin: 2em 0;
}

#profileTable {
  border: 1px solid rgb(50, 50, 50);
  /* border-radius: 10px; */
}

.profileTableRow {
  text-align: justify;
  background-color: white;
  color: black;
  border: 1px solid rgb(50, 50, 50);
  border-radius: 10px;

}

.profileTableRow:nth-child(even) {
  background-color: rgba(50, 50, 50, 0.5);
  color: black;
  border: 1px solid rgb(50, 50, 50);
  border-radius: 10px;
}

td {
  padding: 10px 10px;
  font-size: 16px;
  border: 1px solid rgb(50, 50, 50);
}
</style>
