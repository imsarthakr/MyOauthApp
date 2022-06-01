<template>
  <div id="followers">
    <div>
      <div id="followersHead">Your followers</div>
      <br />

      <table id="followersTable">
        <tr class="followersTableRow" v-for="(value, key, i) in followers" :key="i">
          <td>{{ value.login }}</td>
          <td>{{ value.html_url }}</td>
        </tr>
      </table>
      <!-- <div v-for="(value, key, i) in followers" :key="i">
        <div>
          <div>
            <div>{{ value.login }}</div>
            <div>{{ value.html_url }}</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import repository from "../components/resources/FollowersRequest";
export default {
  name: "followersComponent",
  data() {
    return {
      followers: {},
    };
  },
  async created() {
    console.log(process.env.VUE_APP_ROOT_API);
    await this.getFollowers();
  },
  methods: {
    async getFollowers() {
      try {
        this.followers = await repository.getFollowers();
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

.followersTableRow:hover {
  background-color: rgba(50, 50, 50, 0.2);
}

td {
  padding: 10px 10px;
  font-size: 16px;
  border: 1px solid rgb(50, 50, 50);

}
</style>
