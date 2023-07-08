<template>
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <span>
                        <h1>Medical Lab</h1>
                    </span>
                </div>
                <ul class="menu">
                    <li v-for="item in menu_array" :key="item.text">
                        <router-link to="">{{item.text}}</router-link>
                    </li>
                </ul>
                <div class="burger"></div>
                <div class="mobile_menu"></div>
                <div class="actions">
                    <div class="search">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div class="language">
                    <span>ENG</span>
                    <i class="fas fa-angle-down"></i>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import menu from '../frags/menu.js'
import { ref } from 'vue'

const menu_array = menu
</script>

<style lang="scss">

</style>