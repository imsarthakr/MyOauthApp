<template>
  <div id="callback">
    <img alt="loading..." src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
  </div>
</template>

<script>
import authentication from "./authentication/authentication";
export default {
  name: "callbackComponent",
  data() {
    return {};
  },
  async created() {
    await this.getAccessCallback();
  },
  methods: {
    async getAccessCallback() {
      try {
        let code = this.$route.query.code;
        await authentication.getAccessToken(code);
        this.$router.push("/repositories");
      } catch (error) {
        alert(`OOPS! Something is wrong.`);
        this.$router.push("/");
        authentication.logout();
        throw TypeError(new Error(error));
      }
    },
  },
};
</script>

<style>
</style>
