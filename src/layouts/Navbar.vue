<template>
    <header class="header" :class="{ active: is_navbar_active }">
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <span>
                        <h1>LOGO</h1>
                    </span>
                </div>
                <ul class="menu" v-if="!is_mobile">
                    <li v-for="item in menu_array" :key="item.text">
                        <router-link class="link" to="">{{ item.text }}</router-link>
                    </li>
                </ul>

                <div class="mobile_menu" :class="{ mobile_menu_active: is_burger_open }" v-if="is_mobile">
                    <ul>
                        <li v-for="item in menu_array" :key="item.text">
                            <router-link class="mobile_menu_link" to="">{{ item.text }}</router-link>
                        </li>
                    </ul>
                    <div class="search">
                        <i class="fas fa-search"></i><span>Search</span>
                    </div>
                </div>
                <div class="actions">
                    <div class="search">
                        <i class="fas fa-search" v-if="!is_mobile"></i>
                    </div>
                    <div class="language" @click="toggleDropdown">
                        <span>ENG</span>
                        <i class="fas fa-angle-down" :style="{
                            transform: is_dropdown_open ? `rotate(180deg)` : `rotate(0)`,
                            transition: '0.3s'
                        }"></i>
                        <ul class="dropdown " @click.stop :class="{ active: is_dropdown_open }">
                            <li>rus</li>
                            <li>uzb</li>
                        </ul>
                    </div>
                </div>
                <div class="burger" v-if="is_mobile" @click="is_burger_open = !is_burger_open">
                    <BurgerMenu :is_active="is_burger_open" />
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import menu from '../frags/menu.js'
import BurgerMenu from './BurgerMenu.vue'
import { ref, onMounted } from 'vue'

const menu_array = menu

const is_dropdown_open = ref(false)
const is_burger_open = ref(false)
const is_mobile = ref(false)
const is_navbar_active = ref(false)
const lg = ref(970)

const toggleDropdown = () => {
    is_dropdown_open.value = !is_dropdown_open.value
}
onMounted(() => {
    checkWindowWidth()
    window.addEventListener('resize', checkWindowWidth)
    window.addEventListener('scroll', () => {
        window.pageYOffset > 0
            ? is_navbar_active.value = true
            : is_navbar_active.value = false
    })
})
const checkWindowWidth = () => {

    if (window.innerWidth < lg.value) {
        is_mobile.value = true
        return
    }
    is_mobile.value = false
    is_burger_open.value = false
}
</script>

<style lang="scss">
@import '@/layouts/styles/_navbar.scss';
</style>