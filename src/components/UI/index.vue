<template>
    <div class="wrapper"> 
        <router-view></router-view>
    </div>
  
</template>

<script>
export default {
    name:'UI', 
}

</script>

<style>

a { 
    color: white;
    text-decoration: none;
    font-size: 16px;
}

h4{
    padding: 10px 0px;
}

.el-alert {
  margin-top: 10px !important;
}

.el-row{
    margin-top: 20px;
}
</style>