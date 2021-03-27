<template>
  <div>
    <Hero backgroundColor="black" title="Welcome to the booking page" />
    <h2 class="text_center">Select time and date to make a booking request</h2>
    <section class="form_group">
      <div class="mar_bot">
        <label style="margin-right: 3em; min-width: 200px;">Date</label>
        <date-picker v-model="date" valueType="format"></date-picker>
      </div>
      <div class="mar_bot">
        <label style="margin-right: 3em;min-width: 200px;">Time</label>
        <date-picker v-model="time" :disabled="date ? false : true" valueType="timestamp" :hour-options="[1,2,3]" :time-picker-options="{start: '00:00', step:'01:00' , end: '7:00', format: 'HH:mm' }" type="time"></date-picker>
      </div>
    </section>
    <section class="body_container">
      <div v-if="date">
        <RequestDetails :send="send" :time="time" :date="date" />
      </div>
    </section>
    <section ></section>
    <section v-if="userBooks"  class="body_container">
      <UserBookingList :books="userBooks" />
    </section>
    <section v-if="popup" class="overlay_signup">
      <div class="popup">
        <div v-if="authComp == 'SignupInput'">
          <SignupInput v-on:submit-form="signUp" v-on:change="changeLoginScreen" />
        </div>
        <div  v-if="authComp == 'LoginInput'">
          <LoginInput page="booking" v-on:submit-form="logIn" v-on:change="changeLoginScreen" />
        </div>
        <button @click="closePop" class="close_button">Close</button>
      </div>
    </section>
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import SignupInput from '../../components/SignupInput/SignupInput';
  import LoginInput from '../../components/LoginInput/LoginInput';
  import {
    mapMutations
  } from 'vuex'
  import 'vue2-datepicker/index.css';
  import axios from '@nuxtjs/axios'
  import { mapState } from 'vuex'
  export default {
    components: {
      DatePicker,
      SignupInput,
      LoginInput
    },
    data() {
      return {
        authComp: 'SignupInput',
        date: null,
        time: null,
        popup: false,
      };
    },
      computed: mapState({
    firstname: state => state.firstname,
    lastname: state => state.lastname,
    userId: state => state.userId,
    userBooks : state => state.userBooks,
    email: state => state.email,
    phonenumber : state => state.phonenumber
  }),
    methods: {
      changeLoginScreen(data){
        this.authComp = data;
      },
      log(data) {
        console.log('this is the submit form event with the data', data);
      }
      ,
      closePop() {
        this.popup = false;
      },
      // sends the booking request if user has jwt token. Also, opems the popup
      send: async function () {
        const value = await this.$store.dispatch('checkToken');
        if (!value) {
          return this.popup = true
        } else {
          this.$store.dispatch('sendBooking', {
            date: this.date,
            time: this.time,
            userId: this.userId
          });
        }
      },
      // Sign Up takes form data then sends to route signup. Dispatch setAuth function that sets the jwt token.
      async signUp(user) {
        try {
          this.$axios.$post('http://localhost:8000/signup', {
            ...user
          }).then((user) => {
            this.$store.dispatch('setAuth', user);
            if (user.token) {
              this.userId = user.user._id;
              this.popup = false;
            }
          });
        } catch (error) {
          return console.log(error);
        }
      },
      // Does the same as above. Need to add the login route next
      async logIn(user) {
        try {
          this.$axios.$post('http://localhost:8000/login', {
            ...user
          }).then((user) => {
             this.$store.dispatch('setAuthLogin', user);
            if (user.token) {
              console.log('I have a user here');
              this.userId = user.userId;
              this.popup = false;
            }
          })
        } catch (error) {
          return console.log(error);
        }
      }
    },
    // makes available in the template
    ...mapMutations({
      setAuth: 'setAuth'
    }),
  }

</script>

<style scoped>
  .btn {
    background: black;
    color: white;
    padding : 1.5em 3em;
  }
  .close_button {
    padding: 2em 3em;
    background-color: black;
    color: white;
    border: 1px solid red;
  }

  .popup {
    width: 500px;
    height: 500px;
    background: white;
    color: black;
    z-index: 999999999999999999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .overlay_signup {
    height: 100vh;
    width: 100%;
    z-index: 999999;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.33);
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .body_container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }


  .form_group {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    max-width: 800px;
    margin-bottom: 2em;
    justify-content: center;
  }

  .mar_bot {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
  }

  .buttons_container {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }


</style>
