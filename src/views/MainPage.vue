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
import VideoCard from "@/components/VideoCard";
import {mapState, mapActions} from 'vuex';

export default {
  name: "MainPage",
  components: {
    VideoCard
  },
  methods: {
    //Routing using the params
    navigateToFavoritesPage() {
      this.$router.push("/favorites/bootcamp");
    },
    // map `this.fetchVideos()` to `this.$store.dispatch('fetchVideos')`
    ...mapActions(["fetchVideos"]),
  },
  computed: {
    // map this.count to store.state.count
    ...mapState(["videos"])
  },
  //Called synchronously after the instance is created
  created() {
    //Actions are triggered
    //this.$store.dispatch('fetchVideos');
    this.fetchVideos();
  },
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