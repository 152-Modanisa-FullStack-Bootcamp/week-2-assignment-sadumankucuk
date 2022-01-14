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
import VideoDetailCard from "@/components/VideoDetailCard";
import {mapGetters} from "vuex";

export default {
  name: "FavoritePage",
  components: {VideoDetailCard},
  computed: {
    // map `this.favoriteVideos` to `this.$store.getters.getFavoriteVideos`
    ...mapGetters({favoriteVideos : "getFavoriteVideos"})
  }
}
</script>

<style scoped>
.video-card-container {
  margin-top: 40px;
}
</style>