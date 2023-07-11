
<template>
    <footer class="footer">
        <div class="for-form">
            <div class="container">
                <ContactForm />
            </div>
        </div>

        <div class="footer-content ">
            <div class="container">

                <div class="item">
                    <div class="logo">
                        <h2>Logo</h2>
                    </div>
                    <p class="text">Copyright © 2020 BioLab </p>
                    <p class="text">All rights reserved.</p>
                    <div class="footer-socials">
                        <li v-for="social in sociaArray" :key="social">
                            <a :href="social.link"><i :class="social.icon"></i></a>
                        </li>
                    </div>
                </div>

                <div class="item">
                    <h4 class="title">Contact</h4>
                    <p class="text">
                        We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet
                        projects. We deliver unconventional solutions
                        each project is a meaningful adventure
                        , in which we become partners with our clients, on the road to perfection.
                    </p>
                </div>

                <div class="item">
                    <h4 class="title">About</h4>
                    <p class="text">
                        We are idea generators, goal seekers, challenge-thirsty professionals, creators of
                        unique Internet projects. We deliver unconventional solutions
                        each project is a meaningful adventure
                        , in which we become partners with our clients, on the road to perfection.
                    </p>
                </div>
                <div class="item">
                    <h4 class="title">Location</h4>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4489.899471343768!2d69.24517668195551!3d41.3165168659417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sru!2s!4v1689072565156!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import ContactForm from './ContactForm.vue'
import social from '../frags/social.js'

const sociaArray = social
</script>

<style >
@import './styles/_footer.scss';
</style>