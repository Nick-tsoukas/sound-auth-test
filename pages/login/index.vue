<template>
  <div>
    <Hero title="Welcome to the login page" backgroundColor="black" />
    <section v-if="!isLoggedIn" class="container_center">
      <div v-if="authComp == 'SignupInput'">
          <SignupInput v-on:submit-form="signUp" v-on:change="changeLoginScreen" />
        </div>
        <div  v-if="authComp == 'LoginInput'">
          <LoginInput page="booking" v-on:submit-form="logIn" v-on:change="changeLoginScreen" />
        </div>
    </section>
    <section class="container" v-else>
      <div class="body_profile">
        <p>{{firstname}}</p>
      <UserDetails :firstname="firstname" :lastname="lastname" :email="email" :userId="userId" :phonenumber="phonenumber"  />
      <div>
        <h2>Booking request here</h2>
        <p v-for="book in books" :key="book"></p>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
 import {mapMutations} from 'vuex'
 import { mapState } from 'vuex'
  export default {
    // middleware: ['redirectLogin'],
    data() {
      return {
          authComp : 'LoginInput',
          isLoggedIn : false
      }
    },
     computed: mapState({
    firstname: state => state.firstname,
    lastname: state => state.lastname,
    userId: state => state.userId,
    books : state => state.books,
    email: state => state.email,
    phonenumber : state => state.phonenumber
  }),
    methods: {
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
          }).then(() => {
            this.isLoggedIn = true;
          })
        } catch (error) {
          return console.log(error);
        }
      },
      changeLoginScreen: function(val){
        this.authComp = val;
      },
      async logIn(user) {
        try {

          this.$axios.$post('http://localhost:8000/login', {
            ...user
          }).then((user) => {
            this.$store.dispatch('setAuthLogin', user);
            if (user.token) {
              this.userId = user.userId;
              this.popup = false;
            }
          }).then((data) => {
            this.isLoggedIn = true;
            return this.$router.push('/booking')
          })
        } catch (error) {
          return console.log(error);
        }
      }
    },
     ...mapMutations({
      setAuth: 'setAuth',
      setAuthLogin : 'setAuthLogin'
    }),
  }

</script>

<style scoped>
  .container_center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    width :100%;

  }
  .body_profile {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
