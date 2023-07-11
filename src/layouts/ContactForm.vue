<template>
    <div class="contact-form">
        <div class="content">
            <h3>Contact us</h3>
            <h2>Contact with us</h2>
            <p>
                There are many variations of passages of Lorem Ipsum available  but the majority have suffered alteration in some formed humour.
            </p>
            <ul class="socials">
                <li v-for="item in socialAray" :key="item.icon">
                    <a :href="item.link" class="link-social"><i :class="item.icon"></i></a>
                </li>
            </ul>
        </div>
        <form @click.prevent class="form">
            <input class="input" type="text" placeholder="Enter your Email">
            <textarea class="input" placeholder="Enter your comments"></textarea>
            <div class="form-btn">
                <TheButton>Send</TheButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import TheButton from './TheButton.vue'
import social from '../frags/social.js'
import { ref } from 'vue'

const socialAray = social

</script>

<style lang="scss">
    @import '../layouts/styles/_contact-form';
</style>