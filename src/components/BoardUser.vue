<template>
  <div class="container">
    <header class="jumbotron">
      <BaseHeadline :headlineLevel="3" :title="content"></BaseHeadline>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";
// import Headline from "./BaseHeadline.vue";
export default {
  name: "User",
  // components: {
  //   Headline,
  // },
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
