<template>
  <!-- build mobile layout first -->
  <div class="container">
    <!-- mobile layout -->
    <section class="top_mobile_page">
      <div>
        <img class="m_logo" src="~/assets/logos/light_logo.jpg" alt="">
      </div>
      <div class="m_home_text">
        <p>We are a live streaming and video
          editing music studio location in chicago. We can help you with your audio needs and video editing goals.
        </p>
        <p class="italics">Check out our services below</p>
        <div class="dash"></div>
      </div>
    </section>
    <section class="service_card_container">
      <Card title="Live Streaming"
        :body="['Live stream with studio professionals', 'Modern sound equimpent', 'Best prices in Chicago']" />
      <Card title="Live Streaming"
        :body="['Live stream with studio professionals', 'Modern sound equimpent', 'Best prices in Chicago']" />
      <Card title="Live Streaming"
        :body="['Live stream with studio professionals', 'Modern sound equimpent', 'Best prices in Chicago']" />
    </section>
    <section class="photo_slider_container">
      <PhotoSlider />
    </section>
    <section class="cta">
      <div class="cta_image_container">
        <img class="cta_image" src="~/assets/images/band_four.jpeg" alt="Band playing music">
        <div class="overlay"></div>
      </div>
     <Cta />
    </section>
  </div>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
    computed: {

    },
    methods: {
      ...mapMutations({})
    }
  }

</script>

<style>
/* global */
.link_style {
   text-decoration: none;
   color: inherit;
}
/* does not end here */
  .body_cta {
    padding-left: 2em;
  }
  .dash {
    display: inline-block;
    width: 10px;
    height: 3px;
    background-color: #FF6A00;
    margin-right: 1em;
  }

  .list {
    padding-left: 10px;
  }

  .list_style {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .title {
    margin-top: 1em;
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

  .btn {
    background-color: #FF6A00;
    color: white;
    border: none;
    padding: .8em 1.5em;
    border-radius: 5%;
    margin-right: 1em ; 
}

  /* mobile styles */
  .photo_slider_container {
    width: auto;
  }

  .service_card_container {
    width: auto;
    padding: 2em;
  }

  .italics {
    font-style: italic;
  }

  .m_logo {
    height: 140px;
  }

  .dash {
    width: 20px;
    height: 3px;
    background: #FF6A00;
  }

  .m_home_text {
    padding-left: 2em;
    padding-right: 2em;
  }

  .top_mobile_page {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
  }

  h1 {
    font-family: 'Inter', sans-serif;

  }

  .text_center {
    text-align: center;
    margin-bottom: 2em;
  }

  .container {
    width: 100%;
  }

  .red {
    color: red;
  }

  .shadow {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

</style>
