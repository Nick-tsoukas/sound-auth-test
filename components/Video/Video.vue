<template>
  <div class="photo_main_container">
    <h2 class="title">Video Gallery</h2>
    <div class="image_container">
      <video class="image shadow" controls alt=""><source src="~/assets/videos/vid1.mp4" type="video/mp4"></video>
    </div>
    <div class="slider_container">
      <video controls class="slider_image shadow" v-for="(video, index) in videos"
        :key="index" alt="Live Streaming Videos"><source :src="require(`~/assets/videos/${video}`)"></video>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        videos: [
          'vid1.mp4',
          'vid2.mp4',
          'vid3.mp4',
          'vid1.mp4',
          'vid2.mp4',
          'vid3.mp4',
        ]
      }
    }
  }

</script>

<style scoped>
  .title {
    margin-left: 1.8em;
  }

  .slider_image {
    width: 200px;
    margin: 2em;
    border-radius: 5%;
    border: 3px solid #FF6A00;
  }

  .slider_container {
    overflow-y: scroll;
    width: auto;
    display: flex;
  }

  .image_container {
    text-align: center;
  }

  .image {
    max-width: 80vw;
    border-radius: 5%;
    border: 3px solid #FF6A00;
  }

</style>
