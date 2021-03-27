<template>
    <div class="body_cta">
        <div class="card_body">
          <h2 class="title">Live Sound Compound</h2>
          <ul class="list">
            <li class="list_style">
              <div class="dash shadow"></div>
              <p>Live Video Streaming</p>
            </li>
             <li class="list_style">
              <div class="dash shadow"></div>
              <p>Video Editing</p>
            </li>
             <li class="list_style">
              <div class="dash shadow"></div>
              <p>Digital Effects</p>
            </li>
          </ul>
          <button class="btn shadow">Book Now </button>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
 .body_cta {
    padding-left: 2em;
  }
  .dash {
    display: inline-block;
    width: 10px;
    height: 3px;
    background-color: #FF6A00;
    margin-right: 1em;
  }

  .list {
    padding-left: 10px;
  }

  .list_style {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .title {
    margin-top: 1em;
  }

  .overlay {
    position: absolute;
    top: 0;
    background: #ff6a0077;
    z-index: 999999;
    width: 100%;
    height: 100%;
  }

  .cta_image_container {
    text-align: center;
    margin-top: 2em;
    position: relative;
  }

  .cta_image {
    width: 100vw;
    margin-right: auto;
    margin-left: auto;
  }

</style>