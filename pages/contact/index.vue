<template>
        <section>
        <div class="cta_image_container">
          <img class="cta_image" src="~/assets/images/band_four.jpeg" alt="Band playing music">
          <div class="overlay"></div>
        </div>
        <div class="form_container">
          <h2>Let's Work Together</h2>
          <p>Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With
            are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth</p>
          <FormulateInput type="text" label="Frist Name" validation="required" error-behavior="blur" v-model="firstname" />
          <FormulateInput type="text" label="Last Name" validation="required" error-behavior="blur" v-model="lastname" />
          <FormulateInput type="email" label="email" v-model="email" validation="required|email" error-behavior="blur" />
          <FormulateInput type="tel" label="Last Name" validation="required" error-behavior="blur" v-model="phonenumber" />
          <FormulateInput type="textarea" label="message" validation="required" error-behavior="blur" v-model="message" />
          <button class="sub shadow">Submit</button>
        </div>
      </section>
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
 /* mobile styles  */
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


</style>