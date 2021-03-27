<template>
  <div class="footer_container">
    <section class="top_footer">
      <div>
        <nuxt-link to="/">
           <img class="logo" src="~/assets/logos/mobile_logo.jpg" alt="">
        </nuxt-link>
       
      </div>
      <div>
        <p class="title">Live Sound Compound</p>
        <p>This is what we do and what we stand for. Perfect Sound</p>
        <!-- this needs two columns -->
      </div>
    </section>
    <div class="link_grid">
      <div class="link_col">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/studio">Studio</nuxt-link>
        <nuxt-link to="/booking">Booking</nuxt-link>
        <nuxt-link to="/news">News</nuxt-link>
      </div>
      <div class="link_col">
        <nuxt-link to="/gallery">Gallery</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <nuxt-link to="/login">Login</nuxt-link>
      </div>
    </div>
    <div class="bottom_footer">
      <a href="https://www.facebook.com/LiveSoundCompound/">
        <img class="icon" src="~/assets/images/face.svg" alt="">
      </a>
       <a href="https://www.youtube.com/channel/UCo6cI_2gFUMFwIHIqub-wXQ">
        <img class="icon" src="~/assets/images/tube.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>

.link_col >* {
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin-bottom: .5em;
}
  .icon {
    height: 30px;
    margin-left: 1em;
  }

  .link_grid {
    display: grid;
    grid-template-columns: .5fr 2fr;
  }

  .title {
    margin-top: -1em;
  }

  .logo {
    height: 100px;
  }

  .footer_container {
    background-color: #444444;
    color: white;
    padding-left: 1em;
  }

  .top_footer {
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-height: 180px;
  }

  .bottom_footer {
    display: flex;
    align-items: center;
    padding-right: 2em;
    height: 80px;
    justify-content: flex-end;
  }

</style>
