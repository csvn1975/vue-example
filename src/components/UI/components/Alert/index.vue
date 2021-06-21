<template>
  <div class="alert">
    <el-row>
        <h4>Alert</h4>
        <el-alert
            title="success alert"
            type="success">
        </el-alert>
        <el-alert
            title="error alert"
            type="error"
            effect="dark">
        </el-alert>
        
        <el-alert
            title="with description"
            type="success"
            description="This is a description.">
        </el-alert>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'Alert',
}
</script>

<style>

</style>