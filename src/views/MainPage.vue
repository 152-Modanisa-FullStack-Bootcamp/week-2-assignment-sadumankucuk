<template>
  <div>
    <div class="favorite-button">
      <button @click="navigateToFavoritesPage">Favorites</button>
    </div>
    <div class="video-card-container">
      <VideoCard
          v-for="video in videos"
          :key="video.id"
          :video="video"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VideoCard from "@/components/VideoCard";


export default {
  name: "MainPage",
  components: {
    VideoCard
  },
  data() {
    return {
      videos: []
    }
  },
  methods: {
    //Routing using the params
    navigateToFavoritesPage() {
      this.$router.push("/favorites/bootcamp");
    }
  },
  //Vue calls the mounted() hook when your component is added to the DOM
  //HTTP request to fetch data
  async mounted() {
    //Accessed from base api url env variable
    this.videos = await axios.get(`${process.env.VUE_APP_BASE_API_URL}/videos`).then(res => res.data);
  }
}
</script>

<style scoped>
.video-card-container {
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  gap: 10px;
}

.favorite-button {
  display: flex;
  width: 1100px;
  justify-content: flex-end;
  margin: 20px 0;
}
</style>