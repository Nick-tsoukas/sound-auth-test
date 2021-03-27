<template>
  <div class="form_group flex_col ">
    <h1 style="text-align: center;">Sign Up</h1>
    <label for="email">Email</label>
    <input class="input" type="text" v-model="email">
     <label for="email">First name</label>
    <input class="input" type="text" v-model="firstName">
     <label for="email">Last name</label>
    <input class="input" type="text" v-model="lastName">
     <label for="email">Phone number</label>
    <input class="input" type="tel" v-model="phoneNumber">
    <label for="password">Password</label>
    <input class="input" type="text" v-model="password">
    <button class="btn" @click="submitForm" type="button"> Sign up </button>
    <div class="flex_row">
          <p>Already have an account ...</p>
          <p @click="change" class="login_text">Login</p>
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
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
      }
    },
    methods: {
        submitForm(){
            this.$emit('submit-form', {email: this.email, password: this.password, firstName: this.firstName, lastName: this.lastName, phoneNumber: this.phoneNumber});
        },
        change(){
          this.$emit('change','LoginInput')
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
