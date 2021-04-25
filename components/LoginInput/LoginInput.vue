<template>
  <div class="form_group flex_col ">
    <h1 style="text-align: center;">Login</h1>
    <FormulateInput type="email" name="email" v-model="email" validation="required|email" error-behavior="live"  />
    <FormulateInput type="password" name="password" v-model="password" validation="required" error-behavior="live" />
    <!-- <label for="password">Password</label>
    <input class="input" type="text" v-model="password"> -->
    <button class="btn" @click="submitForm" type="button"> Login </button>
    <div v-show="page === 'booking'" class="flex_row">
      <p>Don't have an account ...</p>
      <p @click="change" class="login_text">Sign Up</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'title',
      'header',
      'page'
    ],
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submitForm() {
        this.$emit('submit-form', {
          email: this.email,
          password: this.password
        });
      },
      change() {
        this.$emit('change', 'SignupInput')
      }
    }
  }

</script>

<style scoped>
  .login_text {
    color: blue;
    font-style: italic;
    padding-left: 1em;
    cursor: pointer;
  }

  .btn {
    padding-top: 1em;
    padding-bottom: 1em;
    background: black;
    color: white;
  }

  .form_group {

  }

  .input {
    margin-bottom: 2em;
  }

  label {
    padding-bottom: .5em;
  }

  /* media queries */

  @media only screen and (min-width: 1000px) {
  .form_group {
    min-width: 400px;
  }
}

</style>
