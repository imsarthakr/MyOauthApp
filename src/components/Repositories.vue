<template>
  <div id="repo">
    <div id="repoHead">Your Repositories</div>
    <br />
    <div>
      <div class="data">Select the type of repository you want to view</div>
      <br />
      <select v-model="selectedValue" name="Selection" @change="onChangeValue()" class="form-control"
        id="repoTypeChange">
        <option value="all">All</option>
        <option value="private">Private</option>
        <option value="public">Public</option>
      </select>

      <div v-for="(value, key, i) in repositories" :key="i">
        <div id="repoHolder">
          <div class="repoDetails" @click="repoDetailsClick(value.html_url)">
            <div>{{ value.name }}</div>
            <div>{{ value.html_url }}</div>
          </div>

        </div>
      </div>

      <!-- <table id="profileTable" v-for="(value, key, i) in repoData" :key="i">
        <tr class="profileTableRow">
          <td>{{ value.name }}</td>
          <td>{{ value.html_url }}</td>
        </tr>
      </table> -->
    </div>
  </div>
</template>

<script>
import repository from "../components/resources/RepositoryRequest";
export default {
  name: "repository-component",
  data() {
    return {
      selectedValue: "all",
      selectedSorting: "updated",
      repositories: {},
    };
  },
  async created() {
    await this.getRepositories(this.selectedValue, this.selectedSorting);
  },
  methods: {
    async onChangeValue() {
      await this.getRepositories(this.selectedValue, this.selectedSorting);
    },
    async getRepositories(visibility, sorting) {
      try {
        this.repositories = await repository.getRepositories(visibility, sorting);
      } catch (error) {
        alert(`OOPS! ,Something went wrong`);
        this.$router.push("/");
        throw TypeError(new Error(error));
      }
    },
    repoDetailsClick(url)
    {
      window.location.replace(url);
    }
  },
};
</script>

<style>
#repo {
  margin: 5em 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: 'Lato', sans-serif;
}

#repoHead {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  color: rgba(50, 50, 50, 0.6);
  letter-spacing: 1px;
  word-spacing: 2px;
}

.data {
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: rgba(50, 50, 50, 0.9);
  letter-spacing: 1px;
  word-spacing: 2px;
}

#repoTypeChange {
  border: none;
  border-bottom: 2px solid rgba(50, 50, 50, 0.6);
  padding: 10px 20px;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  word-spacing: 2px;
  margin: 2px 0;
  margin-bottom: 10px;
}

#repoHolder {
  display: flex;
  justify-content: space-evenly;

}

.repoDetails {
  background-color: rgb(50, 50, 50, 0.1);
  border: 1px solid rgb(50, 50, 50, 0.4);
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  height: 30%;
  width: 120%;
  color: rgba(50, 50, 50, 0.9);

}

.repoDetails:hover {
  background-color: rgb(50, 50, 50, 0.2);
  cursor: pointer;
}
</style>