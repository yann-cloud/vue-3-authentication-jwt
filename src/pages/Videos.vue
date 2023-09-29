<template>
<div>
    <span
        v-show="loading"
        class="spinner-border spinner-border-sm"
    ></span>
  <Video v-if="!loading" :videoList="videos"/>
</div>
</template>

<script>
import Video from "@/components/Video.vue"
export default {
  components: {
    Video
  },
    head: {
        title: "CodFlix list of videos"
    },
    data() {
      return {
        videos: [],
        loading: false,
      }
    },
    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    video(){
        return this.$store.state.videos.video;
    },
    },
    created() {
      this.videos = this.video;
        if (this.loggedIn) {
        this.getMoovies();
        console.log("store videos", this.$store.state.videos.video)
        console.log("store user", this.$store.state.auth.user)
        }else{
            this.$router.push("/login");
        }
    },
    mounted(){
        this.videos = this.video;
    },
    methods:{
        async getMoovies(){
            this.loading = true;
            this.$store.dispatch("videos/all").then(
            () => {
                this.loading = false;
                const videos = JSON.parse(localStorage.getItem('videos'));
                // this.videos.push(videos);
                console.log("ici", videos);
                // console.log("videos", this.videos)
            },
            (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            }
        );
        },
    },
}
</script>