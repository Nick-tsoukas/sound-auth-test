<template>
  <!-- build mobile layout first -->
  <div class="main">
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
        <Cta style="margin-bottom: 30px;" />
      </section>
    </div>
    <!-- end of mobile layout -->

    <!-- ========== desktop view starts here =========== -->
    <section class="desk_view grid_2_col">
      <div>
        <img src="~/assets/images/topHomeImage.svg" alt="band playing music">
      </div>
      <div class="desk_heading_container">
        <h1 class="home_intro_desk_text">
          Live Streaming
          <br style="padding-bottom: 1em;">
          Video Editing and Effects
        </h1>
        <p style="font-size: 24px;">Studio Space Located in Chicago, IL</p>
      </div>
    </section>
    <section class="social_header desk_view_hide">
      <div style="display: grid; grid-template-columns: 1fr 1fr;">
        <div></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 2em; padding-bottom: 150px">
          <nuxt-link to="/booking">
          <button style="width: 250px; height: 60px" class="btn">Book Now</button>
          </nuxt-link>
          <nuxt-link to="/contact">
          <button style="width: 250px; height: 60px" class="btn">Contact Us</button>
          </nuxt-link>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1.5fr 1fr; margin-left: 6em;">
        <div style="display: flex;">
          <div style="display: flex; align-items: center;">
            <img style="max-height: 20px; padding-right: 1em; padding-left: 1em;" src="~/assets/images/twitch.svg"
              alt="">
            <p style="color: white;">Twitch</p>
          </div>
          <div style="display: flex; align-items: center;">
            <img style="max-height: 20px; padding-right: 1em; padding-left: 1em;" src="~/assets/images/twitch.svg"
              alt="">
            <p style="color: white;">Facebook</p>
          </div>
          <div style="display: flex; align-items: center;">
            <img style="max-height: 20px; padding-right: 2em; padding-left: 1em;" src="~/assets/images/twitch.svg"
              alt="">
            <p style="color: white;">Twitter</p>
          </div>
          <div style="display: flex; align-items: center;">
            <img style="max-height: 20px; padding-right: 2em; padding-left: 1em;" src="~/assets/images/twitch.svg"
              alt="">
            <p style="color: white;">Instagram</p>
          </div>
        </div>
        <div>
          <img style="margin-top: -3em;" src="~/assets/images/wave.svg" alt="">
        </div>
      </div>
      <div style="margin-left: 6em; padding-left: 1em; margin-top: -3.3em;">
        <h1 style="color: white;">Live Stream to your favorite Social media Chanels</h1>
      </div>
      <div>
      </div>
    </section>

    <!-- ============ under intro header desktop ========== -->
    <section class="desk_view_hide" style="display: grid; grid-template-columns: 1fr 1fr;">
      <div>
        <img src="~/assets/images/musicImage.jpeg" alt="">
      </div>
      <div style="display: flex; flex-direction: column; padding-left: 2em; justify-content: center; max-width: 450px;">
        <h2>In Studio</h2>
        <h1 style="font-weight: bold;">Video Recording Service For Your Live Music Proformance</h1>
        <div style="display: flex; align-items: center;">
          <nuxt-link to="/gallery">
          <h1>View All Photos</h1>
          </nuxt-link>
          <img style="max-height: 20px; padding-left: 2em;" src="~/assets/images/twitch.svg">
        </div>
      </div>
    </section>
    <section class="desk_view_hide" style="display: grid; grid-template-columns: 1fr 1fr; padding-bottom: 3em;">
      <div style="padding-left: 3em; margin-top: 3em;">
        <h1>Our Services</h1>
        <div>
          <p style="max-width: 400px; margin-top: 2em; font-size: 1.5em;">You may be interested in what we can offer
            you. More services you can find below. We do everything at a high level.</p>
        </div>
      </div>
      <div>
        <img src="~/assets/images/lines.svg" alt="">
      </div>
    </section>
    <section
    class="desk_view_hide"
      style="min-height: 600px; background: black; display: grid;grid-template-columns: 1fr 1fr 1fr; justify-content: center;">
      <div style="align-self: center; justify-slef: center;">
        <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
          <div style="height: 150px; width: 150px; border-radius: 50%; background: gray;"></div>
          <p style="color: white; font-size: 1.5em;">Live Streaming</p>
          <nuxt-link to="/studio">
          <button
            style="height:55px; width: 150px; background: #ff000005; border: 1px solid orange; color: white;">Learn
            More</button>
          </nuxt-link>
        </div>
      </div>
      <div style="align-self: center; justify-slef: center;">
        <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
          <div style="height: 150px; width: 150px; border-radius: 50%; background: gray;"></div>
          <p style="color: white; font-size: 1.5em;">LVideo Editing and effects</p>
          <nuxt-link to="/studio">
          <button
            style="height:55px; width: 150px; background: #ff000005; border: 1px solid orange; color: white;">Learn
            More</button>
          </nuxt-link>
        </div>
      </div>
      <div style="align-self: center; justify-slef: center;">
        <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
          <div style="height: 150px; width: 150px; border-radius: 50%; background: gray;"></div>
          <p style="color: white; font-size: 1.5em;">In studio video and sound enginee0ring</p>
          <nuxt-link to="/studio">
          <button
            style="height:55px; width: 150px; background: #ff000005; border: 1px solid orange; color: white;">Learn
            More</button>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section
    class="desk_view_hide"
      style="padding-bottom: 5em; background: black; display: grid;grid-template-columns: 1fr 1fr 1fr; justify-content: center; padding-left: 6em; color: white;">
      <div>
        <img src="~/assets/images/soundWaveTwo.svg" alt="">
      </div>
      <div style="padding-left: 5em;">
        <h1 style='margin-bottom: 0;'>Contact Us Today For More Details</h1>
        <p style="padding-bottom: 3em;">Or, book with us today</p>
        <div>
          <nuxt-link to="/contact">
          <button
            style="height:55px; width: 150px; background: #ff000005; border: 1px solid orange; color: white; margin-right: 2em;">Contact 
            Us</button>
          </nuxt-link>
         <nuxt-link to="/booking">
         <button
            style="height:55px; width: 150px; background: #ff000005; border: 1px solid orange; color: white;">Learn
            Book Now</button>
         </nuxt-link>
        </div>
      </div>

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
        script: [{
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }],
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


  .social_header {
    background: black;
    height: 600px;
    z-index: -9999;
    margin-top: -150px
  }

  .home_intro_desk_text {
    margin-top: 0;
    font-size: 3em;
    font-weight: bold;
    line-height: 1.5;
  }

  .grid_2_col {
    margin-left: 3em;
    margin-right: 3em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  /* global */
  .mar_auto {
    margin-left: auto;
    margin-right: auto;
  }

  /* container classes */

  .flex_col_center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .dash {
    display: inline-block;
    width: 10px;
    height: 3px;
    background-color: #FF6A00;
    margin-right: 1em;
  }

  .mar_bot {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
  }

  .pad_left_10 {
    padding-left: 10px;
  }

  .margin_top_3 {
    margin-top: 2em;
  }

  .margin_top_2 {
    margin-top: 2em;
  }

  .list_style {
    list-style: none;
    display: flex;
    align-items: center;
  }

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
    margin-right: 1em;
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
    display: none;
  }

  .red {
    color: red;
  }

  .shadow {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .orange {
    background-color: #FF6A00;
  }

  .arrow {
    padding-right: 1em;
    transition: all;
  }

  .hide {
    display: none;
    height: 0px;
  }
/* 
  .desk_view {
    display: block;
  } */

  /* media query  */

  @media only screen and (max-width: 600px) {
    .container {
      display: block;
    }
    .desk_view {
      display: none !important;
    }

    .desk_view_hide {
      display: none !important;
    }
  }

  @media only screen and (min-width: 700px) {
    .show_large {
      display: block;
    }
  }

</style>
