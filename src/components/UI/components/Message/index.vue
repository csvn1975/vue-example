<template>
  <div class="message">
    <el-row>
        <h4>Message</h4>
            <el-button type="primary" :plain="true" @click="open()">message</el-button>
        <el-button type="success" :plain="true" @click="open('success')">success</el-button>
        <el-button type="warning" :plain="true" @click="open('warning')">warning</el-button>
        <el-button type="danger" :plain="true" @click="open('error')">error</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    methods:{
        open(type='Message'){
        let uppercaseType = this.$options.filters.uppercaseFirst(type);
        this.$message({
            showClose: true,
            message: ( uppercaseType || 'Message') + ", this is a " + (uppercaseType || 'Message') + " message.",
            type,
            })
        }
    }
}
</script>

<style>

</style>