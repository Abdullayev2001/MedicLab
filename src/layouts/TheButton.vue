<template>
    <button class="the-btn" :class="{light: light}">
        <slot />
    </button>
</template>

<script setup>
    const props = defineProps({
        light:Boolean
    })
</script>

<style lang="scss">
    @import '@/styles/components/_vars.scss';
    @import '@/styles/components/_mixins.scss';
    .the-btn{
        width: 200px;
        height: 55px;
        border-radius: 50px;
        font-size: 15px;
        color: $white;
        background: $brand_color;
        font-family: 'Montserrat','sans-serif';
        box-shadow: -15px 20px 50px rgba(29,104,191, 0.3);
        &.light{
            background: $white;
            color: $brand_color;
        }
    }
</style>