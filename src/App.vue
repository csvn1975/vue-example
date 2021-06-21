<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Layout/>
  </div>
</template>

<script>
import Layout from '@/layouts'
export default {
  name: 'App',
  components:{ 
    Layout,
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  background-color: #f6f6ff;
}

</style>
