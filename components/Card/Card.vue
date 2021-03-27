<template>
    <div class="main_card">
        <div class="card_image_container">
            <img class="card_image shadow" src="~/assets/images/band_one.jpeg" alt="">
            <div class="icon_container shadow"> <img src="~/assets/images/serviceIcon.svg" alt=""></div>
        </div>
        <div class="card_body">
            <h3 class="title"> {{title}} </h3>
            <ul class="list">
                <li class="list_style" v-for="text in body" :key="text">
                   <div class="dash shadow"></div> {{text}}
                </li>
            </ul>
        </div>
        <div class="card_btns">
            <button class="btn shadow"><nuxt-link class="link_style" to="/booking">Book Now</nuxt-link></button>
            <button class="btn shadow"><nuxt-link class="link_style" to="/studio">Learn More</nuxt-link></button>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'body'
        ]
    }
</script>

<style  scoped>

.title {
    margin-top: 2em;
}
.icon_container {
    width: 30px;
    background: #FF6A00;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
    border-radius: 10%;
    position: absolute;
    bottom: -8px;
    left: 10px;

}
.main_card {
    margin-bottom: 3em;
}

.orange {
        background-color: #FF6A00;
}
.or_border {
    border-radius: 5%;
    border: 3px solid #FF6A00;
}
.dash {
    display: inline-block;
    width:10px;
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
.card_image {
    max-width: 80vw;
    border-radius: 5%;
    border: 3px solid #FF6A00;
}
    .card_image_container {
        position: relative;
    }
</style>


