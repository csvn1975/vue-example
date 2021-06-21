<template>
  <div class="button">
    <el-row>
        <h4>Button</h4>
        <el-button>Default</el-button>
        <el-button @click= "myAlert()" type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    methods:{
        myAlert(){
            alert('Button click');
        },
    }

}
</script>

<style>

</style>