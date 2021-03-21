<template>
  <div class="container">
    <h1>Home page</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// call commit to ask the mutations to change state
// map mutations is used for getting access to the states mutation methods in the template
// I want to try and get the booking request I should move this to the booking page
export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    },
    getCounter () {
      return this.$store.state.counter
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
      log: 'log'
    })
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
  }
</style>
