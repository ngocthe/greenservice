<template>
  <div class="video-container">
    <video autoplay loop muted playsinline>
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    videoSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.video-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

video {
  width: 100%;
  height: auto;
  display: block;
}
</style>
