<template>
  <div class="photo_main_container">
      <h2 class="title">Photo Gallery</h2>
    <div class="image_container">
      <img class="image shadow" src="~/assets/images/band_two.jpeg" alt="">
    </div>
    <div class="slider_container">
      <img class="slider_image shadow" v-for="(photo, index) in photos" :src="require(`~/assets/images/${photo}`)" :key="index"
        alt="band picture">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        photos: [
          'band_four.jpeg',
          'band_four.jpeg',
          'band_four.jpeg',
          'band_four.jpeg',
          'band_four.jpeg',
          'band_four.jpeg',
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

  .photo_main_container {}

  .image {
    max-width: 80vw;
    border-radius: 5%;
    border: 3px solid #FF6A00;
  }

</style>
