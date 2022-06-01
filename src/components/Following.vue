<template>
  <div id="followers">
    <div>
      <div id="followersHead">Your following</div>
      <br />

      <table id="followersTable">
        <tr class="followersTableRow" v-for="(value, key, i) in following" :key="i">
          <td>{{ value.login }}</td>
          <td>{{ value.html_url }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import repository from "../components/resources/FollowingRequest";
export default {
  name: "followingComponent",
  data() {
    return {
      following: {},
    };
  },
  async created() {
    console.log(process.env.VUE_APP_ROOT_API);
    await this.getFollowing();
  },
  methods: {
    async getFollowing() {
      try {
        this.following = await repository.getFollowing();
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
#followers {
  margin: 5em 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: 'Lato', sans-serif;
}

#followersHead {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  color: rgba(50, 50, 50, 0.6);
  letter-spacing: 1px;
  word-spacing: 2px;
}


#followersTable {
  border: 1px solid rgb(50, 50, 50);
  /* border-radius: 10px; */
}

.followersTableRow {
  text-align: justify;
  background-color: white;
  color: black;
  border: 1px solid rgb(50, 50, 50);
  border-radius: 10px;

}

.followersTableRow:nth-child(even) {
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
