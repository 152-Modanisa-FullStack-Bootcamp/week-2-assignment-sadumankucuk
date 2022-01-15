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
import { mapGetters, mapActions} from "vuex";


export default {
  name: "FavoritePage",
  components: {VideoDetailCard},
  computed: {
    // map `this.favoriteVideos` to `this.$store.getters.getFavoriteVideos`
    ...mapGetters({favoriteVideos: "getFavoriteVideos"})
  },
  methods: {
    // map `this.fetchVideos()` to `this.$store.dispatch('fetchVideos')`
    ...mapActions(["fetchVideos"])
  },
  created() {
    if(this.favoriteVideos.length === 0) {
      this.fetchVideos()
    }
  }
}
</script>

<style scoped>
.video-card-container {
  margin-top: 40px;
}
</style>