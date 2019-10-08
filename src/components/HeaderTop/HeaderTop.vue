
<template>
  <div class="heder-top">
    <slot name="left"></slot>
    <span class="header-title">{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
   title: String
  },
  data() {
    return {};
  },
  //定义方法
  methods: {}
};
</script>

<!-- stylus的基础用法 -->
<!--1.省略{};符号 -->
<!--2.声明变量$coloc = red; $background-color = red  调用color:$coloc-->
<!--3.add(a,b = a) a = unit(a, px) b = unit(b, px) a + b 调用：-->
<!--声明 -->
<!--声明 -->
<!--声明 -->
<!--声明 -->
<style lang="stylus" rel="stylesheet/stylus">

$color = lightblue;
$background-color = red;
$font-size = 40px;

.heder-top {
  height: 40px
  background: #409cef
  width: 100%
  text-align :center
  line-height: 40px
  color: #fff
   display:grid;
    grid-template-columns: 25% auto 25%;
}
</style>