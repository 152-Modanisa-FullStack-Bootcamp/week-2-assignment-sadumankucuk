<template>
  <div class="card-container">
    <div>
      <img
          :alt="video.title"
          :src="hover ? video.hoverImage : video.coverImage"
          class="video-image"
          @mouseleave="hover = false"
          @mouseover="hover = true"
      >
    </div>
    <div class="video-detail">
      <div class="video-title">{{ video.title }}</div>
      <div class="video-info-detail video-subTitle">
        <div>{{ video.viewCount }}</div>
        <div>• {{ video.publishDateInMonth }}</div>
      </div>
      <div class="video-info-detail">
        <img :alt="video.ownerName" :src="video.ownerImage">
        <p class="video-subTitle">{{ video.ownerName }}</p>
      </div>
      <p class="video-description">{{ video.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetailCard",
  data() {
    return {
      hover: false
    }
  },
  props: {
    video: Object
  },
}
</script>

<style scoped>
.card-container {
  width: 1100px;
  height: 200px;
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;
}

.video-image {
  width: 360px;
  height: 200px;
}

.video-detail {
  padding: 10px;
}

.video-title {
  font-size: 1.2em;
  font-weight: 550;
}

.video-info-detail {
  display: flex;
  align-items: center;
  gap: 10px;
}

.video-info-detail > img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.video-subTitle {
  color: #606060;
  font-weight: 510;
  padding: 3px;
}

.video-description {
  color: #344a5e;
}
</style>