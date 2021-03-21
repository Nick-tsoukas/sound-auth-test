<template>
  <div class="form_group flex_col ">
    <h1 style="text-align: center;">Login</h1>
    <label for="email">Email</label>
    <input class="input" type="text" v-model="email">
    <label for="password">Password</label>
    <input class="input" type="text" v-model="password">
    <button class="btn" @click="submitForm" type="button"> Login </button>
    <div class="flex_row">
          <p>Don't have an account ...</p>
          <p @click="change" class="login_text">Sign Up</p>
    </div>
  </div>
</template>

<script>
  export default {
    props : [
      'title',
      'header'
    ],
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        submitForm(){
            this.$emit('submit-form', {email: this.email, password: this.password});
        },
        change(){
            console.log('this is the login input ')
          this.$emit('change','SignupInput')
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
   min-width: 400px;
 }

 .input {
   margin-bottom: 2em;
 }
 label {
   padding-bottom: .5em;
 }

</style>
