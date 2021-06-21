<template>
  <div>
    <div class="top">
        <button 
            @click="selectedCompoment='SideBar'"
        >Vue JS
      </button>
    </div>

    <div class="left">
      <component :is="selectedCompoment"> </component>
    </div>

    <div class="right">
      <app-main></app-main>
    </div>
  </div>
</template>

  
<script>
import SideBar from './components/SideBar.vue'
import Home from '../components/Home.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'Layout',
  data(){
    return {
      selectedCompoment: 'SideBar', 
    }
  }, 

  components: {
    SideBar,
    Home,
    AppMain,
  }
};
</script>

<style lang="scss">

.top {
  display:flex;
  align-items: center;
  margin: 10px 10px;
  padding: 10px 10px 10px 10px;
  background-color: chocolate;
}

ul {
  list-style-type: none;
  line-height: 30px;
  border-bottom: 1px solid white;
}

center {
  color : white;
  font-size: 1.6rem
}

.left {
  width: 20%;
  margin-left: 10px;
  background-color: chocolate;
  padding: 5px 5px;
  min-height: 100vh;
  float: left;
}

button {
  background-color: #F1F1F1;
  color: #000;
  margin-left: 10px;
  padding: 10px 24px;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 5px;
}

.right {
  width: calc(80% - 30px);
  min-height: 100vh;
  margin-left: 10px;
  margin-right: 10px;
  background-color: chocolate;
  padding: 5px 5px;
  float: left;

}

.wrapper {
  background-color: #d5d8db;
  margin: 20px;
  border-color: #e7e7e7;
  padding: 40px;
  border-radius: 3px;
  

}

.wrapper pre {
  background-color: #f9f9f9;
  padding: 18px 6px;
  margin-top: 10px;
  overflow-x: scroll;
  word-wrap: break-word;
 
}
</style>
