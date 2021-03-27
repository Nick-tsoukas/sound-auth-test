<template>
    <div>
        <h1>This is the single blog page</h1>
        <p>With this we will get the post from the server</p>
        {{this.$route.params.id}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>