<template>
  <div class="main_container">
    <section class="post_container" v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="'/news/' + post.title">
        <img :src="require(`~/${post.image}`)" alt="">
        <div class="overlay"></div>
        <div class="post_info">
          <h3 class="post_title">{{post.title}}</h3>
          <p class="post_pre">{{post.previewText}}</p>
        </div>
        </nuxt-link>
    </section>

  </div>
</template>

<script>
  export default {
    props: ['posts']
  }

</script>

<style scoped>
  .post_pre {
    margin-top: 0;
  }

  .post_title {
    margin-bottom: 10px;
  }

  .post_info {
    position: absolute;
    height: 100px;
    background: rgba(0, 0, 0, 0.562);
    width: 100%;
    bottom: 0;
    z-index: 9999;
    color: white;
    padding-left: 2em;
    padding-right: 2em;
  }

  .post_container {
    position: relative;
    margin-bottom: 2em;
  }

</style>
