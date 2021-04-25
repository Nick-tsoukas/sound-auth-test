<template>
  <div>
    <section class="mobile_container">
      <!-- get a background image on this one -->
      <div class="top_header">
        <p class="pre_title">Our Studio</p>
        <h2>Live Sound Compound</h2>
        <p class="header_body_text">Our Studio, located in Chicago, we have the equipment, man power, and technology to
          suit your digital needs. Contact us with any questions</p>
        <button class="btn shadow">
          <nuxt-link class="link_style" to="/contact">Contact Us Now</nuxt-link>
        </button>
      </div>
      <section class="studio_features">
        <h2>Studio Features</h2>
        <Accordion />
      </section>
      <section class="pad">
        <h2>Our Services</h2>
        <StudioCard title="Live Streaming" />
        <StudioCard title="Video Editing" />
        <StudioCard title="Digital Effects" />
      </section>
      <section>
        <div class="cta_image_container">
          <img class="cta_image" src="~/assets/images/band_four.jpeg" alt="Band playing music">
          <div class="overlay"></div>
        </div>
        <div class="form_container">
          <h2>Let's Work Together</h2>
          <p>Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With
            are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth</p>
          <FormulateInput type="text" label="Frist Name" validation="required" error-behavior="blur"
            v-model="firstname" />
          <FormulateInput type="text" label="Last Name" validation="required" error-behavior="blur"
            v-model="lastname" />
          <FormulateInput type="email" label="email" v-model="email" validation="required|email"
            error-behavior="blur" />
          <FormulateInput type="tel" label="Last Name" validation="required" error-behavior="blur"
            v-model="phonenumber" />
          <FormulateInput type="textarea" label="message" validation="required" error-behavior="blur"
            v-model="message" />
          <button class="sub shadow">Submit</button>
        </div>
      </section>
    </section>
    <!-- desktop view  -->
    <section class="desk_view_header">
      <div class="top_header">
        <p class="pre_title">Our Studio</p>
        <h2>Live Sound Compound</h2>
        <p class="header_body_text">Our Studio, located in Chicago, we have the equipment, man power, and technology to
          suit your digital needs. Contact us with any questions</p>
        <button style="margin-left: 6em;" class="btn shadow">
          <nuxt-link class="link_style" to="/contact">Contact Us Now</nuxt-link>
        </button>
      </div>
    </section>
    <section style="padding-left: 3em; padding-right: 3em;" class="desk_card_container desk_view_hide">
      <StudioCard title="Live Streaming" />
      <StudioCard title="Video Editing" />
      <StudioCard title="Digital Effects" />
    </section>
    <!-- cta for desktop  -->
    <section class="dct desk_view_hide">
        <!-- <div class="cta_image_container">
          <img class="cta_image" src="~/assets/images/band_four.jpeg" alt="Band playing music">
          <div class="overlay"></div>
        </div> -->
        <div class="form_container desk_view_hide">
          <h2>Let's Work Together</h2>
          <p>Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With
            are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth</p>
          <FormulateInput type="text" label="Frist Name" validation="required" error-behavior="blur"
            v-model="firstname" />
          <FormulateInput type="text" label="Last Name" validation="required" error-behavior="blur"
            v-model="lastname" />
          <FormulateInput type="email" label="email" v-model="email" validation="required|email"
            error-behavior="blur" />
          <FormulateInput type="tel" label="Last Name" validation="required" error-behavior="blur"
            v-model="phonenumber" />
          <FormulateInput type="textarea" label="message" validation="required" error-behavior="blur"
            v-model="message" />
          <button class="sub shadow">Submit</button>
        </div>
       <section class="cta_im_d desk_view_hide">
       </section>
      </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: ''
      }
    }
  }

</script>

<style scoped>
  /* desk style */

.cta_im_d {
  background-image: url('~assets/images/band_four.jpeg');
  background-position: center cnter;
  background-size: cover;
  background-repeat: no-repeat;

}
.dct {
    padding-top: 3em;
    padding-bottom: 3em;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
  .desk_card_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .desk_view_header {
    height: 350px;
  }

  /* mobile styles */
  .sub {
    background: #FF6A00;
    border: none;
    color: white;
    padding: 1em 1.5em;
  }

  .form_container {
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 1em;
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

  .pad {
    padding-left: 2em;
    padding-right: 2em;
  }

  .studio_features {
    padding-left: 2em;
    padding-right: 2em;
  }

  .pre_title {
    margin-top: 0;
  }

  .header_body_text {
    font-size: 1.2em;
  }

  .top_header {
    height: 250px;
    position: relative;
    padding-left: 2em;
    padding-right: 2em;
    background-image: url('~assets/images/band_four.jpeg');
    color: white;
    padding-top: 1em;
    border-bottom: 5px solid #FF6A00;
  }

  .btn {
    position: absolute;
    bottom: 1em;
    left: 2em;
    background-color: #FF6A00;
    border-radius: 5%;
    color: white;
    border: none;
    padding: 1em 1.5em;
  }


  @media only screen and (min-width: 600px) {
    .mobile_container {
      display: none !important;
    }

    .top_header {
      position: relative;
      background-image: url('~assets/images/band_four.jpeg');
      color: white;
      border-bottom: 5px solid #FF6A00;
      background-size: cover;
      background-position: center center;
      padding-left: 7em;
      padding-top: 3em;
    }
    .form_container {
      padding-left: 4em;
      padding-right: 4em;
    }
   
  }

</style>
