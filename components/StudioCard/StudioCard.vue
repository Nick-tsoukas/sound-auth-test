<template>
  <div class="main_card">
    <div class="card_image_container">
      <img class="card_image shadow" src="~/assets/images/band_one.jpeg" alt="">
      <div class="icon_container shadow"> <img src="~/assets/images/serviceIcon.svg" alt=""></div>
    </div>
    <div class="card_body">
      <h3 class="title">{{title}}</h3>
      <p>Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth</p>
    </div>
    <div class="card_btns">
      <button class="btn shadow"><nuxt-link class="link_style" to="/booking">Book Now</nuxt-link></button>
    </div>
  </div>
</template>

<script>
  export default {
      props : ['title']
  }

</script>

<style scoped>
.link_style {
   text-decoration: none;
   color: inherit;
}
  .title {
    margin-top: 2em;
  }

  .icon_container {
    width: 30px;
    background: #FF6A00;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    border-radius: 10%;
    position: absolute;
    bottom: -8px;
    left: 10px;
  }

  .main_card {
    margin-bottom: 3em;
  }

  .btn {
    background-color: #FF6A00;
    color: white;
    border: none;
    padding: .8em 1.5em;
    border-radius: 5%;
    margin-right: 1em;
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

  .card_image {
    max-width: 80vw;
    border-radius: 5%;
    border: 3px solid #FF6A00;
  }

  .card_image_container {
    position: relative;
  }

</style>
