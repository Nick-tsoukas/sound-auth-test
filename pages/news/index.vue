<template>
    <div>
       <section>
           <img class="header_image" src="~/assets/logos/light_logo.jpg" alt="">
           <p class="center">From the blog</p>
       </section>
       <section>
           <!-- <PostListMobile :posts="posts" /> -->
           <p :v-for="(post, index) in posts" :key="index">{{post.title}}</p>
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
</style>


 