<template>
  <div class="a_container shadow">
    <div @click="open" class="bar border">
      <section class="flex_cont">
        <div class="icon_container">
          <img class="arrow" src="~/assets/images/arrow_left.svg" alt="arrow left">
          <img src="~/assets/images/listicon.svg" alt="list icon">
        </div>
        <div class="list_name">
          <p>Equipment List</p>
        </div>
      </section>
      <transition name="slide-fade">
        <div v-if="ac_1" class="info ">
          <p style="color: black;">
            This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the
            appropriate classes that we.
          </p>
        </div>
      </transition>
    </div>
    <div @click="opentwo" class="bar border">
      <section class="flex_cont">
        <div class="icon_container">
          <img class="arrow" src="~/assets/images/arrow_left.svg" alt="arrow left">
          <img src="~/assets/images/listicon.svg" alt="list icon">
        </div>
        <div class="list_name">
          <p>Size and capacity</p>
        </div>
      </section>
      <transition name="slide-fade">
        <div v-if="ac_2" class="info ">
          <p style="color: black;">
            This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the
            appropriate classes that we.
          </p>
        </div>
      </transition>
    </div>
    <div @click="openthree" class="bar">
      <section class="flex_cont">
        <div class="icon_container">
          <img :class="{'turn' : ac_3}" class="arrow" src="~/assets/images/arrow_left.svg" alt="arrow left">
          <img src="~/assets/images/listicon.svg" alt="list icon">
        </div>
        <div class="list_name">
          <p>Equipment List</p>
        </div>
      </section>
      <transition name="slide-fade">
        <div v-if="ac_3" class="info ">
          <p style="color: black;">
            This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the
            appropriate classes that we.
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        ac_1: false,
        ac_2: false,
        ac_3: false
      }
    },
    methods: {
      open() {
        this.ac_1 = !this.ac_1;
      },
      opentwo() {
        this.ac_2 = !this.ac_2;
      },
      openthree() {
        this.ac_3 = !this.ac_3;
      }
    }
  }

</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active below version 2.1.8 */
    {
    transform: translateX(10px);
    opacity: 0;
  }

  .info {
    display: block;
    background: white;
    padding: 1em;
  }

  .hide {
    display: none;
    height: 0px;
  }

  .show {
    display: block !important;
    height: auto !important;
  }

  .flex_cont {
    display: flex;
    align-items: center;
  }

  p {
    color: white;
  }

  .icon_container {
    display: flex;
    padding-left: 1em;
  }

  .arrow {
    padding-right: 1em;
    transition: all;
  }

  .list_name {
    margin-left: 1em;
  }

  .bar {
    position: relative;
  }

  .border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.753);

  }

  .a_container {
    width: 80vw;
    border-radius: 5%;
    background: #FF6A00;

    margin-bottom: 2em;
  }

</style>
