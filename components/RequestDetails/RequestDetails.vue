<template>
  <div>
    <div class="random mar_bot" >
      <h3 class="title">Your booking request details are below</h3>
      <p>Date : {{date}}</p>
      <p :class="{'red' : !time}">Time : {{time ? $moment(time).format('h:mm:ss a') : 'Must Pick A Time'}}</p>
      <button style="margin-top: 1em;" class="btn" @click="send">Make Booking Request</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'time',
      'date',
      'send'
    ]
  }

</script>

<style scoped>
.random {
        display: flex;
    flex-direction: column;
    margin-left: 2em;
    margin-right: 2em;
}

  .title {
    margin-bottom: 2em;
  }

  .btn {
    background: black;
    color: white;
    padding: 1.5em 3em;
  }

</style>
