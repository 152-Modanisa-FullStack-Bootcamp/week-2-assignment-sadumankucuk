<template>
  <div class="video-card-container">
    <VideoDetailCard
        v-for="video in favoriteVideos"
        :key="video.id"
        :video="video"
    />
  </div>
</template>

<script>
import axios from "axios";
import VideoDetailCard from "@/components/VideoDetailCard";

export default {
  name: "FavoritePage",
  components: {VideoDetailCard},
  data() {
    return {
      favoriteVideos: []
    }
  },
  //Vue calls the mounted() hook when your component is added to the DOM
  //HTTP request to fetch data
  async mounted() {
    //Accessed from base api url env variable
    //Favorite videos filtered from all data
    this.favoriteVideos = await axios.get(`${process.env.VUE_APP_BASE_API_URL}/videos`)
        .then(res => res.data.filter(video => video.favorite));
  }
}
</script>

<style scoped>
.video-card-container {
  margin-top: 40px;
}
</style>