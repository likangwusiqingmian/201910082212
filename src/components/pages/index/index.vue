
<template>
  <div class="index-container">
    <!-- 公共头部开始 -->
    <!-- title属性传参 -->
    <HeaderTop title="陕西省西安市曲江首座...">
      <!-- 作用域插槽传参 left-->
      <span class="header-search" slot="left">
        <i class="iconfont icon-sousuo1"></i>
      </span>
      <span class="header-search" slot="right">
        <span>登录/注册</span>
      </span>
    </HeaderTop>
    <!-- swiper轮播组件 -->
    <div class="sweiper-navs">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in imgArr" :key="i">
           <img :src="item.url" />
        </div>
       
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
     

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
  <shoplist></shoplist>
  </div>
</template>
<script>
//抽离头部引入
import HeaderTop from "../../HeaderTop/HeaderTop";
//引入swiper组价
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
//抽离头部引入
import shoplist from "../../shopList/shopList";
export default {
  //映射组件
  components: {
    HeaderTop,
    shoplist
  },
  data() {
    return {
      imgArr:[
        {url:'/static/images/book1.jpg'},
        {url:'/static/images/book2.jpg'},
        {url:'/static/images/book3.jpg'}
      ]
    };
  },
  //页面结构加载完成执行
  mounted(){
    //初始化轮播图
  new Swiper('.swiper-container',{
     loop: true, // 循环模式选项
     autoplay:true,
     // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">

.HeaderTop {
  text-align: center;
}

.header-search {
  font-size: 15px;
  line-height: 42px;
}

.swiper-container {
    width:100%;
    height: 200px;
} 
.swiper-slide img 
     width:100%;
     height:100% 
</style>