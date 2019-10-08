
<template>
  <div class="text-container">
  <HeaderTop title="我的">
    <span class="header-search" slot="left">
     
    </span>
    <span class="header-search" slot="right">
     
    </span>
  </HeaderTop>
  <!-- 退出登录 -->
  <router-link to="/login">退出</router-link>
  </div>
</template>

<script>
//抽离头部引入
import HeaderTop from "../../HeaderTop/HeaderTop";
export default {
  //映射组件
  components: {
    HeaderTop
  },
  data() {
    return {};
  }
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


     

  </style>