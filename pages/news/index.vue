<template>
    <div>
       <section>
           <img class="header_image" src="~/assets/logos/light_logo.jpg" alt="">
           <p class="center">From the blog</p>
       </section>
       <section>
           <PostListMobile :posts="posts" />
       </section>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                posts : [
                    {   image: 'assets/images/band_one.jpeg',
                        title: 'Rockfest',
                        previewText: 'Something in the water',
                        body: 'Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth'
                    },
                     {
                        image: 'assets/images/band_one.jpeg',
                        title: 'Rockfest',
                        previewText: 'Something in the water',
                        body: 'Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth'
                    },
                     {
                        image: 'assets/images/band_one.jpeg',
                        title: 'Rockfest',
                        previewText: 'Something in the water',
                        body: 'Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth'
                    },
                     {
                        image: 'assets/images/band_one.jpeg',
                        title: 'Rockfest',
                        previewText: 'Something in the water',
                        body: 'Need the proper sutido and euipment to preform live over stream. Live Sound Compond has you covered. With are 800 sq ft studio we can stream to your most popu.ar chanle so on and so forth'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .header_image {
        width: 100%;
    }
    .center{
        text-align: center;
    }
</style>