<template>
  <div class="home">
    <center>
    {{ title }}
    </center>
    <div class="wrapper">
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Vue Tutorials',
    };
  },

};
</script>
<style scoped>
.home {
padding: 10px 10px 10px 20px;
}

a,
a:hover,
a:active {
  display: block;
  color: chocolate;
  padding: 5px 5px 5px;
  text-decoration: none;
}
</style>

