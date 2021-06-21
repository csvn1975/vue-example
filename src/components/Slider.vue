<template>
  <div>
    <center>{{ title }}</center>
    <div class="wrapper">
      <h3 id="example-2">#2 - Multiple slider vue 2</h3>
      <div class="output">Data: {{ example2.value }}</div>
       <Slider v-model="example2.value " 
                v-bind="example2"
                ></Slider>

      <pre v-pre>
      
      npm install npm install @vueform/slider
      
      Vue 2:
      npm i @vue/composition-api --save-d
    
      # component.vue: 
      import Vue from 'vue'
      import VueCompositionAPI from '@vue/composition-api'
      Vue.use(VueCompositionAPI)

      &lt;template>
        &lt;Slider
        v-model="value"
        />
      &lt;/template>

      &lt;script>
      import Slider from '@vueform/slider/dist/slider.vue2.js'

      export default {
        components: { Slider },
        data: () => ({
        value: [20, 40]
        })
      }
    &lt;/script>

    <!-- es muss am Ende sein -->
    &lt;style src="@vueform/slider/themes/default.css">
    &lt;/style>

  </pre>
    </div>
  </div>
</template>

<script>
import Slider from '@vueform/slider/dist/slider.vue2.js'
export default {
  data: () => ({
    title: 'Slider',
    example2: {
      value: [20, 50],
    },
  }),
  components: {
    Slider,
  },
};
</script>
<style scoped src="@vueform/slider/themes/default.css"></style>
<style scoped>
.output {
  font-family: Courier, Courier New, Lucida Console, Monaco, Consolas;
  background: #000000;
  color: #ffffff;
  padding: 20px;
  margin-bottom: 50px;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
}
</style> 