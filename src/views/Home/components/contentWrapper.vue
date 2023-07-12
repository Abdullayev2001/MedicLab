<template>
    <div class="text-content">
        <slot/>
    </div>
</template>

<script setup>

</script>

<style  lang="scss" >
@import '@/styles/components/_vars.scss';
@import '@/styles/components/_mixins.scss';
    .text-content{
        max-width: 700px;
        @include xxl{
            max-width: 540px;
        }
        @include xl{
            max-width: 400px;
        }
        @include lg{
            max-width: 100%;
        }
        .subtitle{
            font-size: 25px;
            color: $brand_color;
            margin-bottom: 5px;
            @include xxl{
                font-size: 23px;
            }
            @include md{
                font-size: 20px;
            }
        }
        .title{
            font-size: 70px;
            max-width: 529px;
            @include xxl{
                font-size: 50px;
                max-width: 500px;
            }
            @include xl{
                font-size: 40px;
                max-width: 400px;
            }
            @include lg{
                max-width: 70;
            }
        }
        .text{
            font-size: 18px;
            font-family: 'Circe';
            line-height: 26px;
            margin: 10px 0 28px;
            font-weight: 400;
        }
        .buttons{
            display: flex;
            gap: 48px;
            @include xl{
                gap: 20px;
            }
            @include md{
                justify-content: space-evenly;
                flex-wrap: wrap;
                gap: 20px 10px;
            }
        }
    }
</style>