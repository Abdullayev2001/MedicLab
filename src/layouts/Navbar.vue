<template>
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <span>
                        <h1>Medical Lab</h1>
                    </span>
                </div>
                <ul class="menu" v-if="!is_mobile">
                    <li v-for="item in menu_array" :key="item.text">
                        <router-link class="link" to="">{{item.text}}</router-link>
                    </li>
                </ul>
                <div 
                 class="burger"
                 v-if="is_mobile"
                 @click="is_burger_open = !is_burger_open">
                    <BurgerMenu  :is_active="is_burger_open"/>
                </div>
                <div class="mobile_menu" v-if="is_mobile"></div>
                <div class="actions">
                    <div class="search">
                        <i class="fas fa-search" v-if="!is_mobile"></i>
                    </div>
                    <div class="language" @click="toggleDropdown">
                        <span>ENG</span>
                        <i  class="fas fa-angle-down"  :style="{transform: is_dropdown_open ?`rotate(180deg)` : `rotate(0)`,
                        transition:'0.3s'
                        }"></i>
                        <ul class="dropdown " @click.stop :class="{active: is_dropdown_open}" >
                            <li>rus</li>
                            <li>uzb</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import menu from '../frags/menu.js'
import BurgerMenu from './BurgerMenu.vue'
import { ref } from 'vue'

const menu_array = menu
const is_dropdown_open = ref(false)
const is_burger_open = ref(false)
const is_mobile = ref(true)
const toggleDropdown = ()=>{
    is_dropdown_open.value = !is_dropdown_open.value
}
</script>

<style lang="scss">
  @import '@/layouts/styles/_navbar.scss';
</style>