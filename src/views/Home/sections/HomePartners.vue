<template>
    <section class="home-partners">

        <div class="container">
            <TheTitle :sub="sub" :title="title" />
        </div>
        <div class="slider">
            <Swiper :slides-per-view="4" :loop="true" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
               <SwiperSlide>Slide 1</SwiperSlide>
               <SwiperSlide>Slide 2</SwiperSlide>
               <SwiperSlide>Slide 3</SwiperSlide>
               <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>

    </section>
</template>

<script setup>
import TheTitle from '@/layouts/TheTitle.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'
import { ref } from 'vue'


const sub = ref('Partners')
const title = ref('Our new partner')

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>


<style lang="scss">
@import '../styles/home-partners.scss';
</style>