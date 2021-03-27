<template>
  <section>
    <!-- mobile header  -->
    <header class="mobile_header">
      <div class="m_logo_container">
        <img class="mobile_logo" src="~/assets/logos/mobile_logo.jpg" alt="microphone logo">
      </div>
      <div class="m_icon_container">
        <img @click="open" class="menu_icon" src="~/assets/images/hamburger.svg" alt="Live sound recording studio logo">
      </div>
    </header>
    <!-- mobile slide out menu -->
    <section :class="{open: sideNav}" class="slideout_menu">
      <div class="m_link_container">
        <nuxt-link v-on:click.native="open" to="/">Home</nuxt-link>
        <nuxt-link v-on:click.native="open" to="/studio">Studio</nuxt-link>
        <nuxt-link v-on:click.native="open" to="/booking">Booking</nuxt-link>
        <nuxt-link v-on:click.native="open" to="/news">News</nuxt-link>
        <nuxt-link v-on:click.native="open" to="/gallery">Gallery</nuxt-link>
        <nuxt-link v-on:click.native="open" to="/contact">Contact</nuxt-link>
        <nuxt-link v-on:click.native="open" to="/login">Login</nuxt-link>
      </div>
      <div class="close_btn">
          <img @click="open" class="close" src="~/assets/images/close.svg" alt="">
      </div>
    </section>
    <!-- Desktop View for header -->
    <header class="header_container">
      <section class="top_header">
        <a class="no_link_style" href="tel:312-333-2222">312-333-2222</a>
      </section>
      <section class="header">
        <div class="logo">
          <img src="~/assets/logos/light_logo.jpg" alt="">
        </div>
        <nav class="desk_view">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/studio">Studio</nuxt-link>
          <nuxt-link to="/booking">Booking</nuxt-link>
          <nuxt-link to="/news">News</nuxt-link>
          <nuxt-link to="/gallery">Gallery</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
          <nuxt-link to="/login">Login</nuxt-link>
        </nav>
      </section>
    </header>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false
      }
    },
    methods: {
        open(){
            console.log('calling the open function')
            this.sideNav = !this.sideNav;
        }
    }
  }

</script>

<style scoped>
.close {
    height: 40px;
}
.close_btn {
    position: absolute;
    top: 2em;
    right: 3em;
}
.open {
    left: 0 !important;
}
  /* mobile slide out menu */
  .slideout_menu {
    position: absolute;
    top: 0;
    left: -100vw;
    height: 100vh;
    width: 100vw;
    background: #444444;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:999999999999999999999999999;
  }

.m_link_container {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    height: 80vh;
}

 .m_link_container>* {
    text-decoration: none;
    color: white;
  }

  /* mobile hader styles */
  .m_icon_container {
    flex-grow: 1;
    text-align: right;

  }

  .m_logo_container {
    flex-grow: 1;
  }

  .mobile_logo {
    height: 80px;
  }

  .menu_icon {
    height: 40px;
    fill: white;
    color: white;
  }

  .mobile_header {
    background-color: #444444;
    min-height: 80px;
    display: flex;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
  }

  .no_link_style {
    text-decoration: none;
    color: inherit;
  }

  .top_header {
    min-height: 50px;
    background: black;
    color: white;
    padding-left: 113px;
    display: flex;
    align-items: center;
  }

  div.logo>img {
    max-height: 100px;
  }

  nav.desk_view>* {
    text-decoration: none;
    color: black;
  }

  .header_conatiner {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .header {
    background: white;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3.8em;
    padding-right: 3.8em;

  }

  .desk_view {
    flex-grow: 1.5;
    display: flex;
    justify-content: space-around;
    padding-right: 3em;
  }

  .logo {
    flex-grow: 1;
  }

  @media only screen and (max-width: 800px) {
    .desk_view {
      display: none;
    }

    .top_header {
      display: none;
    }

    .header {
      display: none;
    }
  }

  @media only screen and (min-width:800px) {
    .mobile_header {
      display: none;
    }
  }

</style>
