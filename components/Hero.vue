<template>
    <div :style="{background: backgroundColor}" class="container">
    <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'backgroundColor',
            'image'
        ]
    }
</script>

<style  scoped>
    .container {
        height: 300px;
        color: white;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>