<template>
  <div id="home">
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <BaseHeadline class="title" :headlineLevel="'1'" :title="'CodFlix'"></BaseHeadline>
                    <p>
                        <strong>{{content}}</strong>
                    </p>
                </div>
            </div>
            <div class="row btn-container">
                <!-- <div class="col-md-6"><a href="/login" class="btn btn-block bg-red">Connexion</a></div>
                <div class="col-md-6"><a href="/signup" class="btn btn-block bg-blue">Inscription</a></div> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import UserService from "../services/user.service";
// import Headline from "./BaseHeadline.vue";

export default {
  name: "Home",
  // components: {
  //   Headline: Headline
  // },
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
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

<style scoped>
#home .banner {
    min-height: 100vh;
    background-image: url('../assets/img/home-bg.jpg');
}

#home .banner .title {
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 4rem;

    margin-top: 10%;
}
#home .banner .title span {
  color: var(--color-red);
}
#home .banner .title + p {
    color: #fff;
    text-align: center;
    font-weight: 400;
    font-size: 3rem;

    margin-top: 25px;
}

#home .banner .btn-container {
    margin-top: 70px;
    text-align: center;
}

#home .banner .btn-container .btn {
    width: 200px;
    margin: 8px auto;
    color: #fff;
    font-weight: 500;
    padding: 10px;
}
</style>  
