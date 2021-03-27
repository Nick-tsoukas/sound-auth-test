<template>
    <div>
        <p>{{firstname}}</p>
        <p>{{lastname}}</p>
        <p>{{phonenumber}}</p>
        <p>{{userId}}</p>
        <p>{{email}}</p>

    </div>
</template>

<script>
    export default {
        props : [
            'firstname',
            'lastname',
            'email',
            'phonenumber',
            'userId'
        ]
    }
</script>

<style  scoped>

</style>