
<template>
  <div class="footer">
   <div class="footer-gound">
      <span class="ground-item" :class="{on: '/index' ===$route.path}" @click="goTo('/index')">
         <span>动态</span>
        <span class="item-iocn">
          <span class="iconfont icon-dongtai"></span>
        </span>
      </span>
   </div>
    <div class="footer-gound">
      <span class="ground-item" :class="{on: '/home' ===$route.path}" @click="goTo('/home')">
        <span>管理</span>
        <span class="item-iocn">
          <span class="iconfont icon-guanli"></span>
        </span>
      </span>
   </div>
    <div class="footer-gound">
      <span class="ground-item" :class="{on: '/center' ===$route.path}" @click="goTo('/center')">
        <span>工作</span>
        <span class="item-iocn">
          <span class="iconfont icon-gongzuo"></span>
        </span>
      </span>
   </div>
    <div class="footer-gound">
      <span class="ground-item" :class="{on: '/text' ===$route.path}" @click="goTo('/text')">
        <span>我的</span>
        <span class="item-iocn">
          <span class="iconfont icon-wode"></span>
        </span>
        
      </span>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  //定义方法
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
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

$color = lightblue
$background-color = red
$font-size = 40px


  #app 
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


  .title
     color:$color
     font-size:$font-size
     background-color:$background-color
 .footer
    position: fixed;
    width: 100%;
    height: 50px;
    background: #e4e4e4;
    bottom: 0;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
.footer .ground-item
     display:flex
     justify-content: center;
     flex-direction: column-reverse
     align-items: center
    
.on 
    color: #409cef;
    font-weight:400
.item-iocn .iconfont 
           font-size: 21px
  </style>