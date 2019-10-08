<template>
  <div id="app">
   
    <router-view/>
     <!-- 判断当前需要的foot组件 -->
    <footerGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
//引入公共底部组件
import footerGuide from './components/footerGuide/footerGuide'
export default {
  components: {
    footerGuide
}
}
</script>

<style>
#app {
  background:#f5f5f5;
  width:100%;
  height:100%;
}
</style>
