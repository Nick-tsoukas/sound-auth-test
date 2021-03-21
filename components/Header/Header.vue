<template>
    <header class="header flex_row">
        <div class="item_grow logo">   
            <h1 class="site_title">{{siteName}}</h1>
        </div>
        
        <nav class="item_grow flex_row">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/studio">Studio</nuxt-link>
            <nuxt-link to="/booking">Booking</nuxt-link>
            <nuxt-link to="/admin">Admin</nuxt-link>
        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                siteName: 'Test Booking'
            }
        }
    }
</script>

<style scoped>
.logo {
 display: flex;
 align-items: center; 
 padding-left: 2em;
}
    nav {
        justify-content: space-around;
        align-items: center;
    }
    a {
       text-decoration: none;
       color: white;
    }
    .header {
        background-color: black;
        color: white;
        width: 100%;
         height: 60px;  
    }
    .item_grow {
  flex-grow: 1;
}
</style>
