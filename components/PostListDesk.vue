<template>
  <div class="main_container">
    <section  v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="'/news/' + post.slug">
        <img :src="post.image" alt="">
        <div class="post_info">
          <h3 class="post_title">{{post.title}}</h3>
          <p class="post_pre">{{post.description}}</p>
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
.main_container {
    display: flex;
    margin-top: 3em;
    flex-direction: column;
    align-items: center;
}
  .post_pre {
    margin-top: 0;
  }

  .post_title {
    margin-bottom: 10px;
  }

  /* .post_info {
    position: absolute;
    height: 100px;
    background: rgba(0, 0, 0, 0.562);
    width: 375px !important;
    bottom: 0;
    z-index: 9999;
    color: white;
    padding-left: 2em;
    padding-right: 2em;
  }

  .post_container {
    position: relative;
    margin-bottom: 2em;
    max-width: 100vw;
  } */
  img {
    max-width: 100%;
  }

</style>
