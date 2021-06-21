<template>
    <div class="main">
        <router-view :key="key"></router-view>  
    </div>
</template>

<script>
/* import { Example } from '@/components' */

export default {
    computed:{
        key(){
          return this.$route.path;
        }
    }
}
</script>

<style>
.main{
    min-width: 100vh;
}
</style>