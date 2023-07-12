<template>
    <section class="home-main">
        <div class="container">
            <ContentWrapper>
                <h3 class="subtitle">{{ subtitle }}</h3>
                <h1 class="title">{{ title }}</h1>
                <p class="text">
                    {{ text }}
                </p>
                <div class="buttons">
                    <TheButton>Get Started</TheButton>
                    <TheButton :light="true">Catalog</TheButton>
                </div>
            </ContentWrapper>
            <div class="banner">
                <img :src="mainImg" alt="">
            </div>
            <div class="main-socials" >
                <a
                 v-for="social in socials"
                 :key="social.icon"
                 :href="social.link" 
                 class="sci-link">
                    <i :class="social.icon"></i>
                </a>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'
import socialsArray from '@/frags/social.js'
import TheButton from '@/layouts/TheButton.vue';
import ContentWrapper from '../components/contentWrapper.vue';
import mainImg from '../../../images/pages/main2.jpg?url'


const socials = socialsArray
const subtitle = ref(' Why choose us')
const title = ref('Get Started & Work with Us.')
const text = ref(`
                    When, while lovely valley teems with vapour around meand meridiansun strikes the upper impenetrable .
                    foliage of my trees, and but a thousand.
                    unknown plants are noticed by when I hear the buzz of the little world among the stalks,
                    and grow familiar with the countless indescribable forms of the insects and flies, then I feel the
                    presence
                    of the Almighty`)
const bannerImg = ref('')

</script>

<style>
@import '../styles/main-section.scss';
</style>