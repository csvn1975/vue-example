<template>
  <div>
    <!-- <router-link
      class="menu-item"
      v-for="(route, index) in activeRoutes"
      :key="index"
      :to="route.path"
    >
      {{ route.title }}</router-link
    > -->

    <el-menu>
      <side-bar-item  
      v-for="(route, index) in activeRoutes"
      :key= "index"
      :menuItem = "route"
      > {{ route.meta.title }} </side-bar-item>

    </el-menu>
  </div>
</template>

<script>
import routes from '@/routes';
import SideBarItem from './SideBarItem'
export default {
  data() {
    return {
      routes,
    };
  },

  methods: {
    showComponent() {},
  },

  components: {
     SideBarItem,
  },

  computed: {
    activeRoutes() {
      return routes
        .filter((route) => {
          return !route.hidden;
        })
        .sort((a, b) => {
          if (a.meta.title == b.meta.title) return 0;
          else return a.meta.title >= b.meta.title ? 1 : -1;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
router-link:hover {
  background-color: transparent;
}

a.menu-item,
a.menu-item:hover,
a.menu-item:active {
  display: block;
  color: white;
  padding: 5px 30px 5px 5px;
  text-decoration: none;
}

a.menu-item:hover {
  border-bottom: 1px solid white;
}
</style>
