<template>
    <div>
    <div class="m">
       <section>
           <img class="header_image" src="~/assets/logos/light_logo.jpg" alt="">
           <p class="center">From the blog</p>
       </section>
       <section>
           <PostListMobile :posts="posts" />
       </section>
       </div>

       <section style="background: black; color: white; display: flex; justify-content: center; align-items: center;  min-height: 300px;" class="d">
           <header >
               <h1>Check out our latest news!</h1>
           </header>
       </section>
        <section>
            <PostListDesk :posts="posts" />
        </section>
    </div>
</template>

<script>
    export default {
       async asyncData({ $content }) {
       const posts = await $content("blog").fetch();
        return {
            posts,
        };
        },
    }
</script>

<style scoped>
    .header_image {
        width: 100%;
    }
    .center{
        text-align: center;
    }

    /* media query  */
    /* @media only screen and (min-width: 600px) {
    .header_image {
        height: 250px;
        width: 500px;
    }
  } */
  @media only screen and (min-width: 600px) {
    .m {
      display: none;
    }
  }
  @media only screen and (max-width: 800px) {
    .d {
      display: none;
    }
  }
</style>


 