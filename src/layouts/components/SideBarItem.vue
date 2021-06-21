<template>
  <div>
      <!-- Menu -->
      <router-link v-if = "isNotHasChilren" :type="type" :to="menuItem.path">
        <el-menu-item :index="index">
          <i v-if = "icon"  :class="icon"></i>
          <span><slot/></span>
        </el-menu-item>
      </router-link>

      <!-- Submenu -->
      <el-submenu v-else :index="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Elements UI</span>
        </template >
         <side-bar-item  
            v-for="(subMenu, index) in menuItem.children"
            :key= "index"
            :menuItem = "subMenu"
            > {{ subMenu.meta.title }} </side-bar-item>
      </el-submenu>

  </div>
</template>

<script>
export default {
    name: 'SideBarItem',
    data(){
        return {
            index : this.menuItem.path,
            icon : this.menuItem.meta.icon,
        }
    },

    props: {
        menuItem: Object,
    },

    computed:{
        isNotHasChilren(){
           return !this.menuItem.children;
        }, 

        type (){
            return !this.menuItem.children ? 'a' : '';
        },
    },
}
</script>

<style>

</style>