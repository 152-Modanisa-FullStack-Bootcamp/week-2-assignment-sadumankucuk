<template>
  <div class="card-container">
    <img
        :alt="video.title"
        :src="hover ? video.hoverImage : video.coverImage"
        @click="navigateToWatchPage(video.id)"
        @mouseleave="hover = false"
        @mouseover="hover = true"
    >
    <div class="video-detail">
      <img :alt="video.ownerName" :src="video.ownerImage">
      <div>
        <div class="video-title">{{ video.title }}</div>
        <div>
          <div class="video-subTitle">{{ video.ownerName }}</div>
          <div class="video-info-detail video-subTitle">
            <div>{{ video.viewCount }}</div>
            <div>• {{ video.publishDateInMonth }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    video: Object
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    //Routing using the router name property (query)
    navigateToWatchPage(videoId) {
      this.$router.push({name: "watch", query: {id: videoId}});
    }
  }
}
</script>

<style scoped>
.card-container {
  width: 360px;
  height: 300px;
  cursor: pointer;
}

.card-container > img {
  width: 360px;
  height: 200px;
}

.video-detail {
  display: flex;
  gap: 20px;
  padding: 5px;
}

.video-detail > img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.video-info-detail {
  display: flex;
  gap: 10px;
}

.video-title {
  font-weight: 550;
}

.video-subTitle {
  color: #606060;
  font-weight: 510;
}
</style>