<template>
  <div class="components-container">
    <div class="wrapper">
    <pre>
        <el-drag-select v-model="value" 
        style="width:300px;"
        multiple placeholder="Bitte wählen ...">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-drag-select>

      <div style="margin-top:30px;">
        <el-tag v-for="item of value" 
            :key="item" 
            style="margin-right:15px;">
          {{ item }}
        </el-tag>
      </div>
    </pre>
    </div>
  </div>
</template>

<script>
import ElDragSelect from '@/components/DragSelect'; // base on element-ui

export default {
  name: 'DragSelectDemo',
  components: { ElDragSelect },
  data() {
    return {
      value: ['Apple', 'Banana', 'Orange'],
      options: [
        {
          value: 'Apple',
          label: 'Apple',
        },
        {
          value: 'Banana',
          label: 'Banana',
        },
        {
          value: 'Orange',
          label: 'Orange',
        },
        {
          value: 'Pear',
          label: 'Pear',
        },
        {
          value: 'Strawberry',
          label: 'Strawberry',
        },
      ],
    };
  },
};
</script>
<style>
html {
  font-family: Helvetica, Arial, sans-serif;
}
.el-tag{
  color: red !important;
  font-family: Helvetica, sans-serif;
  font-size: 14px !important;
  
}
.el-drag-select,
.el-option{
  font-family: Helvetica, sans-serif;
  font-size: 14px !important;
  color: coral !important;
}
</style>
