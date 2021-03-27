<template>
  <div>
    <section>
      <img style="width: 100%;" src="~/assets/logos/light_logo.jpg" alt="">
    </section>
    <section>
      <Video />
    </section>
    <section>
      <PhotoSlider />
    </section>
    <section class="cta gallery_cta">
      <div class="cta_image_container">
        <img class="cta_image" src="~/assets/images/band_four.jpeg" alt="Band playing music">
        <div class="overlay"></div>
      </div>
      <Cta />
    </section>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>

.gallery_cta {
    margin-bottom: 2em;
}
    .overlay {
    position: absolute;
    top: 0;
    background: #ff6a0077;
    z-index: 999999;
    width: 100%;
    height: 100%;
  }

  .cta_image_container {
    text-align: center;
    margin-top: 2em;
    position: relative;
  }

  .cta_image {
    width: 100vw;
    margin-right: auto;
    margin-left: auto;
  }
</style>
