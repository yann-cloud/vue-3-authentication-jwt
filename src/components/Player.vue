<template>
    <div class="player">
        <video controls muted autoPlay crossOrigin="anonymous">
            <source :src="`http://localhost:5000/videos/video/${vidName}`" type="video/mp4">
            <track label="English" kind="captions" srcLang="en" :src="`http://localhost:5000/videos/video/${vidName}/caption`" default>
        </video>
    </div>
    <Rooms />
</template>

<script>
import Rooms from '../pages/Rooms.vue';
export default {
components: {
    Rooms
},
 data() {
      return {
        vidName: ''
      }
    },
mounted(){
    this.vidName = this.$route.params.id
}
}
</script>
<style scoped>
.player{
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 2em;
}
</style>