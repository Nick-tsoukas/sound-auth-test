<template>
  <div>
   <div class="hero">
     <h1>The Admin Page name: {{firstname}}  admin : {{isAdmin}}</h1>
   </div>
   <!-- <h3 class="center_text">Please Login admin : {{isAdmin}}</h3> -->
   <section class="container">
     
     <div v-if="!loggedIn" class="form_conatiner">
       <LoginInput page="admin" v-on:submit-form="logIn"  />
     </div>
     <div v-else-if="isAdmin">
       <h3>user details</h3>
       <p>Admin : {{isAdmin}}</p>
       <p>Name :: {{firstname}} {{lastname}}</p>
       <p>Phone number : {{phonenumber}}</p>
       <p>email : {{email}}</p>
       <div>
         <UserBookingList :books="books" />
       </div>
     </div>
   </section>

  </div>
</template>

<script>
// need to check is user is logged in with token and is admin
// Create property on user object isAdmin set default to false
  import LoginInput from '../../components/LoginInput/LoginInput';
  export default {
    data(){
      return {
        loggedIn : false
      }
    },

    computed: {
      userId: {
        get :function() {
          return this.$store.state.userId;
        },
        set: function(newVal) {
          return this.$store.state.userId
        }
      },
      isAdmin: {
        get: function(){
         return this.$store.state.isAdmin;
        },
        set: function(){
         return  this.$store.state.isAdmin;
        }
      },
      email: {
        get: function(){
          return this.$store.state.email
        }, 
        set: function(){
          return this.$store.state.email
        }
      },
       firstname: {
        get: function(){
          return this.$store.state.firstname
        }, 
        set: function(){
          return this.$store.state.firstname
        }
      },
       lastname: {
        get: function(){
          return this.$store.state.lastname
        }, 
        set: function(){
          return this.$store.state.lastname
        }
      },
      phonenumber: {
        get: function(){
          return this.$store.state.phonenumber
        }, 
        set: function(){
          return this.$store.state.phonenumber
        }
      },
      books: {
        get: function(){
          return this.$store.state.books;
        },
        set: function(){
          return this.$store.state.books;
        }
      }
      

    },
    
    
   components : {
     LoginInput
   },
   methods: {
    //  where does the user come from. Must be the data from the post request
      async logIn(user) {
        try {
          this.$axios.$post('http://localhost:8000/login', {
            ...user
          }).then((user) => {
            console.log(user,'ioioioioioi')
             this.$store.dispatch('setAuthLogin', user).then((data) => {
               this.loggedIn = true;
             })
          });
        } catch (error) {
          console.log('there is an error')
          return console.log(error);
        }
      }
    },
   }


</script>

<style scoped>
.center_text {
  text-align: center;
}
.form_conatiner {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.container {
  width: 100%;
  height: auto;
}
  .hero {
    height: 300px;
    width: 100%;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
